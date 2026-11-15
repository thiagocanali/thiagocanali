# Migração editorial para Neon — 2026-11-15

## Inventário confirmado

- `src/lib/content/queries.ts`: leitura server-only de `content_entries` via `createPublicContentClient` (Supabase Data API); filtros de publicação, ordenação, limite 100 e detalhe por slug.
- `src/lib/supabase/public.ts`: `@supabase/supabase-js`, `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`; não utiliza cookies nem sessões.
- `src/lib/content/types.ts`: contratos de projetos, experimentos e artigos; preservar formatos de saída e estados `ready/unconfigured/unavailable`.
- `scripts/test-content-db.sh`: PostgreSQL 17 descartável com roles `anon`, `authenticated` e `service_role`; migrations e testes em `supabase/`.
- `supabase/tests/content_security.sql`: RLS para publicação, restrições de URL, slug único, impedimento de gravação por leitores e visibilidade de rascunhos.
- `.env.example`: chaves Supabase, que devem ser substituídas somente quando o leitor Neon estiver implementado e validado.
- `package.json`: dependência direta de `@supabase/supabase-js`; não há evidência de Supabase Auth, Storage, Realtime ou Edge Functions nas rotas editoriais auditadas. Busca completa no repositório ainda necessária.

## Infraestrutura Neon

- Projeto independente: `thiagocanali-hub`, id `shiny-term-36917717`, organização `org-bold-mountain-42921987`, região `aws-sa-east-1`, PostgreSQL 18.
- Projeto criado e confirmado pela API Neon. **Schema editorial aplicado no Neon isolado de desenvolvimento em 2026-11-15**, nenhum dado alterado e nenhuma credencial publicada.
- Banco inicial solicitado: `thiagocanali_hub`; confirmar nome e branch reais na API antes de usar.
- A aplicação permanece apontando ao comportamento antigo enquanto a substituição é preparada; não há deploy de produção.

## Arquitetura-alvo

- Acesso somente pelo servidor Next.js, com `DATABASE_URL` SSL em segredo do ambiente; consultas parametrizadas, limite de tempo e pool de conexões.
- Leitura pública apenas de entradas `published` com `published_at <= now()`, preservando ordenação e shape atuais.
- Separar role de leitura de role de migração; não conceder acesso anônimo direto ao banco nem reutilizar credenciais administrativas no runtime.
- Autenticação administrativa não existe como fluxo operacional confirmado no site atual: não criar login fictício ou painel sem controles de sessão e autorização revisados.
- Migrations versionadas e testes com PostgreSQL descartável antes de aplicar ao Neon; não transportar objetos `auth.*` do Supabase.
- Sem dependência de Storage, Realtime ou Edge Functions confirmada nesta camada; auditar restante antes de removê-las.

## Critérios de aceite ainda pendentes

1. Extrair schema SQL exato das migrations atuais e mapear todas as referências Supabase no repositório. **Em andamento:** schema editorial independente em `neon/migrations/0001_editorial.sql`; paridade com migration antiga ainda não comprovada.
2. Versionar schema Neon, roles e testes de isolamento; executar CI. **Em andamento:** teste PostgreSQL 18 isolado em `scripts/test-neon-schema.sh` e workflow Quality; role de runtime e testes de privilégios ainda pendentes.
3. Implementar leitor PostgreSQL e atualizar lockfile sem remover dependência antes da validação.
4. Testar migração em ambiente isolado, aplicar schema ao Neon, conferir tabelas e constraints.
5. Configurar segredo de Preview sem expor URL, validar funcionalmente e só depois planejar produção.
6. Retirar Supabase apenas após paridade de comportamento e rollback definido.

A migração **não está concluída**; criação de projeto isolado não demonstra funcionamento da aplicação.

## Verificação de conexão sem segredos (2026-11-15)

A API Neon confirmou conexão ao banco `thiagocanali_hub` no projeto `shiny-term-36917717`, versão `18.7`, inicialmente com zero tabelas públicas. Após a aprovação do CI do commit `46a41d4` (run `43750879194`), a migration editorial foi aplicada **somente ao banco Neon isolado**, em uma transação. Consulta posterior confirmou 0 registros na tabela e view, `security_barrier=true`, `security_invoker=false` e ausência de privilégio `SELECT` para `PUBLIC` na tabela base. Nenhum segredo foi publicado. O CI deve validar o SQL versionado em PostgreSQL 18 descartável antes de aplicar ao banco hospedado.

## Role de leitura editorial

A role de runtime deve ser criada como login separado, com senha gerada no gerenciador de segredos. Depois de aplicar o schema, executar `psql -v reader_role=NOME_DA_ROLE -f neon/roles/grant_editorial_reader.sql` com credenciais administrativas **somente na etapa de provisionamento**. A role recebe apenas `USAGE` no schema e `SELECT` na view `published_content`; não recebe `SELECT` na tabela de rascunhos. O script não cria usuário nem senha, não deve ser executado automaticamente contra produção e ainda não foi aplicado ao Neon hospedado.

O teste descartável `scripts/test-neon-schema.sh` agora verifica a impossibilidade de leitura da tabela base e escrita por essa role, além do filtro de rascunhos. Evidência final depende do resultado do GitHub Actions no HEAD.

## Evidências da etapa de provisionamento (2026-11-15)

- GitHub Actions Quality run `43750879194`: **success** no commit `46a41d4`, incluindo PostgreSQL 18 descartável e teste da role de leitura.
- Neon `thiagocanali_hub`: migration `0001_editorial.sql` aplicada com sucesso; tabela `public.content_entries` e view `public.published_content` criadas, ambas vazias.
- **Ainda não existe role de runtime provisionada ou conexão do Next.js com Neon.** O app permanece usando Supabase; nenhum deploy de produção foi feito.

## Role hospedada e limites de validação — 2026-11-15

A role `hub_editorial_reader` foi criada no banco Neon **sem LOGIN**, por segurança, e recebeu apenas `USAGE` no schema `public` e `SELECT` na view `published_content`. Consulta direta aos catálogos confirmou `rolcanlogin=false`, `rolsuper=false`, `rolcreaterole=false`, `rolcreatedb=false`, `base_read=false`, `view_read=true` e `base_write=false`. Isso não equivale a uma credencial de aplicação pronta: ainda falta provisionar login com segredo gerenciado e sem grants automáticos nas tabelas base.

Uma tentativa de `SET LOCAL ROLE hub_editorial_reader` pela conexão gerenciada do Neon foi recusada (`42501`, permission denied to set role); portanto **não há teste funcional de impersonação hospedada aprovado**. Os testes reais de acesso com role dedicada passaram somente no PostgreSQL 18 descartável do GitHub Actions (run `43751196448`, commit `b11b096`). Não usar uma role `read_only` genérica que conceda SELECT em todas as tabelas, pois isso exporia rascunhos. O provisionamento seguro do login e a substituição do leitor Supabase continuam pendentes.
