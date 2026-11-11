# Sistema visual

**Direção aprovada pela visão do produto:** Dark Digital Engineering. **Estado:** especificação de direção; interface e tokens ainda não implementados.

## Identidade
Premium, técnica, futurista, minimalista e editorial, com referências a ferramentas de engenharia e terminais. Evitar templates genéricos, excesso de neon, clichês de Matrix, animações gratuitas, glassmorphism dominante e tom excessivamente lúdico.

## Cores de referência
| Token conceitual | Valor | Uso proposto |
|---|---|---|
| Fundo primário | `#080B0A` | Fundo principal |
| Fundo secundário | `#101512` | Superfícies e seções |
| Acento primário | `#55F59A` | Ações e estados positivos, com contraste verificado |
| Acento secundário | `#A78BFA` | Destaques pontuais |
| Muted | `#8795A5` | Texto secundário e metadados |

Valores são direcionadores; validar contraste WCAG em combinações reais. Não usar cor como único indicador de estado.

## Tipografia
Sans: Geist ou Space Grotesk (decisão de implementação pendente). Monoespaçada: JetBrains Mono para metadados e trechos técnicos com parcimônia. Limitar a duas famílias e definir escala tipográfica responsiva.

## Espaçamento e composição
Ainda sem tokens numéricos estabelecidos. Adotar escala consistente baseada em múltiplos de 4/8, hierarquia editorial, largura de leitura controlada e grids somente para relações bidimensionais; preferir Flexbox em layouts lineares.

## Componentes e interação
Componentes ainda não existem. Futuras superfícies devem incluir navegação, botões, cartões de conteúdo, filtros, formulários e estados de foco/erro/sucesso. Semântica HTML, teclado, foco visível, labels e alvos touch adequados são obrigatórios. Movimento sutil e respeitar `prefers-reduced-motion`.

## Responsividade
Projetar primeiro para telas estreitas; testar pontos de quebra com conteúdo real, evitar overflow horizontal e preservar hierarquia e legibilidade. Breakpoints e componentes concretos serão definidos na implementação.
