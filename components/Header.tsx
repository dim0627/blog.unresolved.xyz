import Link from 'next/link'
import { Container } from '../components/Container'
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>blog.unresolved.xyz</a>
      </Link>
    </header>
  )
}

export { Header }
