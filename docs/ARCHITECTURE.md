# Arquitetura

## Estado implementado

O projeto agora usa Next.js App Router, React, TypeScript, Tailwind CSS 4 e npm. A interface pública está em `src/app/`, componentes compartilhados em `src/components/` e links de perfil em `src/lib/site.ts`.

Rotas estáticas: `/`, `/projects`, `/lab`, `/journal`, `/about` e `/contact`. As páginas de projetos, Lab e Journal mostram estados vazios honestos; About identifica os dados biográficos como pendentes de revisão. Contact usa links externos e `mailto`; não há formulário nem processamento de mensagens.

## Limites atuais

A camada é somente de apresentação e conteúdo estático. Não existe banco de dados, CMS, autenticação, painel privado, upload, integração de e-mail ou API própria. Não adicionar uma camada cliente simulada para substituir esses recursos; implementar persistência quando a fase correspondente for aprovada e a integração disponível for verificada.

## Direção de arquitetura

- App Router e páginas de servidor por padrão; adicionar componentes cliente apenas quando interação real exigir.
- Manter o conteúdo público e componentes de apresentação separados dos futuros serviços de dados.
- Usar validação no servidor e autorização em toda operação administrativa futura.
- Evitar dependências sem necessidade demonstrável.
- Preservar tipagem estrita e semântica HTML acessível.

## Decisões

- Stack pública inicial: Next.js, React, TypeScript, Tailwind CSS e npm.
- Estilos globais em `src/app/globals.css`, com tokens semânticos e breakpoints mobile-first.
- Supabase/Neon, autenticação, CMS, mídia e e-mail ficam fora da implementação atual; decidir quando os requisitos dessas fases forem iniciados.
- Domínio principal planejado: `thiagocanali.vercel.app`; não verificado ou configurado por esta implementação.
