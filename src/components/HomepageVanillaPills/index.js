import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


export default function HomepageVanillaPills(){
  return (
    <div className={styles.homeIntro}>
      <h1 className={styles.titulo}>Vanilla Pills</h1>
      <h3>Un recurso para el desarrollo de aplicaciones web basadas en Vanilla JS</h3>
      <img src="img/logo.svg" alt="Vanilla Pills" width={'200px'}></img>
    </div>
  );
}