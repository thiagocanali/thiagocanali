# Roadmap

Status em 2026-11-11. Fases incrementais.

| Fase | Prioridade | Dependências | Estado |
|---|---|---|---|
| 0. Fundação documental e inspeção do repo | P0 | Nenhuma | Concluída |
| 1. Stack, arquitetura e design tokens | P0 | Fase 0 | Concluída |
| 2. Base da aplicação e shell público responsivo | P1 | Fase 1 | Concluída |
| 3. Conteúdo público: Home, About, projetos, Lab, Journal e contato | P1 | Fase 2; conteúdo factual confirmado | **Em andamento** |
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
- [x] Gerar e versionar `package-lock.json`.
- [x] Executar `npm install`, `npm run typecheck`, `npm run lint` e `npm run build` em ambiente com acesso ao npm.
- [x] Confirmar Preview Vercel em estado READY.
- [x] Revisar visualmente desktop/mobile.
- [x] Ajustar acessibilidade/contraste após renderização real.
- [x] Registrar resultado final no changelog.

A Fase 2 não deve criar Supabase, Auth ou painel administrativo ainda.

## Fase 3 — próximo ciclo

- [x] Navegação global responsiva e estados vazios acessíveis.
- [x] Contato pelos canais já documentados.
- [ ] Confirmar conteúdo profissional e selecionar projetos reais.
- [ ] Publicar conteúdo editorial após definir persistência e fluxo editorial.

Validação local: lint, typecheck, build e navegação em Chromium nas larguras 360, 768 e 1440 px. Registro detalhado em `docs/QUALITY.md`. A integração Vercel anterior está READY; o novo Preview deve ser verificado na branch desta entrega.
