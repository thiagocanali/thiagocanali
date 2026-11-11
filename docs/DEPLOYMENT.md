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

`thiagocanali.vercel.app` está **configurado e verificado** no projeto Vercel atual. A implantação de produção ainda não foi promovida para esse domínio.

### Observabilidade e recuperação

Antes do lançamento:
- verificar logs de aplicação;
- configurar monitoramento mínimo;
- definir estratégia de backup/recuperação do conteúdo;
- testar rollback de deployment;
- documentar incidentes relevantes.

## Estado atual

A Fase 2 possui scaffold executável e um Preview Vercel confirmado como **READY** no commit `6fb8819b6ce0fe21eebb55204d47baa420689ca8`. O domínio `thiagocanali.vercel.app` está associado e verificado no projeto.

Ainda pendentes para fechar a Fase 2:
- gerar/versionar `package-lock.json`;
- executar a suíte completa de qualidade em ambiente reprodutível;
- revisão visual desktop/mobile;
- revisão final de acessibilidade e SEO;
- registrar critérios de aceite.

O Preview confirmado não deve ser tratado como produção.
