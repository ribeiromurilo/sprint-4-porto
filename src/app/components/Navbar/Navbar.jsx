'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../Button/Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='/img/logo.png' alt='Logo' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link href='/CadastroBike' className='nav-links' onClick={closeMobileMenu}>
                Cadastro Bike
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/Vistoria' className='nav-links' onClick={closeMobileMenu}>
                Vistoria
              </Link>
            </li>
            <li className='nav-item'>
              <Button buttonStyle='btn--outline' onClick={closeMobileMenu}>
                Entrar
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;
