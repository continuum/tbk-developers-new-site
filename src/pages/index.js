import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className="TBK-hero">
      <div className="TBK-hero-item-left">
        <p className="hero-title">
          Accede a la <span>documentación</span> y{" "}
          <span>herramientas de integración</span> de nuestros productos.
        </p>
        <p className="hero-text">
          Te invitamos a conocer los diferentes servicios que tenemos para ti.
        </p>
        <div className="d-flex">
          <button className="TBK-button-full mr-24 ">Get Started</button>
          <button className="TBK-button">Conoce nuestros productos</button>
        </div>
      </div>
      <div className="TBK-hero-item-right">
        <img src="img/webpay.png" alt="" />
        <div></div>
      </div>
      <div className="TBK-hero-item-full">
        <div className="TBk-mini-card">
          <img src="img/speed.png" alt="" />
          <div className="mini-text-content">
            <p className="mini-title m-0">Estados del servicio</p>
            <p className="mini-text">Estatus de nuestros sistemas</p>
            <a className="mini-link" href="#">
              Ver más &gt;
            </a>
          </div>
        </div>
        <div className="TBk-mini-card mini-red">
          <img src="img/paper.png" alt="" />
          <div className="mini-text-content">
            <p className="mini-title m-0">SDKs</p>
            <p className="mini-text">Configuración de SDK</p>
            <a className="mini-link" href="#">
              Ver más &gt;
            </a>
          </div>
        </div>
        <div className="TBk-mini-card">
          <img src="img/Vector.png" alt="" />
          <div className="mini-text-content">
            <p className="mini-title m-0">Lista de integradores</p>
            <p className="mini-text">Contacta a nuestros integradores</p>
            <a className="mini-link" href="#">
              Ver más &gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
