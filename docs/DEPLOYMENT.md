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
