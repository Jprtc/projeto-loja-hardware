import React, { useState} from 'react';
import { FiMenu, FiChevronDown, FiChevronRight, FiPlusCircle } from 'react-icons/fi';
import { FaChevronRight } from 'react-icons/fa';
import styles from './NavBar.module.css';

function NavBar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const departamentos = [
    "Hardware",
    "Periféricos",
    "Computadores",
    "Games",
    "Celular & Smartphone",
    "TV",
    "Áudio",
    "Projetores",
    "Espaço Gamer",
    "Escritório",
    "Casa Inteligente",
    "Gift Card",
    "Tablets, iPads e E-readers",
    "Câmeras e Drones",
    "Energia",
    "Conectividade",
    "Geek",
    "Eletrodomésticos",
    "Eletroportáteis",
    "Ar e Ventilação",
    "Segurança",
    "Automação",
    "Telefonia Fixa",
    "Robótica",
    "Roupas e Acessórios",
    "Mobilidade Elétrica",
    "Smart Home"
  ];

  const [isMaisOpen, setIsMaisOpen] = useState(false);
  const itensMais = [
    "Computadores",
    "Periféricos",
    "Tv",
    "Venda no KaBuM!"
  ];

  const formatLink = (texto) => {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, '-');
  }




  return (
    <div className={styles.headerNavRow}>
      <div className={styles.navRowContent}>
        
        <div 
          className={styles.departmentsContainer}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <button className={styles.departmentsBtn} type="button">
            <span>Departamentos</span>
            <FiChevronDown size={14} className={`${styles.chevronMain} ${isMenuOpen ? 'open' : ''}`} />
          </button>

          {isMenuOpen && (
            <ul className={styles.departmentsDropdownList}>
              {departamentos.map((item, index) => (
                <li key={index} className={styles.dropdownItem}>
                  <a href={`/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, '-')}`}>
                    <span>{item}</span>
                    <FiChevronRight size={14} className={styles.itemArrow} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.highlightLinks}>
          <a href="https://www.kabum.com.br/hotsite/cupons/" className={styles.linkCupom}>Cupons</a>
          <a href="https://www.kabum.com.br/promocao/maisvendidos" className={styles.linkMaisVendidos}>Mais Vendidos</a>
          <a href="https://www.kabum.com.br/promocao/HARDWAREKABUM" className={styles.linkSimple}>Hardware</a>
          <a href="https://www.kabum.com.br/pc-gamer-completo" className={styles.linkSimple}>PC Gamer</a>
          <div 
            className={styles.maisContainer}
            onMouseEnter={() => setIsMaisOpen(true)}
            onMouseLeave={() => setIsMaisOpen(false)}
            style={{ position: 'relative' }}
          >
            <button className={styles.linkSimpleBtn} type="button">
              Mais
              <FiChevronDown size={14} className={`${styles.chevronMais} ${isMaisOpen ? 'open' : ''}`} />
            </button>

            {isMaisOpen && (
              <ul className={styles.maisDropdownList}>
                {itensMais.map((item, index) => (
                  <li key={index} className={styles.maisDropdownItem}>
                    <a href={`/${formatLink(item)}`}>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <a href="https://www.kabum.com.br/monte-seu-pc" className={styles.kabumMontePcLink}>
          <div className={styles.kabumMontePcImg}>
            <img 
              src="https://static.kabum.com.br/conteudo/temas/001/header2.0/banner_monte_seu_pc_gta.png" 
              alt="Monte seu PC" 
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default NavBar;