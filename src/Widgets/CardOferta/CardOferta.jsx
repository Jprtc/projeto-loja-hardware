import styles from "./CardOferta.module.css";

function CardOferta({ card }) {
  return (
    <article className={styles.card}>

      <header className={styles.topo}>
        <h3>{card.titulo}</h3>

        <span className={styles.seta}>›</span>
      </header>

      {/* CARD COM 1 PRODUTO */}

      {card.tipo === "unico" && (

        <div className={styles.unico}>

          <img
            src={card.produtos[0].imagem}
            alt={card.produtos[0].nome}
          />

          <span className={styles.nome}>
            {card.produtos[0].nome}
          </span>

          <strong className={styles.preco}>
            {card.produtos[0].preco}
          </strong>

        </div>

      )}



      {/* CARD COM 2 PRODUTOS */}
      {card.tipo === "duplo" && (

        <div className={styles.duplo}>

          {card.produtos.map((produto) => (

            <div
              key={produto.id}
              className={styles.duploItem}
            >

              <img
                src={produto.imagem}
                alt={produto.nome}
              />

              <div className={styles.info}>

                {produto.desconto && (

                  <span className={styles.desconto}>
                    {produto.desconto}
                  </span>

                )}

                <span className={styles.nome}>
                  {produto.nome}
                </span>

                <strong className={styles.preco}>
                  {produto.preco}
                </strong>

              </div>

            </div>

          ))}

        </div>

      )}




      {/* CARD COM 4 IMAGENS */}
      {card.tipo === "grade" && (

        <div className={styles.grade}>

          {card.produtos.map((produto) => (

            <div
              key={produto.id}
              className={styles.quadrado}
            >

              <img
                src={produto.imagem}
                alt=""
              />

            </div>

          ))}

        </div>

      )}

    </article>
  );
}

export default CardOferta;