# Arquitetura

## Estado observado no checkout
Na inspeção inicial, o único arquivo versionado era `README.md` (perfil em Markdown com links e listas de tecnologias). Não há código de aplicação, `src/`, rotas, componentes, package manifest/lockfile, configuração de Vercel, testes ou configuração Supabase. Portanto, não é possível afirmar framework ou runtime existente. Não se alterou funcionalidade de aplicação.

## Direção proposta — ainda não aprovada/implementada
Preferências da visão do produto: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Lucide, Supabase e Vercel; Framer Motion e Blob somente se justificadas. São opções futuras, não dependências atuais. Validar versões, compatibilidade, necessidade e custo antes de adotar.

Arquitetura futura deve separar apresentação, lógica de domínio e acesso a dados; manter componentes reutilizáveis; usar tipagem estrita; evitar duplicação e dependências não justificadas. Rotas, organização do código e limites de módulos serão decididos quando a aplicação for criada, sem presumir uma estrutura que ainda não existe.

## Limites de confiança pretendidos
- Conteúdo público somente publicado e aprovado.
- Operações administrativas autenticadas e autorizadas no servidor.
- Acesso ao banco limitado por políticas e por modelo de propriedade.
- Segredos exclusivamente em configuração de ambiente protegida; nunca em cliente ou Git.

## Decisões pendentes
Aprovar stack efetiva e arquitetura de conteúdo; decidir CMS próprio/Supabase versus outra solução, estratégia de mídia e autenticação do painel. Não introduzir banco ou dependências até a fase correspondente e inspeção da integração.
