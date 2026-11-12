# Olá, eu sou o Thiago Canali 👋

Construo aplicações web e aprendo colocando ideias em prática.

Meu GitHub reúne projetos próprios, experimentos e minha trajetória de estudos. Hoje estou evoluindo produtos para educação, organização pessoal e presença digital, usando IA como apoio ao desenvolvimento.

[LinkedIn](https://www.linkedin.com/in/thiagocanali) · [Contato por e-mail](mailto:thiagocanali@hotmail.com)

## Projetos em construção

### [Me Aprovaê](https://github.com/thiagocanali/MeAprovae)
Plataforma de estudos para concursos públicos, com questões, revisão e acompanhamento de desempenho.

**Tecnologias:** Nuxt, Vue, TypeScript e PostgreSQL.  
**Etapa:** núcleo de estudos em validação; conteúdo e fluxos continuam em revisão.

### [taskDesk](https://github.com/thiagocanali/taskDesk)
Organização pessoal de tarefas, com prioridades, histórico e acesso por usuário.

**Tecnologias:** Vue, TypeScript, Node.js, Express e Prisma.  
**Etapa:** CRUD e autenticação implementados; ativação hospedada e integrações de e-mail pendentes.

### [AcolheMente](https://github.com/thiagocanali/AcolheMente)
Projeto para aproximar pessoas e profissionais de Psicologia, começando pela apresentação profissional e solicitação de agendamento.

**Tecnologias:** Vue, TypeScript e Vite.  
**Etapa:** página institucional implementada; fluxo administrativo em preparação.

## O que estou desenvolvendo

- Interfaces com Vue, Nuxt, React e Next.js.
- APIs, persistência e autenticação para aplicações web.
- Um processo de desenvolvimento com documentação, testes e revisão de mudanças.
- Meu [site pessoal](https://github.com/thiagocanali/thiagocanali), também em construção.

Os repositórios de cursos e exercícios registram meu aprendizado ao longo do tempo. Os projetos acima são uma seleção inicial dos trabalhos que estou evoluindo agora.

---

<details>
<summary>Documentação técnica deste repositório — Personal Digital Hub</summary>

# Thiago Canali — Personal Digital Hub

Plataforma pessoal para reunir identidade profissional, projetos, experimentos técnicos, publicações e contato.

## Estado atual

**Base executável validada; Fase 3 em andamento.**

A aplicação agora possui um scaffold Next.js com TypeScript, Tailwind CSS, shadcn/ui preparado, Lucide, Geist e páginas públicas estruturais. A leitura editorial e o schema foram implementados e testados localmente. A ativação hospedada do Supabase está bloqueada pelo limite de projetos gratuitos. Autenticação e Control Center seguem pendentes.

## Stack

- Next.js 16.x + React
- TypeScript strict
- App Router com `src/`
- Tailwind CSS 4.x
- shadcn/ui + Lucide
- Geist Sans + Geist Mono
- Supabase PostgreSQL/Auth em fase posterior
- Vercel para Preview e produção

## Scripts

```text
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm test
npm run test:db
npm run test:http
```

Use Node.js 24 LTS (mínimo 22 por requisito do SDK Supabase) e `npm ci` para instalar as versões do `package-lock.json`.

A navegação é compartilhada entre todas as páginas, com indicação de página atual e acesso por teclado. Contato oferece email, LinkedIn e GitHub; não há formulário nem coleta de mensagens. Projetos, Lab e Journal consultam conteúdo publicado no servidor quando o Supabase estiver configurado, com listagens e detalhes por slug. Sem configuração exibem estados vazios; falhas do serviço têm mensagem própria.

O workflow `Quality` executa instalação limpa, lint, tipos, testes de consultas/política SEO, build, smoke HTTP e testes de banco em pull requests e na branch principal. TypeScript 6.0.3 e ESLint 9.39.5 foram escolhidos por compatibilidade com o parser e plugins do Next.js 16.4.6. O npm sinaliza fim de suporte do ESLint 9; acompanhar atualização dos plugins antes de migrar para ESLint 10.

## Documentação

- [Visão do produto](docs/PROJECT.md)
- [Arquitetura](docs/ARCHITECTURE.md)
- [Sistema visual](docs/DESIGN_SYSTEM.md)
- [Roadmap](docs/ROADMAP.md)
- [Dados](docs/DATABASE.md) e [segurança](docs/SECURITY.md)
- [Deploy](docs/DEPLOYMENT.md), [changelog](docs/CHANGELOG.md) e [backlog](docs/BACKLOG.md)
- [Instruções para agentes](AGENTS.md)
- [Prompts por fase](prompts/)

## Perfil público legado

O README anterior continha links públicos, tecnologias e a presença legada `thiagocanali.github.io`. Esses dados foram preservados na documentação inicial, mas não devem ser tratados como validação automática da experiência atual. Conteúdo profissional do novo site precisa ser confirmado antes de publicação.

Links públicos preservados:
- Portfolio legado: https://thiagocanali.github.io/
- GitHub: https://github.com/thiagocanali
- LinkedIn: https://www.linkedin.com/in/thiagocanali
- Email: thiagocanali@hotmail.com
- YouTube: https://www.youtube.com/@thiago.canali

Tecnologias listadas historicamente: Java, JavaScript, TypeScript, Python, PHP; Vue, Angular, React; Flutter, Ionic; Node.js, Firebase; PostgreSQL, MySQL, MongoDB; Git, Linux e VS Code.

## Conteúdo editorial

Leia [DATABASE.md](docs/DATABASE.md) antes de configurar a persistência. `SUPABASE_URL` e `SUPABASE_PUBLISHABLE_KEY` são usadas somente no servidor. Deixe ambas ausentes para desenvolver sem banco; valores ilustrativos de `.env.example` não conectam a um projeto real. Nunca forneça service-role ou secret key ao leitor público.

`npm test` valida consultas e falhas com transporte simulado; `npm run test:db` valida schema/RLS em PostgreSQL 17 descartável via Docker. CI executa ambos. Auth e operações administrativas ainda não existem.

## SEO e preparo público

Canonical e compartilhamento usam o domínio público verificado. Indexação só é habilitada em VERCEL_ENV=production; Preview/desenvolvimento ficam noindex e sem URLs no sitemap. A imagem de compartilhamento é gerada em `/opengraph-image` e o ícone em `/icon.svg`.

`npm run test:http` exige um build feito com `VERCEL_ENV=production` e verifica o servidor real numa porta temporária. Não conecta ao Supabase. Os detalhes de segurança, ambientes e limites estão em SECURITY.md, DEPLOYMENT.md e QUALITY.md.

</details>
