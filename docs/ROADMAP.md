# Roadmap

Status em 2026-11-11. Fases incrementais.

| Fase | Prioridade | Dependências | Estado |
|---|---|---|---|
| 0. Fundação documental e inspeção do repo | P0 | Nenhuma | Concluída |
| 1. Stack, arquitetura e design tokens | P0 | Fase 0 | Concluída |
| 2. Base da aplicação e shell público responsivo | P1 | Fase 1 | **Em andamento** |
| 3. Conteúdo público: Home, About, projetos, Lab, Journal e contato | P1 | Fase 2; conteúdo factual confirmado | Planejada |
| 4. Persistência e publicação de conteúdo | P2 | Modelo de dados e integração aprovada | Planejada |
| 5. Autenticação e Control Center | P2 | Fase 4; estratégia de auth e políticas revisadas | Planejada |
| 6. Qualidade, segurança, SEO e lançamento | P1 contínua | Fases anteriores | Planejada |

## Fase 2 — estado

### Concluído nesta branch
- [x] package manifest criado com versões fixadas.
- [x] Next.js/App Router/TypeScript configurados.
- [x] Tailwind CSS 4 configurado.
- [x] shadcn/ui preparado via `components.json`.
- [x] Lucide e Geist integrados.
- [x] Tokens visuais materializados.
- [x] Metadata base.
- [x] Home estrutural.
- [x] Rotas públicas estruturais: Projects, Lab, Journal, About e Contact.
- [x] Página 404.
- [x] ESLint e typecheck configurados.

### Ainda necessário para concluir a Fase 2
- [ ] Gerar e versionar `package-lock.json`.
- [ ] Executar `npm install`, `npm run typecheck`, `npm run lint` e `npm run build` em ambiente com acesso ao npm.
- [ ] Confirmar Preview Vercel em estado READY.
- [ ] Revisar visualmente desktop/mobile.
- [ ] Ajustar acessibilidade/contraste após renderização real.
- [ ] Registrar resultado final no changelog.

A Fase 2 não deve criar Supabase, Auth ou painel administrativo ainda.
