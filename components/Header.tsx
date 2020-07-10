import Link from 'next/link'
import { Container } from '../components/Container'
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Link href="/">
          <a className={styles.logo}>blog.unresolved.xyz</a>
        </Link>
      </Container>
    </header>
  )
}

export { Header }
