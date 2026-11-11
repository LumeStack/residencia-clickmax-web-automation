# Residência ClickMax — Web Automation

Automação de testes end-to-end para o ClickMax, feita com [Playwright](https://playwright.dev) e TypeScript, como parte da Residência ClickMax da LumeStack.

## Pré-requisitos

- Node.js 20+
- Uma conta de teste no ClickMax (e-mail e senha)

## Configuração

1. Instale as dependências:

```bash
npm install
```

2. Copie o arquivo de exemplo de variáveis de ambiente e preencha com suas credenciais de teste:

```bash
cp .env.example .env
```

| Variável | Descrição |
|---|---|
| `BASE_URL` | URL base da aplicação (padrão: `https://app.clickmax.io`) |
| `WORKSPACE_SLUG` | Identificador do workspace de teste |
| `CLICKMAX_EMAIL` | E-mail de uma conta de teste |
| `CLICKMAX_PASSWORD` | Senha dessa conta |

O arquivo `.env` nunca é commitado (está no `.gitignore`) — cada pessoa usa suas próprias credenciais localmente.

## Rodando os testes

```bash
npm test              # roda todos os testes (public + auth)
npm run test:public   # roda só os testes que não precisam de login
npm run typecheck     # verifica os tipos TypeScript, sem rodar testes
```

Os testes abrem o Google Chrome instalado na máquina (não baixam um Chromium separado).

## Estrutura do projeto

```
src/
  config.ts          # leitura e validação das variáveis de ambiente
  pages/
    LoginPage.ts      # Page Object da tela de login
tests/
  public/             # testes que não exigem login
  auth/               # testes que fazem login de verdade
docs/
  walkthrough-app.html  # guia interativo explicando o projeto linha por linha
.github/workflows/
  smoke.yml           # pipeline de CI (disparo manual), roda só o projeto "public"
```

## Projetos do Playwright

Os testes são separados em dois grupos (`playwright.config.ts`):

- **`public`** — não precisam de credenciais. É o grupo que roda no CI, já que não exige segredos configurados no GitHub Actions.
- **`auth`** — fazem login de verdade usando as credenciais do `.env`. Rodam localmente.

## Para quem está começando

O arquivo [`docs/walkthrough-app.html`](docs/walkthrough-app.html) é um guia interativo que explica cada arquivo do projeto e os conceitos por trás dele (TypeScript, Page Object Model, Playwright), pensado para quem está vendo automação de testes pela primeira vez. Baixe o arquivo e abra com duplo clique no navegador — não precisa de servidor nem instalação.
