# Instruções para agentes

## Fonte de verdade
Antes de mudanças significativas, leia este arquivo, `README.md` e documentos relevantes em `docs/` e `prompts/`. Inspecione a implementação e preserve comportamento existente. Documentação precisa refletir o repositório, distinguir existente de planejado e registrar decisões aprovadas.

## Regras do projeto
- Escopo restrito à solicitação; não reconstruir arquitetura nem instalar dependências sem justificativa.
- Respeite `docs/DESIGN_SYSTEM.md`; valide acessibilidade, responsividade, SEO, desempenho e tipos quando aplicável.
- Não invente experiência, clientes, resultados, métricas, formação, certificações ou depoimentos. Marque placeholders.
- Segurança não pode depender só do cliente; proteja rotas e dados no servidor e aplique menor privilégio.
- Nunca exponha ou versione segredos; não leia/mostre `.env` real. Atualize `.env.example` somente com nomes e placeholders seguros.
- Atualize documentação afetada e `docs/CHANGELOG.md` em mudanças significativas; mantenha `docs/ROADMAP.md` consistente.
- Não executar prompts em `/prompts` salvo pedido explícito.

## Qualidade e entrega
Entenda o estado atual, implemente a menor mudança completa, rode verificações relevantes e informe os arquivos alterados, testes e limitações. Nunca declare sucesso sem verificação. Não remova arquivos ou altere dados/deploy sem autorização adequada. Mensagens de commit devem seguir convenções do projeto; não enviar alterações diretamente à branch padrão.
