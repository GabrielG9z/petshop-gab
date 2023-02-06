import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Home from "./pages/home/Home";
import Produtos from "./pages/produtos/Produtos";
import Sobre from "./pages/sobre/Sobre";
import Contato from "./pages/contatos/Contato";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <main className="limitador">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Produtos">
              <Produtos />
            </Route>
            <Route path="/Sobre">
              <Sobre />
            </Route>
            <Route path="/Contato">
              <Contato />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
