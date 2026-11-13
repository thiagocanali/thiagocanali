# Deploy e ambientes

## Estado atual

Aplicação Next.js pronta para execução local e preview. O domínio `thiagocanali.vercel.app` é planejado, não foi verificado nem configurado nesta alteração. Nenhum deploy de produção foi feito.

## Desenvolvimento

- Requer Node.js 20.9+ e npm.
- Instalar dependências a partir do `package-lock.json` e iniciar com `npm run dev`.
- Verificações: `npm run lint`, `npm run typecheck` e `npm run build`.
- `.env*` locais são ignorados pelo Git; `.env.example` é somente um template sem segredo.

## Fluxo recomendado

1. Usar Preview Deploys de branch/PR para revisão, sem segredos de produção.
2. Executar lint, typecheck, build e checagem de rotas/acessibilidade antes de produção.
3. Configurar variáveis separadamente por ambiente na plataforma; nunca incluí-las no Git.
4. Verificar domínio, root directory, comandos de build/instalação, cabeçalhos e rollback antes de anunciar lançamento.

A aplicação ainda é estática e não requer serviços de banco, autenticação ou storage. Não afirmar disponibilidade pública até que um deploy seja efetivamente configurado e verificado.
