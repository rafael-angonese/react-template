<- [README.MD](../README.MD)

# 🎮 **Ambiente de desenvolvimento**

Para executar o ambiente de desenvolvimento deste projeto é necessário possuir o node instalado em sua máquina.

```bash
$ node --version
v20.6.1
```

Possuir um gerenciador de pacotes `yarn`/`pnpm`/`npm`.

por padrão vamos utilizar o npm que já vem com o próprio node.

```bash
# para verificar se possui o gerenciador de pacotes instalado
$ npm --version
9.8.1
```

### 🐫 **Instale as dependências**

```bash
$ npm install

# Alternativamente ou preferencialmente voce pode instalar as dependências exatas do lock file
$ npm ci
```

### 🌬 **ENV**

Usei variáveis de ambiente, então pode-se renomear o arquivo `.env.example` para `.env` e aproveitar as variáveis de ambiente de lá. Por padrão elas apontam para o localhost.

Crie um arquivo .env com base no arquivo [.env.example](../.env.example)

### **🚀 Execute a aplicação**

```bash
$ npm run dev
```

- O app estará rodando na porta 3000.
- Acesse [`<http://localhost:3000>`](http://localhost:3000)

---