# Banco de dados

**Estado:** não há banco, schema, migrations ou cliente de dados no checkout. O modelo abaixo é proposta para análise, não schema implantado.

## Direção proposta
Se persistência for necessária, avaliar Supabase/Postgres conforme integração conectada e custo/necessidades. Definir migrations versionadas, validação no servidor, políticas de acesso e estratégia de backup antes de publicar dados. Não usar armazenamento apenas no navegador para conteúdo de longo prazo.

## Entidades candidatas
- `projects`: título, slug, resumo, descrição, tecnologias, categoria, status editorial, URL de repositório/demo e ordem.
- `articles`: título, slug, resumo, corpo, autoria, publicação e estado.
- `experiments`: título, slug, hipótese/descrição, tecnologias, estado e resultados confirmados.
- `media`: caminho, metadados, texto alternativo e referência de uso.
- `site_settings`: configurações públicas explicitamente permitidas.
- `profiles`/identidade administrativa: somente se autenticação e modelo de autorização exigirem dados locais.

Relacionamentos pretendidos: projeto/artigo/experimento podem referenciar mídia; tecnologias e tags podem ser normalizadas ou armazenadas como metadados após avaliar consultas e manutenção. Chaves, cardinalidades, constraints, histórico, soft-delete e migração ainda precisam de decisão.

## Regras de dados
Rascunhos não devem ser acessíveis anonimamente. Publicação deve ser explícita; timestamps em UTC; slugs únicos; validar URLs e conteúdo no servidor; evitar guardar segredos ou dados pessoais desnecessários. Toda tabela exposta precisa de RLS com políticas específicas por operação e papel. Rever `SECURITY.md` antes de criar schema.
