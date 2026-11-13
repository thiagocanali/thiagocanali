# Thiago Canali — Personal Digital Hub

Um hub pessoal para reunir projetos, experimentos, notas e contato. O site público está implementado em Next.js; conteúdo biográfico e projetos ainda aguardam revisão factual antes de serem publicados.

## Stack e desenvolvimento

- Next.js App Router, React e TypeScript
- Tailwind CSS 4 e CSS global para tokens e componentes visuais
- Aplicação sem banco ou autenticação nesta fase
- Node.js 20.9+ e npm

```bash
npm install
npm run dev
```

Validações: `npm run lint`, `npm run typecheck` e `npm run build`.

## Rotas públicas

| Rota | Conteúdo |
|---|---|
| `/` | Apresentação do hub e navegação para suas áreas |
| `/projects` | Catálogo de projetos; aguarda curadoria factual |
| `/lab` | Área para experimentos futuros |
| `/journal` | Área para notas e artigos futuros |
| `/about` | Apresentação; dados biográficos aguardam revisão |
| `/contact` | Links de e-mail e LinkedIn do perfil legado; sem formulário |

A interface deixa explícito quando uma área está em preparação. Experiência, clientes, formação, resultados e projetos não são inventados. O Control Center, a persistência de conteúdo, uploads e autenticação ainda não foram implementados.

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

O README original se apresentava como perfil pessoal e descrevia Thiago como desenvolvedor Full Stack com foco em Web e Mobile, amante de tecnologia e sempre aprendendo; citava desenvolvimento front-end, back-end e mobile. Esses dados foram preservados como referência, mas não são uma validação atual de proficiência ou experiência.

- Portfolio legado: https://thiagocanali.github.io/
- GitHub: https://github.com/thiagocanali
- LinkedIn: https://www.linkedin.com/in/thiagocanali
- Email: [thiagocanali@hotmail.com](mailto:thiagocanali@hotmail.com)
- YouTube: https://www.youtube.com/@thiago.canali
- Sugestões do portfolio legado: https://forms.gle/yvVVwyz8YSM4xRGm9

Tecnologias listadas no perfil anterior: Java, JavaScript, TypeScript, Python, PHP; Vue, Angular, React; Flutter, Ionic; Node.js, Firebase; PostgreSQL, MySQL, MongoDB; Git, Linux e VS Code. Confirme as informações antes de promovê-las como atuais.
