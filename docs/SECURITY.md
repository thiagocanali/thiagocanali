# Segurança

## Estado atual

A aplicação pública é estática e não processa dados pessoais enviados por usuários. Não há autenticação, banco, API própria, formulário ou upload. O contato é feito fora do site por links de e-mail e LinkedIn.

`next.config.ts` configura `X-Content-Type-Options`, `Referrer-Policy`, HSTS e `Permissions-Policy`. Não foi adicionada CSP porque a aplicação não foi testada com uma política de relatório e Next.js usa scripts de hidratação; revisar e endurecer a política antes do lançamento. Não se define `X-Frame-Options` para este showcase público.

## Requisitos para fases futuras

- Proteger o Control Center com autenticação real e autorização no servidor em cada operação; não confiar em guards ou estado do cliente.
- Separar conteúdo público publicado de rascunhos e dados administrativos.
- Validar e limitar entradas no servidor; usar consultas parametrizadas e limitar abusos de formulário.
- Se Supabase for adotado, habilitar RLS em tabelas expostas, escrever políticas de menor privilégio e testar anon/authenticated. Nunca expor chave secreta ou service-role no navegador.
- Revisar CSP em modo report-only, permissões, dependências, backups e logs antes do lançamento; não registrar tokens ou dados sensíveis.

## Ambiente e segredos

`.env.example` contém nomes e valores ilustrativos/não secretos. Arquivos `.env*` reais não devem ser versionados, salvo o template `.env.example`; usar variáveis de ambiente locais e de deploy. Não imprimir credenciais nem copiá-las para prompts, documentação, logs ou blueprints.

## Privacidade e incidentes

Coletar o mínimo de dados, definir retenção e mecanismo de remoção. Qualquer formulário público futuro exige validação, limitação de taxa e proteção contra spam. Requisitos legais e procedimento de resposta a incidentes permanecem pendentes.
