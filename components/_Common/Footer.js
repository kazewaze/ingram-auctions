import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/components/_Common/Footer.module.css'

export default function Footer({ user }) {
  return (
    <footer className={styles.footer}>
      <a
        href="https://kayceeingram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.logo}>
          <Image src="/gelloh.svg" alt="Vercel Logo" width={35} height={35} />
        </span>
      </a>
      <div className={styles.footer__pageLinks}>
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </div>
      <p>Copyright © 2021 Ingram Auctioneer</p>
    </footer>
  )
}