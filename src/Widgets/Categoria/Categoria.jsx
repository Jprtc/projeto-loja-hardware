import styles from "./Categoria.module.css";

function Categoria({ categoria }) {
  return (
    <a
      href={categoria.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.categoria}
      aria-label={categoria.nome}
    >
      <div className={styles.icone}>
        <img
          src={categoria.imagem}
          alt={categoria.nome}
        />
      </div>

      <span className={styles.nome}>
        {categoria.nome}
      </span>
    </a>
  );
}

export default Categoria;