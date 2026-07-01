import { useState, useEffect } from "react";   // ← Adicionado useEffect
import styles from './ProducBanner.module.css';

import iconeCartVazio from "../../assets/cartVazio.png";
import iconeCartCheio from "../../assets/cartCheio.png";
import iconeHeartVazio from "../../assets/heartVazio.svg";
import iconeHeartCheio from "../../assets/heartCheio.svg";
import icone404 from "../../assets/404.svg";

function ProducBanner({rate,imagem,nome,precoAntigo,precoAtual,desconto,frete,estoque})

{
  const [imagemPrincipal, setImagemPrincipal] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [erroImagem, setErroImagem] = useState(false);


  useEffect(() => {
    if (!imagem) {
      setIsLoading(false);
      setErroImagem(true);
      return;
    }

    setIsLoading(true);
    setErroImagem(false);

    const timer = setTimeout(() => {
      setImagemPrincipal(imagem);
      setIsLoading(false);
    }, 100000);

    return () => clearTimeout(timer);
  }, [imagem]);

  const [carrinho, setCarrinho] = useState(true);
  const [animarCarrinho, setAnimarCarrinho] = useState(false);

  const [heart, setHeart] = useState(true);
  const [animarHeart, setAnimarHeart] = useState(false);

  const adicionarCarrinho = () => {
    setAnimarCarrinho(true);
    setCarrinho(!carrinho);
  };

  const adicionarHeart = () => {
    setAnimarHeart(true);
    setHeart(!heart);
  };

  return (
    <div className={styles.container}>
      <div className={styles.icones}>
        <p className={styles.rate}>⭐ {rate}</p>

        <button onClick={adicionarHeart} className={styles.heart}>
          <img
            src={heart ? iconeHeartVazio : iconeHeartCheio}
            width={25}
            height={25}
            className={animarHeart ? styles.pop : ""}
            onAnimationEnd={() => setAnimarHeart(false)}
            alt="Favoritar"
          />
        </button>

        <button onClick={adicionarCarrinho} className={styles.carrinho}>
          <img
            src={carrinho ? iconeCartVazio : iconeCartCheio}
            width={25}
            height={25}
            className={animarCarrinho ? styles.pop : ""}
            onAnimationEnd={() => setAnimarCarrinho(false)}
            alt="Adicionar ao carrinho"
          />
        </button>
      </div>

      <div className={styles.imagem}>
        {isLoading ? (
          <div className={styles.rodaDaFortuna}></div>
        ) : erroImagem ? (
            <>
          <p>NoPisibroCarregaSabaga</p>
          <img className={404} src={icone404} width={162} height={160}/>
            </>
        ) : (
          <img
            className={styles.imagemPrincipal}
            src={imagemPrincipal}
            width={162}
            height={162}
            alt={nome}
            onError={() => setErroImagem(true)}
          />
        )}
      </div>

      {frete && <p className={styles.frete}>Frete Grátis</p>}
      <p className={styles.nome}>{nome}</p>
      <p className={styles.preco}>R$ {precoAntigo}</p>
      <p className={styles.precoComDesconto}>
        R$ {precoAtual} <span className={styles.verdinho}>-{desconto}%</span>
      </p>
      <p className={styles.formaDePagamento}>
        No Pix ou 10x de R$ {(precoAtual / 10).toFixed(2)}
      </p>

      {estoque < 15 && <p className={styles.estoque}>Restam {estoque}</p>}
    </div>
  );
}

export default ProducBanner;
