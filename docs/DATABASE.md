# Banco de dados

## Estado

Schema inicial versionado e testado em PostgreSQL 17 local. **Nenhum banco hospedado foi criado ou alterado.** A criação de `thiagocanali-hub`, na organização autorizada `thiagocanali's projects`, região `sa-east-1`, foi recusada pelo limite de dois projetos gratuitos ativos da conta. Projetos existentes permaneceram intactos.

## Modelo editorial

`public.content_entries` reúne projetos (`project`), experimentos (`experiment`) e notas (`article`). Uma única tabela evita triplicar o fluxo de publicação e suas políticas; os campos comuns atendem à primeira experiência pública. Mídia, configurações e identidade administrativa continuam fora deste schema.

| Campo | Regra |
|---|---|
| id | UUID gerado no banco |
| kind | project, experiment ou article |
| slug | minúsculas ASCII, números e hífens; até 120 caracteres; único por kind |
| title / summary | texto não vazio; até 160 / 500 caracteres |
| body | texto puro; até 100.000 caracteres; nunca interpretado como HTML |
| technologies | array de até 30 strings |
| repository_url / external_url | opcionais, HTTPS; aplicação também valida URL e recusa credenciais embutidas |
| status | draft (padrão), published ou archived |
| published_at | timestamptz obrigatório para published |
| created_at / updated_at | timestamptz; updated_at mantido por trigger SECURITY INVOKER |

`(kind, slug)` é único. Índice parcial `(kind, published_at desc, id desc)` para listagens publicadas. Não há exclusão automática de conteúdo nem seeds de produção.

## Publicação e autorização

- SELECT de anon/authenticated só permite `status = 'published' AND published_at <= now()`.
- Rascunhos, arquivados e publicações futuras permanecem privados.
- INSERT/UPDATE/DELETE não têm grants nem policies para clientes.
- Login sozinho não concede autoria ou administração; user_metadata não participa da autorização.
- `service_role` possui CRUD para operação privilegiada fora da aplicação. O leitor da aplicação recusa chaves secretas/service-role e aceita somente publishable key.
- Administração via sessão e identidade autorizada será uma migration posterior; não existe painel nesta entrega.

## Código e configuração

Migration: `supabase/migrations/20261111234124_editorial_content.sql`, criada por `supabase migration new` (CLI 3.1.0). Configuração local em `supabase/config.toml`; serviços Auth, Storage, Realtime e Analytics desabilitados nesta fase.

Leitor em `src/lib/content/queries.ts`, protegido por `server-only`. Consultas sem cookies/sessões, com filtros explícitos, timeout de 5 s, no-store e deduplicação por request. Listagem retorna no máximo 100 itens por área, ordenados por publicação e id; não busca body. Paginação fica para quando houver volume editorial real. Detalhes não encontrados ou não publicados retornam 404.

Os tipos TypeScript iniciais espelham a migration; ainda não foram gerados de um projeto hospedado. Validadores de resposta rejeitam linhas malformadas e URLs inseguras.

## Verificação reproduzível

```sh
npm ci
npm test
npm run test:db
```

`test:db` requer Docker. Cria PostgreSQL descartável, simula os papéis da Data API, aplica todas as migrations e testa visibilidade, grants, RLS, constraints e operação privilegiada. Os fixtures ficam em transação revertida; o container é removido ao término. O script não recebe URL de banco e não toca dados hospedados. Não substitui o teste dos serviços completos do Supabase.

Antes de ativar na hospedagem: resolver limite da conta, criar projeto dedicado, inspecionar schema existente, aplicar migration versionada, executar advisors, gerar tipos e validar Data API real com publishable key. Não executar fixtures em produção. Referências oficiais: [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security) e [segurança da Data API](https://supabase.com/docs/guides/api/securing-your-api).
