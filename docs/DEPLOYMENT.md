# Deploy e ambientes

## Estado observado
Não existe configuração de aplicação, `package.json`, `vercel.json`, workflow CI ou comando de desenvolvimento/build no checkout. O domínio `thiagocanali.vercel.app` é planejado, não confirmado como configurado. Nenhum deploy foi verificado nesta tarefa.

## Fluxo futuro
1. Escolher e documentar stack/runtime antes de definir comandos.
2. Desenvolvimento local com `.env.local` não versionado e dependências fixadas no lockfile.
3. Preview por branch/PR, sem segredos de produção e com dados de teste.
4. Produção somente após verificações de acessibilidade, testes, segurança, conteúdo e rollback.
5. Configurar variáveis separadamente por ambiente na plataforma escolhida; nunca incluir valores secretos em Git.

## Operação
Ao adotar Vercel, verificar integração do projeto, domínio, root directory, build/install commands e variáveis no painel/CLI; documentar os valores não secretos. Definir observabilidade, backups e rollback conforme arquitetura final. Não afirmar comandos executáveis até manifesto e scripts serem adicionados.
