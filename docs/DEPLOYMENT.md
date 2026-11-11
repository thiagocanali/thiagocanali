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

Ainda não existem variáveis de aplicação. O arquivo `.env.example` deve conter apenas nomes e valores demonstrativos seguros.

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
