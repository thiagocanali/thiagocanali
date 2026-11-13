# Sistema visual

**Direção:** Dark Digital Engineering. **Estado:** implementado na primeira versão do site público.

## Identidade

Premium, técnica, minimalista e editorial, com referências discretas a ferramentas de engenharia. Evitar clichês de Matrix, excesso de neon, glassmorphism dominante e animações decorativas. A interface usa tipografia, espaço e linhas estruturais em vez de imagens genéricas.

## Tokens

| Token | Valor atual | Uso |
|---|---|---|
| Fundo | `#080B09` | Fundo principal |
| Superfície | `#101512` | Painéis e seções |
| Superfície elevada | `#151C17` | Elementos de maior hierarquia |
| Texto | `#EDF3EE` | Conteúdo principal |
| Texto secundário | `#A0ADA4` | Descrições e navegação |
| Texto sutil | `#7F8D83` | Metadados e estados |
| Acento primário | `#81F7A8` | Ações, linhas e estados ativos |
| Acento secundário | `#C5B1FF` | Realce pontual |
| Bordas | `#28352C` | Separação de superfícies |

Os tokens estão em `src/app/globals.css`. Os pares de texto e fundo usados foram escolhidos para contraste alto; comunicar estado também por texto, não apenas cor.

## Tipografia e composição

Geist Sans para texto e Geist Mono para metadados; duas famílias no máximo. Container de 1200 px, grid editorial na Home e fluxo em coluna nas páginas de conteúdo. Breakpoints principais em 900 px e 700 px. Espaçamento responsivo com `clamp()` e proporções em múltiplos de 4/8.

## Componentes e acessibilidade

Cabeçalho com navegação desktop e menu móvel nativo, links de ação, cartões de áreas, introduções e estados vazios. Inclui link para pular ao conteúdo, landmarks semânticos, foco visível, navegação por teclado e respeito a `prefers-reduced-motion`. Manter alvos de interação legíveis em telas estreitas.

Não há imagens ou biblioteca de ícones; setas são decorativas e ocultas da árvore acessível quando redundantes. Não adicionar movimento sem benefício funcional.
