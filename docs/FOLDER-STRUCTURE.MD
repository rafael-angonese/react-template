<- [README.MD](../README.MD)

# 🐻 **Estrutura de pastas**


```
src
├── assets                # imagens, gifs, audios, videos, styles, svg.
├── components            # UI components.
├── constants             # enums, variáveis constantes para evitar hard coded.
├── contexts              # React Contexts Providers.
├── hooks                 # React hooks.
├── lib                   # Configuração de bibliotecas externas.
├── pages                 # Componentes respectivos de cada página.
├── respositories         # Chamadas de API.
├── routes                # Rotas da aplicação.
├── store                 # Gerenciador de estados globais.
├── types                 # Tipagens typescript principalmente de entidades de API.
└── utils                 # Funções comumente utilizadas.

```

# 🪲 **Convenção de nomenclatura**

- `kebab-case`: para nome de arquivos e diretórios.
- `camelCase`: para variáveis, constantes, funções e métodos.
- `PascalCase`: para nome de classes, typescript types e componentes react.


# 🐑 **Exemplos**

```
src
├── components
    └── button.tsx                # export const Button
    └── input-date.tsx            # export const InputDate
    └── linear-progress.tsx       # export const LinearProgress
├── constants
    └── use-types.ts              # export const userTypes
    └── default-per-page.ts       # export const defaultPerPage
├── hooks
    └── use-title.ts              # export const useTitle
    └── use-debounce.ts           # export const useDebounce
├── pages                 
    └── users
        └── edit-user-page.tsx    # export const EditUserPage
        └── list-user-page.tsx    # export const ListUserPage
        └── new-user-page.tsx     # export const NewUserPage
        └── show-user-page.tsx    # export const ShowUserPage
└── utils
    └── format-date.ts            # export const formatDate
    └── format-currency.ts        # export const formatCurrency
    └── is-dev.ts                 # export const isDEv

```