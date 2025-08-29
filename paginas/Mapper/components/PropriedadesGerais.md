# Propriedades Gerais do Projeto (@)

As propriedades gerais definem variáveis de ambiente e parâmetros essenciais para o funcionamento da aplicação, incluindo configurações de banco de dados, autenticação, multi-tenancy, integrações e paths do sistema.

A estrutura é organizada em dois blocos principais:
* `env` → Configurações de ambiente (back-end e front-end).
* `Metadados` do projeto → Nome, descrições, paths e versão.

# 1. Configurações de Ambiente (`env`)
## 1.1 Back-end (`back`)

Contém variáveis relacionadas à autenticação, banco de dados de segurança (tenant), banco de dados padrão (default tenant), servidor de identidade, servidor de e-mail e paths da aplicação.

### 1.1.1 Autenticação

* `JWKsUri` → URL de descoberta das chaves públicas para validação de tokens JWT.

* `JWTSECRET` → Segredo usado para assinar/verificar tokens JWT.
 
* `APPLICATION_NAME` → Nome da aplicação para exibição.

### 1.1.2 Banco de Dados (Security Tenant)

* Tipo de banco: `SECURITY_TENANT_DATABASE_TYPE` (ex.: postgres, mysql).

* Nome do banco: `SECURITY_TENANT_DATABASE_NAME`.
 
* Usuário: `SECURITY_TENANT_DATABASE_USERNAME`.
 
* Senha: `SECURITY_TENANT_DATABASE_PASSWORD`.
 
* Host: `SECURITY_TENANT_DATABASE_HOST`.
 
* Porta: `SECURITY_TENANT_DATABASE_PORT`.
 
* Configurações adicionais: SSL, PoolSize, Timeout, Options, StoragePath.
 
* Chave de criptografia para senha de tenant: `SECURITY_ENCRYPTION_KEY_TENANT_PASSWORD`.

### 1.1.3 Banco de Dados (Default Tenant)

Mesma estrutura do Security Tenant, mas com prefixo `DEFAULT_TENANT_`.

### 1.1.4 Servidor de Identidade (`identityServer`)

* `CLIENT_ID` e `CLIENT_SECRET` → Credenciais da aplicação.
* `TENANT_ID` → Identificação do tenant na plataforma de autenticação.
* `SCOPE` → Escopos de acesso.
* `DOMAIN_NAME`, `AUTHENTICATION_FLOW_DOMAIN_NAME` → Domínios usados no fluxo de autenticação.
* `TOKEN_ISSUER` → URL emissora dos tokens.

### 1.1.5 Servidor de E-mail (`emailServer`)

* `EMAIL_USER` → E-mail remetente.
* `EMAIL_SERVER_HOST` → Host SMTP.
* `EMAIL_SERVER_PORT` → Porta SMTP.
* `EMAIL_SERVER_USER` e `EMAIL_SERVER_PASSWORD` → Credenciais SMTP.

### 1.1.6 Paths

* `FRONTEND_PATH` → URL do front-end.
* `PORT_SERVER` → Porta do servidor back-end.

## 1.2 Front-end (`front`)

Parâmetros para integração com o provedor de identidade e controle de fluxo de autenticação.

* `authority` → URL base do provedor de identidade.
* `client_id` → ID do cliente no provedor.
* `redirect_uri` e post_logout_redirect_uri → Endpoints para login/logout.
* `scope` → Escopos solicitados.
* `tenant_id` → Identificação do tenant.
* `provider` → Domínio do provedor de autenticação.
* `signInPolitical`, `passwordResetPolitical`, `profileEditPolitical` → Fluxos/políticas de autenticação.

# 2. Metadados do Projeto

* `nomeProjeto` → Nome da aplicação (ex.: RMZK Seguros).
* `pequenaDescricao` → Breve descrição (PT e EN).
* `longaDescricao` → Descrição detalhada (PT e EN).
* `backPath` → URL base do back-end.
* `frontPath` → URL base do front-end.
* `version` → Versão atual da aplicação.
* `versionCompatibleCode` → Código de compatibilidade.