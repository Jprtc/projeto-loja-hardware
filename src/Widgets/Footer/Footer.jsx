import React, { useState } from 'react';
import styles from './Footer.module.css';
import logoKabum from '../../assets/kabumlogo.png';

import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedinIn, 
  FaTiktok,
  FaApple,
  FaGooglePlay
} from 'react-icons/fa';

export default function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className={styles.kabumFooter}>
      <section className={styles.newsletterBar}>
        <div className={styles.newsletterContainer}>
          <span className={styles.newsletterTitle}><strong>KaBuM! News</strong> Receba ofertas</span>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Digite seu nome" required />
            <input type="email" placeholder="Digite seu e-mail" required />
            <button type="submit">CADASTRAR</button>
          </form>
        </div>
      </section>

      <div className={styles.verMaisBar} onClick={toggleMenu}>
        <span>{isExpanded ? 'VER MENOS ▴' : 'VER MAIS ▾'}</span>
      </div>

      <section className={`${styles.expandedMenu} ${isExpanded ? styles.showMenu : ''}`}>
        <div className={styles.expandedGrid}>
          <div className={styles.expColumn}><ul><li><a href="#">Regulamentos</a></li><li><a href="#">Cupons</a></li><li><a href="#">Frete Grátis</a></li><li><a href="#">Baixe o App</a></li></ul></div>
          <div className={styles.expColumn}><ul><li><a href="#">Monte seu PC</a></li><li><a href="#">Oferta Ninja</a></li><li><a href="#">Seja Prime</a></li><li><a href="#">Gift Card KaBuM!</a></li></ul></div>
          <div className={styles.expColumn}><ul><li><a href="#">Black Friday</a></li><li><a href="#">Setembro Lendário</a></li><li><a href="#">Julho Gamer</a></li><li><a href="#">Mega Maio</a></li></ul></div>
          <div className={styles.expColumn}><ul><li><a href="#">Mulheres no Game</a></li></ul></div>
          <div className={styles.expColumn}><ul><li><a href="#">Hardware</a></li><li><a href="#">Celulares e Smartphones</a></li><li><a href="#">Periféricos</a></li><li><a href="#">Teclado e Mouse</a></li></ul></div>
          <div className={styles.expColumn}><ul><li><a href="#">Computadores</a></li><li><a href="#">Placa de Vídeo</a></li><li><a href="#">Monitores</a></li><li><a href="#">Controles e Games</a></li></ul></div>
          <div className={styles.expColumn}><ul><li><a href="#">Áudio</a></li><li><a href="#">TV</a></li><li><a href="#">Notebook</a></li><li><a href="#">Eletroportáteis</a></li></ul></div>
          <div className={styles.expColumn}><ul><li><a href="#">Smart Home</a></li><li><a href="#">Ferramentas</a></li><li><a href="#">Ar e Ventilação</a></li><li><a href="#">Segurança</a></li></ul></div>
          <div className={styles.expColumn}><ul><li><a href="#">Conectividade</a></li><li><a href="#">Processadores</a></li><li><a href="#">Geek</a></li><li><a href="#">Espaço Gamer</a></li></ul></div>
          <div className={styles.expColumn}><ul><li><a href="#">Serviços Digitais</a></li><li><a href="#">Câmeras e Drones</a></li><li><a href="#">Escritório</a></li><li><a href="#">Energia</a></li></ul></div>
        </div>
      </section>

      <section className={styles.footerContent}>
        <div className={styles.contentColumn}>
          <h3>Atendimento</h3>
          <p>08:00 às 20:00 - Segunda a Sexta, horário de Brasília</p>
          <button className={styles.btnFaleConosco}>✉ FALE CONOSCO</button>
        </div>

        <div className={styles.contentColumn}>
          <h3>Vendas Pessoa Jurídica</h3>
          <p>08:00 às 20:00 - Segunda a Sexta, horário de Brasília</p>
          <p className={styles.subText}>
            Fale conosco via <a href="#">chat</a> ou pelo email: <br />
            <span className={styles.emailText}>vendas@kabum.com.br</span>
          </p>
        </div>

        <div className={styles.contentColumn}>
          <h3>Loja Física</h3>
          <p><strong>Loja 1:</strong> Rua Amazonas da Silva, 27 - Vila Guilherme - São Paulo/SP 02051-000</p>
          <p className={styles.subText}>09:00 às 22:00 - Segunda a Sábado;<br />12:00 às 20:00 - Domingos e feriados.</p>
          <p className={styles.storeSpacing}><strong>Loja 2:</strong> Galeria Magalu no Conjunto Nacional - Rua Alameda Santos nº 2152, Jardim Paulista, São Paulo/SP CEP: 01419-101</p>
          <p className={styles.subText}>09:00 às 21:00 - Segunda a Sábado;<br />10:00 às 18:00 - Domingos e feriados.</p>
        </div>

        <div className={styles.linksGrid}>
          <div className={styles.linkColumn}>
            <ul>
              <li><a href="#">Sobre o KaBuM!</a></li>
              <li><a href="#">Blog KaBuM!</a></li>
              <li><a href="#">KaBuM! Ads</a></li>
              <li><a href="#">Afiliados KaBuM!</a></li>
              <li><a href="#">Venda no KaBuM!</a></li>
              <li><a href="#">Políticas do Site e Marketplace</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <ul>
              <li><a href="#">Políticas de Cookies</a></li>
              <li><a href="#">Políticas de Privacidade</a></li>
              <li><a href="#">Proteção de Marcas</a></li>
              <li><a href="#">Código de Conduta e Ética</a></li>
              <li><a href="#">Código de Conduta e Ética de Fornecedores</a></li>
              <li><a href="#">Código de Defesa do Consumidor</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <ul>
              <li><a href="#">Exerça seus Direitos de Privacidade</a></li>
              <li><a href="#">Segurança & Privacidade</a></li>
              <li><a href="#">Canal Confidencial</a></li>
              <li><a href="#">Garantia Estendida e Roubo + Quebra Accidental</a></li>
              <li><a href="#">Relatórios</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <ul>
              <li><a href="#">Acessibilidade</a></li>
              <li><a href="#">Mapa do Site</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.socialAndAppsBar}>
        <div className={styles.centeredBarContainer}>
          <div className={styles.socialGroup}>
            <span>Mídias sociais:</span>
            <div className={styles.iconsRow}>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter X"><FaTwitter /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
            </div>
          </div>
          
          <div className={styles.appsGroup}>
            <span>Baixe os aplicativos:</span>
            <div className={styles.appButtons}>
              <a href="#" className={styles.btnAppApple}>
                <FaApple className={styles.appIconApple} /> APP STORE
              </a>
              <a href="#" className={styles.btnAppGoogle}>
                <FaGooglePlay className={styles.appIconGoogle} /> GOOGLE PLAY
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.legalBottom}>
        <div className={styles.brandLogos}>
          <img 
            src={logoKabum} 
            alt="KaBuM! Logo" 
            className={styles.kabumLogoImg}
          />
          <p>Uma empresa do grupo <span className={styles.magaluBrand}>Magalu</span></p>
        </div>
        <div className={styles.copyrightContainer}>
          <p className={styles.copyrightText}>
            Rua Carlos Gomes, 1321 - 9º andar - Centro, Limeira / SP - CEP: 13480-010 | "KaBuM!" é uma marca registrada de KABUM S.A | CNPJ: 05.570.714/0001-59 | Todos os direitos reservados. Os preços anunciados neste site ou via e-mail promocional podem ser alterados sem prévio aviso. O KaBuM! não é responsável por erros descritivos. As fotos contidas nesta página são meramente ilustrativas do produto e podem variar de acordo com o fornecedor/lote do fabricante. Este site trabalha 100% em criptografia SSL. <a href="#" className={styles.legalLink}>Clique aqui e veja as políticas de nossa empresa.</a>
          </p>
        </div>
      </section>
    </footer>
  );
}