<- [README.MD](../README.MD)

# 🦚 **ESLint**

Para executar a verificação de melhorias de código com o ESLint basta executar o comando de lint.

```bash
$ npm run lint
```
Será exibido no console as sugestões de melhorias.

Para executar correções que o próprio ESLint consegue resolver basta executar o seguinte comando.
```bash
$ npm run lint-fix
```

Será feito a correção automagicamente do do código, é essencial conferir as correções feita pois podem introduzir bugs.

---

# 🌵 **Entenda as configurações**

- `eslint`: o ESLint é uma ferramenta de linting para JavaScript que identifica erros, aplica padrões de codificação e melhora a legibilidade do código.
- `prettier`: o Prettier é uma ferramenta que formata automaticamente o código, proporcionando consistência de estilo em projetos e simplificando a manutenção.
- `@typescript-eslint/eslint-plugin`: plugin com regras para projetos com código TypeScript.
- `@typescript-eslint/parser`: um parser que permitirá ao ESLint fazer sugestões em código TypeScript.
- `eslint-config-prettier`: uma configuração para o ESLint que desabilita regras que serão gerenciadas pelo Prettier, evitando conflitos.
- `eslint-config-standard`: fornece configurações padrão para o ESLint, seguindo as diretrizes de estilo da comunidade JavaScript Standard.
- `eslint-import-resolver-typescript`: facilita a importação das configurações de `tsconfig.json` como paths.
- `eslint-plugin-import`: plugin que permitirá ao ESLint lidar com a sintaxe de `import/export` da ES6+.
- `eslint-plugin-jsx-a11y`: plugin com regras de acessibilidade.
- `eslint-plugin-n`: Usado
- `eslint-plugin-prettier`: plugin para executar o prettier como um plugin do ESLint.
- `eslint-plugin-promise`: possui regras para lidar com promises da melhor forma.
- `eslint-plugin-react`: plugin com regras específicas para projetos React.
- `eslint-plugin-react-hooks`: plugin com regras sobre o uso de React hooks. Ele garantirá, por exemplo, que você jamais utilize um hook fora de um function component.

---

# 🌵 **Configurando seu Vs Code**

Por fim, é necessário configurar o VSCode para utilizar o ESLint e o Prettier para fazer sugestões e formatar o código, respectivamente. 
Caso você ainda não as possua, instale a extensão do [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Como o Prettier está sendo utilizado como um plugin do ESLint, você não precisa da extensão `Prettier - Code formatter`

Caso seu projeto ainda não possua um arquivo `.vscode/settings.json`, será necessário criá-lo. Nesse arquivo, adicione as duas regras a seguir:

```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  // "editor.formatOnSave": true, essa opção deve estar desabilitada
```