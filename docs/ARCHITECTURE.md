# Arquitetura

## Decisões aprovadas — 2026-11-11

A arquitetura da aplicação foi fechada para a primeira implementação.

### Stack

| Camada | Decisão | Motivo |
|---|---|---|
| Framework | Next.js 16.x | App Router, React Server Components, SSR/SSG e integração natural com Vercel |
| Linguagem | TypeScript strict | Segurança de tipos e manutenção |
| UI/CSS | Tailwind CSS 4.x | Tokens no CSS, baixo acoplamento e integração atual com Next.js |
| Componentes | shadcn/ui | Código dos componentes dentro do repositório, acessível e altamente customizável |
| Ícones | Lucide React | Consistência visual e baixo acoplamento |
| Animação | CSS primeiro; biblioteca somente quando justificar | Evitar dependência e movimento desnecessários |
| Conteúdo | Supabase PostgreSQL como fonte dinâmica | Permite publicação/admin sem rebuild para cada conteúdo |
| Auth | Supabase Auth | Sessões compatíveis com App Router e políticas RLS |
| SSR Auth | @supabase/ssr | Sessões por cookie no Next.js |
| Deploy | Vercel | Integração nativa com Next.js e previews por branch/PR |
| Mídia | Definir na Fase 4; Blob somente se necessário | Evitar infraestrutura antes do modelo de conteúdo |
| Package manager | npm | Menor atrito para o projeto individual e compatibilidade ampla |

As versões exatas devem ser fixadas no primeiro commit de aplicação e registradas no lockfile. Não usar versões de memória.

### Estrutura de aplicação

A aplicação usará App Router com `src/`:

```
src/
├── app/
│   ├── (site)/
│   │   ├── page.tsx
│   │   ├── projects/
│   │   ├── lab/
│   │   ├── journal/
│   │   ├── about/
│   │   └── contact/
│   └── admin/
│       ├── page.tsx
│       ├── projects/
│       ├── articles/
│       ├── experiments/
│       ├── media/
│       └── settings/
├── components/
│   ├── ui/
│   ├── site/
│   └── admin/
├── lib/
│   ├── supabase/
│   ├── content/
│   ├── validation/
│   └── utils/
└── types/
```

A estrutura é uma direção inicial, não um contrato para criar abstrações prematuras. Novos módulos devem surgir por necessidade real.

### Server-first

- Server Components são o padrão.
- Client Components somente quando houver interatividade que exija estado/eventos do navegador.
- Busca de conteúdo público preferencialmente no servidor.
- Mutação administrativa exclusivamente em fronteira de servidor.
- Autorização não depende de esconder rotas no cliente.

### Renderização

- Conteúdo estático e páginas que não dependem de sessão devem favorecer prerenderização/cache.
- Conteúdo dinâmico publicado poderá usar revalidação controlada.
- Área administrativa e dados dependentes de sessão não devem ser tratados como conteúdo público cacheável.
- Qualquer estratégia de cache que envolva sessão deve ser revisada para não vazar respostas entre usuários.

### Rotas

Públicas:
- `/`
- `/projects`
- `/projects/[slug]`
- `/lab`
- `/lab/[slug]`
- `/journal`
- `/journal/[slug]`
- `/about`
- `/contact`

Privadas:
- `/admin`
- `/admin/projects`
- `/admin/articles`
- `/admin/experiments`
- `/admin/media`
- `/admin/settings`

A proteção real será implementada no servidor quando o Auth entrar no projeto.

### Conteúdo

O modelo será híbrido no sentido de responsabilidade, mas não de duas fontes concorrentes:

- Git: código, documentação técnica, schema/migrations e configuração.
- Supabase: conteúdo editorial publicado, rascunhos, status e metadados administráveis.

Não haverá duplicação de conteúdo editorial entre Markdown e banco sem uma razão explícita.

### Dados e segurança

- Supabase será criado especificamente para este projeto quando a Fase 4 começar.
- RLS será obrigatório para tabelas acessíveis pela aplicação.
- Conteúdo público só poderá ser retornado quando marcado como publicado.
- Admin será autorizado por identidade/role no servidor e reforçado por RLS.
- Service-role/secret keys nunca chegam ao navegador.
- Uploads terão validação de tipo, tamanho e autorização.
- Slugs serão únicos.
- Timestamps serão armazenados em UTC.
- Validação de entrada ocorrerá no servidor.

## Estado anterior observado

O checkout inicial não tinha aplicação, framework, dependências, rotas ou configuração de deploy. Esta decisão transforma a proposta anterior em arquitetura aprovada; a aplicação Next.js já está implementada com rotas públicas estáticas. Schema e leitura editorial foram implementados/testados localmente; ativação hospedada e administração continuam pendentes.

## Referências de implementação

A decisão considera a documentação atual de Next.js 16, Tailwind CSS 4, shadcn/ui e Supabase SSR. As versões instaladas serão verificadas no momento do scaffold.

## Incremento editorial — 2026-11-11

As três coleções usam `content_entries` com discriminador kind e políticas comuns (detalhes em DATABASE.md). Rotas de listagem e detalhe são Server Components dinâmicos. Não há cache público entre requisições: publicação, agendamento e retirada de conteúdo são reavaliados a cada leitura. React.cache deduplica somente no contexto da requisição. Somente as listagens leem resumos; detalhes leem o corpo.

SDK Supabase 2.119.0 e server-only 0.0.1 adicionados para consulta pública no servidor. `@supabase/ssr` não é necessário enquanto não houver sessões. Runtime mínimo passa a Node.js 22; desenvolvimento/CI em Node.js 24. Nenhuma chave administrativa é usada na aplicação.
