# Segurança

**Estado:** páginas editoriais renderizadas no servidor com leitor público Supabase; schema/RLS testados localmente, sem banco hospedado provisionado, autenticação ou endpoints de mutação. Contato usa links externos e mailto; nenhuma mensagem é armazenada. Os requisitos abaixo aplicam-se à evolução do produto.

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

## Leitura editorial

- Somente publishable key é aceita pelo leitor server-only. Chaves sb_secret_ e legadas service-role não são aceitas.
- Sem cookies nem sessão do visitante na consulta pública; nenhuma mutação do site.
- ACL e RLS bloqueiam escrita de anon/authenticated; RLS esconde conteúdo não publicado mesmo com SELECT.
- URLs passam por validação HTTPS e rejeição de credenciais antes de renderizar links; body é texto escapado pelo React.
- Timeout de 5 s e no-store; erros do provedor não aparecem na interface nem são registrados com dados sensíveis.
- Projeto remoto ainda não provisionado por limite da conta. Advisors e verificação hospedada ficam pendentes de capacidade.
