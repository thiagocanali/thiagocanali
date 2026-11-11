# Thiago Canali — Personal Digital Hub

Plataforma pessoal para reunir identidade profissional, projetos, experimentos técnicos, publicações e contato.

## Estado atual

**Base executável validada; Fase 3 em andamento.**

A aplicação agora possui um scaffold Next.js com TypeScript, Tailwind CSS, shadcn/ui preparado, Lucide, Geist e páginas públicas estruturais. O banco, autenticação, conteúdo dinâmico e Control Center ainda não foram implementados.

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
```

Use Node.js 24 LTS e `npm ci` para instalar as versões do `package-lock.json`.

A navegação é compartilhada entre todas as páginas, com indicação de página atual e acesso por teclado. Contato oferece email, LinkedIn e GitHub; não há formulário nem coleta de mensagens. Projetos, Lab e Journal exibem estados vazios honestos.

O workflow `Quality` executa instalação limpa, lint, tipos e build em pull requests e na branch principal. TypeScript 6.0.3 e ESLint 9.39.5 foram escolhidos por compatibilidade com o parser e plugins do Next.js 16.4.6. O npm sinaliza fim de suporte do ESLint 9; acompanhar atualização dos plugins antes de migrar para ESLint 10.

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
