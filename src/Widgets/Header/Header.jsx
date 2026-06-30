import React from 'react';
import styles from './Header.module.css'
import MainHeader from './MainHeader'
import NavBar from './NavBar'


function Header() {

  return (
    <header className={styles.headerContainer}>
 
  <a href="/" className={styles.logoLink}>
    <img 
      src="https://static.kabum.com.br/conteudo/icons/logo.svg" 
      alt="KaBuM! Logo" 
      className={styles.logoImg}
    />
  </a>

  
  <div className={styles.rightContent}>
    <MainHeader />
    <NavBar />
  </div>
</header>
  )
}

export default Header
