import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import './Navbar.scss';

export default function FeMyAwesomeNavbarItemature() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <div className="TBK-header">
      <div className="TBK-header-bottom">
        <a href="#" className="item-menu">Productos</a>
        <a href="#" className="item-menu">Documentación</a>
        <a href="/tbk-developers-new-site/docs/WebpayPlus/api-transaccion-simple-webpay-plus" className="item-menu">Referencia API</a>
        <a href="#" className="item-menu">Novedades</a>
        <a href="#" className="item-menu">Contáctanos</a>
      </div>
    </div>
  );
}