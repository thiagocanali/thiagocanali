# Verificação — 2026-11-11

## Fluxo validado

Visitante acessa Home → navegação compartilhada → áreas públicas ou Contato → links externos/email. As páginas são estáticas; API, banco e autenticação não participam desse fluxo.

## Evidências locais

- Node.js 24.22.1, npm 11.9.0, Chromium do ambiente cloud.
- `npm ci --ignore-scripts`: instalação limpa concluída usando lockfile.
- `npm run lint`, `npm run typecheck`, `npm run build`: aprovados.
- `npm audit --omit=dev`: zero vulnerabilidades reportadas naquele momento.
- Playwright/Chromium contra `next start`: seis rotas retornam 200; rota inexistente retorna 404, nas larguras 360, 768 e 1440 px (21 verificações).
- Um main e um h1 por página; nenhuma rolagem horizontal; página atual indicada na navegação.
- Tab/Enter no skip link transfere foco ao conteúdo; clique na navegação abre Contato; href de email confirmado.
- Nenhum evento pageerror durante o fluxo.
- Componentes de conteúdo permanecem no servidor; somente cabeçalho usa cliente para usePathname. Nenhum efeito, fetch ou estado duplicado.

## Limites e acompanhamento

Não houve envio de email nem validação de contas externas. Não existe formulário. Verificação de acessibilidade é parcial e não substitui auditoria assistiva. Preview confirmado READY no commit c4cb7dc. CI remoto iniciado no run 43066615449; resultado ainda pendente no momento deste registro.

ESLint 9.39.5 é compatível com os peers dos plugins atuais, porém npm já o marca sem suporte. Acompanhar suporte a ESLint 10 em eslint-plugin-import, eslint-plugin-react e eslint-plugin-jsx-a11y. TypeScript 7 foi substituído por 6.0.3 porque typescript-eslint interrompia execução explicitamente.

Persistência, RLS e painel continuam pendentes; nenhuma migração ou alteração de dados remotos foi realizada.
