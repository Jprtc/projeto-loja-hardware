import styles from "./ListaCards.module.css";
import cards from "../../Data/cards";
import CardOferta from "../CardOferta/CardOferta";

function ListaCards() {
  return (
    <section className={styles.container}>
      {cards.map((card) => (
        <CardOferta key={card.id} card={card} />
      ))}
    </section>
  );
}

export default ListaCards;
