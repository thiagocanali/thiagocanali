# Segurança

**Estado:** site público estático em Next.js, sem autenticação, banco ou endpoints de mutação. Contato usa links externos e mailto; nenhuma mensagem é armazenada. Os requisitos abaixo aplicam-se à evolução do produto.

## Requisitos
- Proteger o Control Center com autenticação real e autorização no servidor em cada operação; não confiar em guards ou estado do cliente.
- Usar o provedor de identidade escolhido e sessões seguras; adicionar proteção contra CSRF/abuso conforme fluxo.
- Separar conteúdo público publicado de rascunhos e dados administrativos.
- Validar e limitar entradas no servidor; consultas parametrizadas; upload com tipo/tamanho autorizados; proteger contra XSS e abuso de formulários.
- Se Supabase for adotado, habilitar RLS em tabelas expostas, escrever políticas de menor privilégio e testar anon/authenticated. Nunca expor service-role/segredo em código de navegador.
- Revisar cabeçalhos HTTP, CSP, dependências e logs antes do lançamento; não registrar tokens ou dados sensíveis.

## Ambiente e segredos
`.env.example` contém nomes e valores ilustrativos/não secretos apenas. Arquivos `.env*` reais não devem ser versionados, salvo o template `.env.example`; usar variáveis de ambiente de desenvolvimento/deploy e escopos mínimos. Não imprimir credenciais nem copiá-las para prompts, documentação, logs ou blueprint.

## Incidentes e privacidade
Coletar o mínimo de dados pessoais, definir retenção e mecanismo de remoção. Formulário público exige validação, limitação de taxa e proteção contra spam. Documentar procedimento de resposta a incidentes antes do lançamento. Requisitos legais e política de privacidade seguem pendentes de análise.
