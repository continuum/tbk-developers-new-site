import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className="section-pay">
      <h2 className="section-title">
        Encuentra el producto indicado para tus necesidades de pago
      </h2>
      <div className="pay-cards-container">
        <div className="pay-card j-self-end"></div>
        <div className="pay-card"></div>
        <div className="pay-card j-self-end"></div>
        <div className="pay-card"></div>
      </div>
      <a className="link-pay-info" href="">
        Ver todos los productos disponibles
      </a>
    </section>
  );
}
