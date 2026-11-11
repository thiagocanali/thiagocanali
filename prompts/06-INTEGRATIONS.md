# 06 — Integrações

## Objetivo
Adicionar serviços externos apenas quando um requisito aprovado deles depender.

## Contexto
Supabase, Vercel e possível Blob são preferências/possibilidades; não estão comprovadamente configurados neste repositório.

## Escopo
Integração mínima necessária, fluxo de credenciais, falhas, limites e atualização documental.

## Requisitos
Verificar status e documentação atual do serviço; preferir integração gerenciada quando aplicável; segredos somente em variáveis protegidas; validação server-side; timeouts, limites, tratamento de erro e privacidade; não adicionar dependência não necessária.

## Entregáveis esperados
Integração testável e documentação de configuração por ambiente e operação.

## Critérios de aceite
Sem tokens no browser/log/Git; falhas seguras; fluxo confirmado em ambiente apropriado; variáveis e permissões mínimas documentadas.

## Referências
`AGENTS.md`; `docs/ARCHITECTURE.md`; `docs/SECURITY.md`; `docs/DEPLOYMENT.md`; `docs/DATABASE.md`.
