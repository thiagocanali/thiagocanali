# Roadmap

Status em 2026-11-13. Fases incrementais.

| Fase | Prioridade | Dependências | Estado |
|---|---|---|---|
| 0. Fundação documental e inspeção do repo | P0 | Nenhuma | Concluída |
| 1. Stack, arquitetura e design tokens | P0 | Fase 0 | Concluída |
| 2. Base da aplicação e shell público responsivo | P1 | Fase 1 | Concluída |
| 3. Conteúdo público: Home, About, projetos, Lab, Journal e contato | P1 | Fase 2; conteúdo factual confirmado | **Em andamento** |
| 4. Persistência e publicação de conteúdo | P2 | Modelo de dados e integração aprovada | **Em andamento; hospedagem bloqueada** |
| 5. Autenticação e Control Center | P2 | Fase 4; estratégia de auth e políticas revisadas | Planejada |
| 6. Qualidade, segurança, SEO e lançamento | P1 contínua | Fases anteriores | **Em andamento** |

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
- [x] Publicar apresentação profissional introdutória e seleção inicial de três repositórios públicos na Home, com estados explicitados.\n- [ ] Revisar biografia e projetos em profundidade com evidências e mídia, sem dados inventados.
- [ ] Publicar conteúdo editorial após definir persistência e fluxo editorial.

Validação local: lint, typecheck, build e navegação em Chromium nas larguras 360, 768 e 1440 px. Registro detalhado em `docs/QUALITY.md`. A integração Vercel anterior está READY; o Preview desta entrega também foi confirmado READY no commit c4cb7dc (ver DEPLOYMENT.md).

## Fase 4 — persistência editorial

- [x] Schema comum para projetos, experimentos e artigos, com constraints e índice.
- [x] Migration e configuração local versionadas.
- [x] RLS de leitura pública e bloqueio de mutações de clientes testados em PostgreSQL 17.
- [x] Listagens e detalhes server-only, com estados vazio/indisponível e 404 para conteúdo privado.
- [x] Testes de consultas, banco e fluxo completo local; CI ampliado.
- [ ] Liberar capacidade Supabase: criação recusada por limite de dois projetos gratuitos ativos.
- [ ] Provisionar projeto dedicado, aplicar migration, executar advisors e gerar tipos hospedados.
- [ ] Configurar URL/publishable key por ambiente e validar Preview com Data API hospedada.
- [ ] Implementar autorização administrativa explícita antes de qualquer CRUD pelo site.

A base editorial foi entregue no PR #6, com origem no PR #5 (CI run 43066751242 aprovado). O PR #7 reúne essa entrega para main. Conteúdo factual continua pendente e não foi substituído por fixtures públicos.

## Fase 6 — preparo público

- [x] Metadados canônicos por página com domínio de produção verificado.
- [x] Open Graph, Twitter Card, imagem de compartilhamento e ícone.
- [x] Robots e sitemap das seis áreas públicas; Previews/desenvolvimento sem indexação.
- [x] Cabeçalhos HTTP para framing, MIME, referrer e permissões de dispositivos.
- [x] Carregamento nas listagens e recuperação de erros inesperados.
- [x] Teste HTTP do build no CI para metadados reais e preservação de 404.
- [ ] Confirmar conteúdo factual, ativar persistência hospedada e validar fluxo administrativo antes do lançamento completo.
- [ ] Monitoramento e auditoria completa de acessibilidade; CSP de scripts/estilos conforme evolução.

O PR #6 foi integrado na branch feat/public-experience-quality, não em main. Esta revisão inclui essa integração no PR direto para main; a persistência hospedada continua bloqueada por capacidade Supabase.

## Perfil GitHub — curadoria inicial

O README apresenta o perfil pessoal e uma seleção inicial de Me Aprovaê, taskDesk e AcolheMente, com base na documentação pública dos projetos. A documentação técnica do hub permanece em uma seção recolhível. Esta curadoria não publica conteúdo no banco do site nem encerra a confirmação editorial da Fase 3.

Próxima revisão: avaliar os destaques fixados do perfil e padronizar descrições dos projetos escolhidos. Arquivamento, renomeação e alteração de visibilidade de repositórios precisam de avaliação específica.
