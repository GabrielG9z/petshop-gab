# React: Projeto PetShop

## Uso de rotas com a lib react-router-dom (Versão 5)

### Instalação

`npm install react-router-dom@5`

### App.jsx

1. Reazlizar a importação dos recursos com a lib
   `import {Browser, Route, Switch } from "react-router-dom;`

2. Envolver todo o conteúdo do App.jsx dentro do **BrowserRouter**;

3. Cada componente que funciona como "página ou tela" deve estar dentro de um `<Route>`.

4. Os `<Route>` devem estar dentro de um `<Switch>` para que aconteça a troca entre componentes ao navegar.

**OBS.:** não coloque nada além de `<Route>` no `<Switch>`

### Menu.jsx

1. Importar o NavLink
   `import {NavLink} from "react-router-dom`;

2. Substituir a tag `<a>` pelo `<NavLink`
   Projeto iniciado através do [Create React App](https://github.com/facebook/create-react-app).
