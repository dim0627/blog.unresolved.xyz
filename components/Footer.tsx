import React from 'react';
import { Container } from './Container';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <ul className={styles.featuredList}>
        <li className={styles.featuredItem}>
          Hosted on
          {' '}
          <a href="https://vercel.com/" className={styles.link}>Vercel</a>
        </li>
        <li className={styles.featuredItem}>
          Made with
          {' '}
          <a href="https://nextjs.org/" className={styles.link}>Next.js</a>
          {' '}
          💖
        </li>
        <li className={styles.featuredItem}>
          Designed by
          {' '}
          <a href="https://yet.unresolved.xyz" className={styles.link}>Daisuke Tsuji</a>
        </li>
      </ul>
    </Container>
  </footer>
);

export { Footer };
