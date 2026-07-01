import styles from "./ListaCategorias.module.css";
import categorias from "../../Data/categorias";
import Categoria from "../Categoria/Categoria";

function ListaCategorias() {
  return (
    <section className={styles.container}>
      {categorias.map((categoria) => (
        <Categoria
          key={categoria.id}
          categoria={categoria}
        />
      ))}
    </section>
  );
}

export default ListaCategorias;