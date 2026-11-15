# Deploy e ambientes

## Decisões aprovadas — 2026-11-11

A plataforma alvo é Vercel com Next.js.

### Ambientes

- Desenvolvimento local: variáveis em `.env.local`, nunca versionadas.
- Preview: cada branch/PR pode gerar uma implantação isolada.
- Produção: somente após QA, segurança, conteúdo e rollback revisados.

### Fluxo Git

1. Trabalho em branch de feature/fase.
2. Commit pequeno e verificável.
3. Pull request para a branch padrão.
4. Checks de qualidade.
5. Preview Vercel.
6. Revisão funcional/visual.
7. Merge.
8. Produção após critérios de aceite.

Não fazer push direto para a branch padrão.

### Variáveis

O leitor editorial usa `SUPABASE_URL` e `SUPABASE_PUBLISHABLE_KEY`, ambas no servidor. `.env.example` contém somente placeholders. Não configurar valores ilustrativos na Vercel.

Quando Supabase for criado:
- URL e publishable key poderão existir no cliente conforme a integração oficial;
- chaves secretas/service-role ficarão exclusivamente no servidor;
- variáveis serão separadas por ambiente.

### Domínio

`thiagocanali.vercel.app` está **configurado e verificado** no projeto Vercel atual. A API da Vercel reporta implantação de `main` com target `production` e estado `READY`.

### Observabilidade e recuperação

Antes do lançamento:
- verificar logs de aplicação;
- configurar monitoramento mínimo;
- definir estratégia de backup/recuperação do conteúdo;
- testar rollback de deployment;
- documentar incidentes relevantes.

## Estado atual

A Fase 2 possui scaffold executável e um Preview Vercel confirmado como **READY** no commit `6fb8819b6ce0fe21eebb55204d47baa420689ca8`. O domínio `thiagocanali.vercel.app` está associado e verificado no projeto.

## Verificação desta revisão

A API da Vercel confirmou o deployment `dpl_A2KxSTQKyC97QNtFdNd9xZTuB22H`, commit `8fd605fab7007cd1e4e07b6f151fcc83744b1788`, target `production`, estado `READY`. Isso corrige a descrição anterior que tratava todas as implantações como Preview.

Instalação local usa `npm ci` com lockfile versionado, Node.js 24 e checks no workflow `Quality`. Alterações desta revisão devem passar pelo PR e Preview antes de merge. Nenhuma promoção manual foi executada nesta revisão.

Preview desta revisão confirmado como **READY** pela API Vercel no commit `c4cb7dc7996d94fd2f4fa1e2d829e91d92bb5f83`: https://thiagocanali-7c4rp0bwl-thiagocanalis-projects.vercel.app. PR: https://github.com/thiagocanali/thiagocanali/pull/5.

## Ativação editorial pendente

A criação de `thiagocanali-hub` foi recusada pelo Supabase por limite de projetos gratuitos ativos. Não houve alteração nos bancos existentes nem configuração de credenciais na Vercel. Sem as duas variáveis, Preview continua operável com estados vazios.

Depois de liberar capacidade: provisionar projeto dedicado na organização confirmada pelo proprietário, aplicar a migration, testar RLS e Data API e executar advisors. Só então cadastrar `SUPABASE_URL` e `SUPABASE_PUBLISHABLE_KEY` nos ambientes apropriados, com valores de Preview separados de produção. Usar publishable key; a aplicação recusa secret/service-role. Revisar/reimplantar Preview e validar antes de promover.

Não copiar fixtures locais para o projeto hospedado. O projeto local é descartável e a criação hospedada não aconteceu.

Preview editorial confirmado **READY** no commit `3895290f821d1bd2ebce17390b86cf2d02d480b0`: https://thiagocanali-h6jr81g23-thiagocanalis-projects.vercel.app. Acesso autorizado a `/projects` retornou HTTP 200 com estado vazio e sem fixtures. CI Quality aprovado no run 43122663180. PR #6 depende da base do PR #5; não houve merge ou promoção para produção nesta revisão.

## SEO por ambiente

