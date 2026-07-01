import { useRef, useState, useEffect } from "react";
import styles from "./ProducBannerCarrosel.module.css";
import ProducCard from "../ProducBanner/ProducBanner.jsx";
import foguinho from "../../assets/foguinho.svg";

function ProducCarrosel({ produtos }) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };


  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = 260; 
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(newIndex, produtos.length - 1));
    };

    carousel.addEventListener("scroll", handleScroll, { passive: true });
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [produtos.length]);

  return (
    
    <div className={styles.container}>

      <div className={styles.cabeca}>

      <img className={styles.fogo} src={foguinho} width={30} height={30} />
      <h2 className={styles.titulo}>Esquenta julho gamer</h2>

      </div>

      <button 
        className={styles.leftButton} 
        onClick={scrollLeft}
        aria-label="Anterior"
      >
        ❮
      </button>

      <div className={styles.carrosel} ref={carouselRef}>
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.cardWrapper}>
            <ProducCard {...produto} />
          </div>
        ))}
      </div>

      <button 
        className={styles.rightButton} 
        onClick={scrollRight}
        aria-label="Próximo"
      >
        ❯
      </button>

    </div>
  );
}

export default ProducCarrosel;
