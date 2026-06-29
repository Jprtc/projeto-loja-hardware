import {useState} from "react";
import styles from './ProducBanner.module.css';
import imagemProduto from "../../../../../../../Downloads/teste.jpg";
import iconeCartVazio from "../../assets/cartVazio.png";
import iconeCartCheio from "../../assets/cartCheio.png";
import iconeHeartVazio from "../../assets/heartVazio.svg";
import iconeHeartCheio from "../../assets/heartCheio.svg";

function ProducBanner({}){

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
        
        <p className={styles.rate}>⭐ 5.0</p>

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
            <img className={styles.imagemPrincipal} src={imagemProduto} width={162} height={162}/>
      </div>
      <p className={styles.nome} >Controle Sony Dualsense Edge PS5, Sem Fio, Preto e Branco - CFI-ZCP1WY</p>

      <p className={styles.preco}>R$ 1.200.88</p>

      <p className={styles.precoComDesconto}>R$ 1.000.00 -15%</p>

      <p className={styles.formaDePagamento}>No Pix ou 10x de R$ 100.00</p>  

    </div>
  
  )

}

export default ProducBanner;
