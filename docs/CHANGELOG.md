# Changelog

Mudanças significativas do projeto, em ordem cronológica reversa.

## 2026-11-11 — Fase 2: base executável

- Criado o primeiro scaffold executável em Next.js 16.x.
- Configurados TypeScript strict, App Router, Tailwind CSS 4.x e ESLint.
- Preparado shadcn/ui e adicionados Lucide e Geist.
- Materializados os tokens do Dark Digital Engineering.
- Criada Home estrutural e páginas públicas iniciais.
- Adicionada metadata base e página 404.
- Criado Preview Vercel para a branch `feat/app-foundation`; a verificação ainda está aguardando processamento do build.
- Lockfile ainda pendente porque o ambiente desta execução não possui acesso funcional ao registry npm para gerar dependências transitivas.

## 2026-11-11 — Arquitetura e design system aprovados

- Fechada a stack inicial em Next.js 16.x, React, TypeScript strict, Tailwind CSS 4.x, shadcn/ui e Lucide.
- Definido App Router com `src/` e arquitetura server-first.
- Definidas rotas públicas e área administrativa.
- Definido Supabase PostgreSQL/Auth como infraestrutura futura, criada especificamente para este projeto na fase de persistência.
- Definidas regras iniciais de RLS, autorização server-side, publicação e cache.
- Transformada a direção visual Dark Digital Engineering em tokens e regras de implementação.
- Definido fluxo Git com branch/PR/Preview Vercel.
- Fase 1 marcada como concluída; Fase 2 é a próxima etapa.

## 2026-11-11 — Fundação documental

- Inspecionado o checkout: o README de perfil legado era o único arquivo versionado; não havia aplicação, framework, dependências ou deploy configurados.
- Criada documentação de produto, arquitetura observada/proposta, direção visual, roadmap, dados, segurança, deploy e backlog.
- Criados AGENTS.md, template .env.example e prompts para fases futuras; os prompts não foram executados.
- README reorganizado como introdução ao projeto e preservados links e tecnologias do perfil anterior com aviso de que precisam de confirmação atual.
