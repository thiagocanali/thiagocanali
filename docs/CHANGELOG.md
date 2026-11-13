# Changelog

## 2026-11-13 — Projetos selecionados na Home

- Home apresenta três repositórios públicos já documentados no README, com tecnologia e estado de evolução explícitos.
- Links externos acessíveis direcionam ao código-fonte, sem depender de Supabase hospedado.
- O conteúdo editorial persistido permanece independente e não foi simulado.


## 2026-11-13 — Apresentação profissional pública

- Página Sobre ampliada com introdução profissional baseada em informações já documentadas, sem métricas ou experiências inventadas.
- Adicionadas áreas de interesse, links de navegação interna e canais profissionais públicos.
- Mantida a distinção entre projetos em evolução e produtos finalizados; não há publicação editorial fictícia.
- CI Quality e status Vercel da PR #10 aprovados; PR #10 integrada à main no commit 0988ffa.

Mudanças significativas do projeto, em ordem cronológica reversa.

## 2026-11-12 — Apresentação do perfil GitHub

- README passa a abrir com apresentação de Thiago Canali, canais públicos e seleção de projetos em construção.
- Me Aprovaê, taskDesk e AcolheMente apresentados com tecnologias e limites descritos nos respectivos READMEs.
- Documentação técnica anterior preservada integralmente em seção recolhível, com os mesmos caminhos relativos.
- Curadoria do perfil não conclui as fases de conteúdo editorial ou persistência do site.

## 2026-11-12 — SEO, segurança HTTP e estados de interface

- Adicionados canonical, Open Graph e Twitter Card consistentes nas páginas públicas e detalhes publicados.
- Criados ícone e imagem de compartilhamento PNG de 1200 × 630.
- Adicionados robots.txt e sitemap das seis áreas; indexação permitida apenas quando VERCEL_ENV=production.
- Cabeçalhos de segurança aplicados globalmente, com noindex adicional fora de produção.
- Indicador de carregamento restrito às listagens para manter HTTP 404 de detalhes inexistentes.
- Boundary de erro inesperado com retry, navegação e mensagem sem dados internos.
- Testes de política e smoke HTTP do build adicionados ao CI; documentação de operação atualizada.
- Reunida a integração editorial do PR #6 com a base atual de main.

## 2026-11-11 — Persistência editorial preparada

- Adicionado schema content_entries com RLS, ACLs, constraints, índice parcial e trigger SECURITY INVOKER.
- Implementadas leitura pública server-only, listagens e detalhes por slug para Projetos, Lab e Journal.
- Estados separados para ausência de conteúdo e indisponibilidade; consultas com timeout, no-store e validação de URLs.
- Corpo exibido como texto puro e omitido das consultas de listagem.
- Testes de consultas e banco descartável adicionados ao CI; navegação completa testada com PostgreSQL/PostgREST locais.
- Provisionamento Supabase autorizado na organização do proprietário, mas bloqueado pelo limite de projetos gratuitos; nenhum projeto existente alterado.
- Node mínimo atualizado para 22 por exigência do SDK. Evidências e limites em QUALITY.md.

## 2026-11-11 — Qualidade da base e experiência pública

- Lidos todos os prompts; evolução incremental conforme autorização do proprietário.
- Gerado lockfile e corrigida incompatibilidade de TypeScript 7 com typescript-eslint usando TypeScript 6.0.3. ESLint 9.39.5 mantém compatibilidade dos plugins atuais; fim de suporte registrado para acompanhamento.
- Adicionado CI com instalação limpa, lint, tipos e build.
- Implementada navegação compartilhada, página ativa, skip link e rodapé.
- Contato funcional por links públicos existentes; estados vazios voltados ao visitante.
- Documentação sincronizada com aplicação e deployment real.
- Verificações e limitações registradas em QUALITY.md.

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
