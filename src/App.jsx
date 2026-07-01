import "./App.css";

import ListaCategorias from "./Widgets/ListaCategorias/ListaCategorias";
import ListaCards from "./Widgets/ListaCards/ListaCards";
import Footer from './Widgets/Footer/Footer'
import Header from './Widgets/Header/header'
import MainBanner from './Widgets/MainBanner/MainBanner'

function App() {
  return (
    <main>

      <ListaCards />

      <ListaCategorias />

    </main>
  );
}

export default App;