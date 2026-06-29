import { useEffect, useState } from "react";
import "./App.css";
import ProducBanner from "./Widgets/ProducBanner/ProducBanner.jsx";

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
      {produtos.map((produto) => (
        <ProducBanner
          key={produto.id}
          rate={produto.rate}
          imagem={produto.imagem}
          nome={produto.nome}
          precoAntigo={produto.precoAntigo}
          precoAtual={produto.precoAtual}
          desconto={produto.desconto}
        />
      ))}
    </>
  );
}

export default App;
