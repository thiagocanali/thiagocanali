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

`thiagocanali.vercel.app` permanece como domínio planejado até ser verificado no projeto Vercel. Não tratar o domínio como configurado sem evidência.

### Observabilidade e recuperação

Antes do lançamento:
- verificar logs de aplicação;
- configurar monitoramento mínimo;
- definir estratégia de backup/recuperação do conteúdo;
- testar rollback de deployment;
- documentar incidentes relevantes.

## Estado atual

Não há aplicação, package manifest, lockfile ou projeto Vercel configurado ainda. A Fase 2 criará o primeiro deployment preview verificável.
