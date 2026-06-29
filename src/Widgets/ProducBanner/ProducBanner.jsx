import {useState} from "react";
import styles from './ProducBanner.module.css';
import iconeCartVazio from "../../assets/cartVazio.png";
import iconeCartCheio from "../../assets/cartCheio.png";
import iconeHeartVazio from "../../assets/heartVazio.svg";
import iconeHeartCheio from "../../assets/heartCheio.svg";

function ProducBanner({rate,imagem,nome,precoAntigo,precoAtual,desconto}){

    const [carrinho,setCarrinho] = useState(true);
    const [animarCarrinho,setAnimarCarrinho] = useState(false);

    const adicionarCarrinho = () => {
    setAnimarCarrinho(true);
    setCarrinho(!carrinho);
  };

    const [heart,setHeart] = useState(true);
    const [animarHeart,setAnimarHeart] = useState(false);
    
    const adicionarHeart = () => {
    setAnimarHeart(true);
    setHeart(!heart);
  }

  return(

    <div className={styles.container}>
      
      <div className={styles.icones}>
        
        <p className={styles.rate}>⭐ {rate} </p>

        <button onClick={adicionarHeart} className={styles.heart}>
          <img src={heart ? iconeHeartVazio : iconeHeartCheio} width={25} height={25}
          className={animarHeart ? styles.pop : ""}
          onAnimationEnd={() => setAnimarHeart(false)}
          />
        </button>

        <button onClick={adicionarCarrinho} className={styles.carrinho}>
          <img  src={carrinho ? iconeCartVazio : iconeCartCheio } width={25} height={25}
          className={animarCarrinho ? styles.pop : ""}
          onAnimationEnd={() => setAnimarCarrinho(false)}


          />

        </button>

      </div>

      <div className={styles.imagem}>
            <img className={styles.imagemPrincipal} src={imagem} width={162} height={162}/>
      </div>
      <p className={styles.nome} >{nome}</p>

      <p className={styles.preco}>R$ {precoAntigo}</p>

      <p className={styles.precoComDesconto}>R$ {precoAtual} <span className={styles.verdinho}>-{desconto}%</span></p>

      <p className={styles.formaDePagamento}>No Pix ou 10x de R$ {(precoAtual / 10).toFixed(2)}</p>  

    </div>
  
  )

}

export default ProducBanner;