A URL canônica é centralizada em `src/lib/site.ts`, no domínio verificado https://thiagocanali.vercel.app. Não é derivada de Host ou URL de Preview. Ao mudar o domínio público, atualizar essa constante e revisar metadata, sitemap e testes HTTP.

Somente VERCEL_ENV=production habilita indexação. Previews/desenvolvimento recebem robots Disallow: /, sitemap vazio, meta noindex/nofollow e X-Robots-Tag. O sitemap de produção lista as seis áreas públicas; detalhes editoriais são descobertos pelos links das listagens, sem enumerar rascunhos/slugs privados. Não há lastModified inventado.

Para validar localmente o comportamento de produção (sem deploy):

```sh
VERCEL_ENV=production npm run build
npm run test:http
```

O script sobe e encerra seu próprio next start em uma porta disponível, sem credenciais Supabase. CI usa o mesmo modo para validar metadados, headers, 404, sitemap, robots e PNG. O build da Vercel continua usando o ambiente real do deployment; o CI não promove nem publica produção.

### Preview e CI do preparo público

Commit de código `4fe1667802176210359a2b29d43e20aaac4cc7b5`: Preview Vercel READY em https://thiagocanali-1l8dmahix-thiagocanalis-projects.vercel.app. Verificação autorizada confirmou `/projects` HTTP 200 com canonical de produção e meta/header noindex; robots Disallow: / e sitemap vazio. Headers CSP, X-Frame-Options e Permissions-Policy confirmados no deployment.

CI Quality concluído com sucesso no run 43205848912, incluindo smoke HTTP e testes PostgreSQL. PR #7 aponta diretamente para main e inclui a integração editorial do #6. Nenhuma promoção manual ou mudança de infraestrutura foi executada nesta revisão.

## Orçamento de deploys — investigação de 2026-11-15

A API da Vercel confirmou o projeto `prj_MjjPoUY3ukIzTRxAfleyZHdPca9S` (`thiagocanali`), ligado ao GitHub. Há **um deployment por push/commit intermediário** em branches de PR: na branch `fix/header-keyboard-focus-20261115`, `e54bf6c` gerou deployment cancelado e `af2033d` gerou outro deployment READY. A branch `chore/ci-full-audit-visibility-20261115` também gerou deployments separados para `6eb9cc7`, `12aa1d1` e `bb0874e`. O CI Quality executa lint, typecheck, testes, build, smoke HTTP e PostgreSQL sem depender da Vercel.

### Política operacional (sem alterar produção)

1. Fazer commits locais frequentes para checkpoints e agrupar **pushes** de alterações relacionadas após `npm run lint`, `npm run typecheck`, `npm test` e `npm run build` quando viáveis. Cada push da branch conectada pode consumir outro deployment mesmo que o anterior seja cancelado.
2. Manter GitHub Actions como validação primária. Usar Preview apenas para revisão visual, configuração de ambiente, integração hospedada e aceite final; não usar `READY` como prova de autenticação, API ou banco funcionais.
3. Não criar branches/PRs extras para documentação de uma mesma entrega; agrupar documentação, código e testes em um único push de validação quando possível.
4. Quando a cota gratuita for atingida, **não repetir deployments**; continuar CI, testes e correções independentes. Não promover Preview nem alterar produção para contornar a cota.
5. Investigar em **Vercel → Project → Settings → Git → Ignored Build Step** a possibilidade de um comando que ignore builds de commits sem mudanças de runtime. Esse comando deve ser revisado em PR e validado em Preview antes de qualquer ativação; **não foi configurado** nesta revisão. Não presumir que ignorar um build evita consumir a cota de criação de deployments.
6. Considerar controle por branch/ambiente somente após confirmar suporte e comportamento na configuração efetiva de Git Deployment; não alterar Production Branch, proteção SSO, domínios ou regras de segurança nesta revisão.

**Observação:** `get_project` expõe projeto, Node 22 e proteção SSO, mas não confirma os valores internos de Git Deployment ou Ignored Build Step. Assim, nenhuma configuração de preview foi alterada ou declarada ativa. Os registros observados demonstram disparos por commit; a redução efetiva do consumo dependerá da frequência de pushes e, eventualmente, de configuração validada no painel.
