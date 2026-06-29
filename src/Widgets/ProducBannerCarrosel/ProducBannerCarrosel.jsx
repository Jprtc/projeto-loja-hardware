import {useRef} from "react";
import styles from "./ProducBannerCarrosel.module.css";
import ProducCard from "../ProducBanner/ProducBanner.jsx";

  function ProducCarrosel ({ produtos }) {
    const carroselRef = useRef();

  const scrollLeft = () => {
    carroselRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    carroselRef.current.scrollBy({
      left : 300,
      behavior : "smooth",
    });
  };
  return(

      <div className={styles.container}>
          
          <button className={styles.leftButton} onClick={scrollLeft}>
           ❮
          </button>

      <div className={styles.carrosel} ref={carroselRef}>
          {produtos.map((produto,index) => (
            <ProducCard
              key={produto.id}
              {...produto}

            />

          ))}

      </div>

        <button className={styles.rightButton} onClick={scrollRight}>
          ❯
        </button>
      
      </div>

  );
};

export default ProducCarrosel;
