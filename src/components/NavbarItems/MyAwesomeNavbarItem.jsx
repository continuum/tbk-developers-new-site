import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import './Navbar.scss';

export default function FeMyAwesomeNavbarItemature() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <div className="TBK-header">
      <div className="TBK-header-top">
        <img className="TBK-header-img" src="./img/tbk.png" alt="tbk logo" />
        <input className="TBK-h-input" type="text" name="" placeholder=" Buscar..." />
        <button id="dark-mode" className="circle-btn mr-20" onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}>
          <img src="img/moon.png" alt="moon" />
        </button>
        <button className="circle-btn">
          <img src="img/bell.png" alt="bell" />
        </button>
        <a href="#" className="TBK-link mx-50">Crear cuenta</a>
        <a href="#" className="TBK-button">Crear cuenta</a>
      </div>
      <div className="TBK-header-bottom">
        <a href="#" className="item-menu">Productos</a>
        <a href="#" className="item-menu">Documentación</a>
        <a href="#" className="item-menu">Referencia API</a>
        <a href="#" className="item-menu">Novedades</a>
        <a href="#" className="item-menu">Contáctanos</a>
      </div>
    </div>
  );
}