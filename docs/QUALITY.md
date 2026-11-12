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

Não houve envio de email nem validação de contas externas. Não existe formulário. Verificação de acessibilidade é parcial e não substitui auditoria assistiva. Preview confirmado READY no commit c4cb7dc. CI remoto da base confirmado com sucesso no run 43066751242 (commit ca2ed9a).

ESLint 9.39.5 é compatível com os peers dos plugins atuais, porém npm já o marca sem suporte. Acompanhar suporte a ESLint 10 em eslint-plugin-import, eslint-plugin-react e eslint-plugin-jsx-a11y. TypeScript 7 foi substituído por 6.0.3 porque typescript-eslint interrompia execução explicitamente.

Persistência, RLS e painel continuam pendentes; nenhuma migração ou alteração de dados remotos foi realizada.

## Persistência editorial — verificação local

História: visitante abre Projetos/Lab/Journal → Server Component → SDK Supabase → gateway HTTPS local → PostgREST 13.0.7 → PostgreSQL 17 com role anon/RLS → listagem/detalhe renderizado.

- `npm run test:db`: schema aplicado a PostgreSQL 17 descartável; fixtures em rollback. Visibilidade de published/draft/future/archived, constraints, ACLs e RLS de escrita, leitura autenticada com user_metadata forjado e operação privilegiada passaram.
- `npm test`: 7 testes passaram. Transporte simulado para configuração ausente/parcial, rejeição de chave secret, filtros de publicação, timeout/no-store, detalhe ausente, slug inválido, erro HTTP e URLs/linhas inválidas. Não são testes do serviço hospedado.
- Lint, tipos e build aprovados após adicionar o leitor e as rotas dinâmicas.
- Playwright/Chromium com PostgreSQL/PostgREST reais locais: listagem → detalhe nas três áreas em 360, 768 e 1440 px; nenhum overflow ou pageerror.
- Rascunho, publicação futura e slug inexistente retornaram 404. Body contendo script apareceu como texto, sem elemento script.
- Instâncias sem configuração exibiram estados vazios; configuração inválida exibiu indisponibilidade.
- Fixtures explicitamente marcados TEST ONLY existem somente no banco local, sem seed de produção.
- Audit de dependências de produção não reportou vulnerabilidades nesta revisão.

Limites: o gateway HTTPS local apenas encaminha a consulta para PostgREST sob anon e usa uma publishable key ilustrativa. Não testa o gateway/Auth gerenciado do Supabase. Projeto hospedado não criado devido ao limite da conta; advisors, tipos gerados e Data API hospedada ainda precisam ser validados. O leitor não oferece escrita nem autenticação administrativa. Teste de tela não equivale a auditoria completa de acessibilidade.

### Evidência remota do incremento

CI Quality no commit `3895290` concluído com sucesso: https://github.com/thiagocanali/thiagocanali/actions/runs/43122663180. Inclui npm ci, lint, tipos, testes de consultas, build e testes de banco. Preview Vercel READY; `/projects` retornou 200 com estado vazio, sem mensagem de falha e sem conteúdo TEST ONLY. Isso valida o deploy sem configuração hospedada; não equivale a Data API Supabase ativa.
