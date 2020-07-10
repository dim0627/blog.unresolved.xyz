import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import styles from './Header.module.css';

const Header = () => (
  <Container>
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>blog.unresolved.xyz</a>
      </Link>
    </header>
  </Container>
);

export { Header };
