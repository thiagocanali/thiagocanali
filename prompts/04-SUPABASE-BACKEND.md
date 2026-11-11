# 04 — Backend Supabase

## Objetivo
Avaliar e implementar persistência segura com Supabase somente quando a integração e o escopo forem aprovados.

## Contexto
Não há schema, banco ou cliente Supabase observado. A proposta de entidades está em `docs/DATABASE.md`; requer validação antes de migrações.

## Escopo
Modelo de dados, migrations, acesso de servidor/cliente e políticas necessárias à funcionalidade solicitada.

## Requisitos
Verificar integração, schema e documentação oficial atual; RLS em tabelas expostas; políticas por ação e propriedade; validação de input; nunca expor service role; versionar mudanças e testar acesso permitido/negado.

## Entregáveis esperados
Modelo aprovado, migrations/políticas e consultas estritamente necessárias, atualização de DATABASE/SECURITY.

## Critérios de aceite
Testes confirmam isolamento por usuário/estado; sem segredos no cliente; sem dados mockados substituindo a fonte real.

## Referências
`AGENTS.md`; `docs/DATABASE.md`; `docs/SECURITY.md`; `docs/ARCHITECTURE.md`.
