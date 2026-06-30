import React from 'react';
import styles from './Header.module.css'
import MainHeader from './MainHeader'
import NavBar from './NavBar'


function Header() {

  return (
    <header className={styles.headerContainer}>
        <MainHeader/>
        <NavBar/>
    </header>
  )
}

export default Header
