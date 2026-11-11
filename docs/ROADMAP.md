# Roadmap

Status em 2026-11-11. Fases incrementais; a implementação da aplicação começa após a fundação documental.

| Fase | Prioridade | Dependências | Estado |
|---|---|---|---|
| 0. Fundação documental e inspeção do repo | P0 | Nenhuma | Concluída |
| 1. Stack, arquitetura e design tokens | P0 | Fase 0 | **Concluída** |
| 2. Base da aplicação e shell público responsivo | P1 | Fase 1 | **Próxima** |
| 3. Conteúdo público: Home, About, projetos, Lab, Journal e contato | P1 | Fase 2; conteúdo factual confirmado | Planejada |
| 4. Persistência e publicação de conteúdo | P2 | Modelo de dados e integração aprovada | Planejada |
| 5. Autenticação e Control Center | P2 | Fase 4; estratégia de auth e políticas revisadas | Planejada |
| 6. Qualidade, segurança, SEO e lançamento | P1 contínua | Fases anteriores | Planejada |

## Fase 1 — critérios de aceite

- [x] Stack definida.
- [x] App Router e `src/` definidos.
- [x] Server-first definido.
- [x] Estratégia pública/admin definida.
- [x] Fonte de conteúdo definida.
- [x] Estratégia inicial de Auth/RLS definida.
- [x] Tokens visuais definidos.
- [x] Estratégia de animação e acessibilidade definida.
- [x] Deploy/preview definido como fluxo futuro.
- [x] Nenhuma dependência de aplicação criada prematuramente.

## Próxima etapa — Fase 2

Criar a aplicação mínima executável com:
1. Next.js 16.x + TypeScript strict + App Router.
2. Tailwind CSS 4.x.
3. shadcn/ui e Lucide.
4. Tokens visuais reais.
5. Layout público responsivo.
6. Metadata/SEO base.
7. Página inicial estrutural, sem inventar conteúdo profissional.
8. Páginas públicas mínimas com estados honestos.
9. Scripts de lint/typecheck/build.
10. Preview por branch/PR.

A Fase 2 não deve criar Supabase, Auth ou painel administrativo ainda.
