import './ProducBanner.module.css';
import imagem from "../../../../../../../Downloads/teste.jpg"

function ProducBanner({}){

  return(

    <div>

      <img className="didi" src={imagem} width={162} height={162}/>
      <p>nome do produto</p>
      {/* no item de baixo botar linha por cima indicando desconto */}
      <p>R$ 1.200.88</p>
      <p>R$ 1.000.00 -15%</p>
      <p>No Pix ou 10x de R$ 100.00</p>  

    </div>
  
  )

}

export default ProducBanner;
