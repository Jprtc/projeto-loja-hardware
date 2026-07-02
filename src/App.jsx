import { useEffect, useState } from "react";
import "./App.css";
import ListaCategorias from "./Widgets/ListaCategorias/ListaCategorias";
import ListaCards from "./Widgets/ListaCards/ListaCards";
import Footer from './Widgets/Footer/Footer'
import Header from './Widgets/Header/Header'
// import MainBanner from './Widgets/MainBanner/MainBanner'
import MainBanner from './Widgets/MainBanner/MainBanner'
import ProducBanner from "./Widgets/ProducBanner/ProducBanner.jsx";
import ProducCarrosel from "./Widgets/ProducBannerCarrosel/ProducBannerCarrosel.jsx";



function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://6a4202f87602860e6520aa42.mockapi.io/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.log(err));
  }, []);

  return (

    <>
    <Header/>

    <MainBanner />

    <main>

      <ListaCards />

      <ListaCategorias />

      <ProducCarrosel produtos={produtos}/>

    </main>

    <Footer/>

    </>
  );
}

export default App;
