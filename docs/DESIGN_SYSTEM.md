# Sistema visual

**Direção aprovada:** Dark Digital Engineering.

## Princípios

Premium, técnico, futurista, minimalista e editorial, com referências a ferramentas de engenharia e terminais.

Evitar:
- template genérico;
- excesso de neon;
- estética “Matrix” literal;
- glassmorphism dominante;
- animações gratuitas;
- excesso de gradientes;
- texto ilegível em nome do visual.

A interface deve parecer uma ferramenta/produto de engenharia pessoal, não um landing page genérico de agência.

## Tokens de cor

Os valores abaixo passam de referência conceitual para tokens oficiais da primeira implementação.

| Token | Valor | Uso |
|---|---|---|
| `--background` | `#080B0A` | Fundo principal |
| `--surface` | `#101512` | Cards, painéis e superfícies |
| `--accent` | `#55F59A` | Ações primárias e destaque técnico |
| `--accent-secondary` | `#A78BFA` | Destaques secundários pontuais |
| `--text-muted` | `#8795A5` | Metadados e texto secundário |
| `--text` | derivado claro | Texto principal, definido para contraste |
| `--border` | derivado do sistema | Divisores e contornos |
| `--danger` | derivado do sistema | Erros e ações destrutivas |
| `--warning` | derivado do sistema | Avisos |

Os tokens derivados devem ser escolhidos com contraste WCAG verificado. A cor nunca será o único indicador de estado.

## Tipografia

- UI/editorial: Geist Sans, com fallback sans-serif.
- Técnico/metadados: Geist Mono, com fallback monospace.
- Space Grotesk não será usado inicialmente para evitar uma segunda decisão tipográfica concorrente.
- No máximo duas famílias tipográficas.
- Escala responsiva deve privilegiar legibilidade e hierarquia, não tamanhos extremos.

## Espaçamento e layout

Base de espaçamento em múltiplos de 4, com preferência por passos de 4/8.

Diretrizes:
- container de leitura controlada;
- grids apenas quando a relação bidimensional justificar;
- Flexbox para layouts lineares;
- áreas clicáveis adequadas para touch;
- evitar conteúdo colado às bordas em telas estreitas;
- preservar ritmo vertical consistente.

## Forma e superfície

- Bordas discretas.
- Raios moderados, não excessivamente arredondados.
- Sombras sutis.
- Superfícies devem continuar reconhecíveis sem depender de blur.
- Linhas e pequenos detalhes técnicos podem reforçar a identidade, desde que não prejudiquem leitura.

## Movimento

- CSS primeiro.
- Transições curtas e funcionais.
- Respeitar `prefers-reduced-motion`.
- Não usar animação para mascarar ausência de conteúdo.
- Uma biblioteca de animação só será adicionada se uma interação concreta justificar.

## Componentes

A base de componentes será shadcn/ui, customizada para os tokens deste projeto.

Primeiro conjunto provável:
- Button
- Card
- Badge
- Input
- Textarea
- Dialog
- Dropdown Menu
- Tabs
- Tooltip
- Sheet
- Separator

Adicionar componentes somente quando houver uso real.

## Acessibilidade

Obrigatório:
- HTML semântico;
- foco visível;
- navegação por teclado;
- labels associados;
- contraste verificado;
- estados de erro anunciáveis;
- `aria-*` apenas quando semântica nativa não resolver;
- respeito a `prefers-reduced-motion`;
- não depender apenas de cor.

## Responsividade

Mobile-first.

Pontos de quebra concretos serão definidos por conteúdo e componentes durante a implementação, não por uma lista arbitrária de dispositivos.

Critérios:
- sem overflow horizontal;
- navegação utilizável em touch;
- tipografia legível;
- imagens responsivas;
- tabelas/painéis administrativos com estratégia própria para telas estreitas.

## Iconografia

Lucide React.

Ícones devem:
- ter função clara;
- manter tamanho consistente;
- possuir rótulo acessível quando não acompanhados de texto;
- não substituir texto importante apenas por estética.

## Estado

Os estados de loading, empty, error, success e disabled fazem parte do design e devem ser planejados junto com cada fluxo.

## Implementação

Os tokens serão materializados no `globals.css` durante a Fase 2. Esta documentação permanece como fonte de verdade visual.
