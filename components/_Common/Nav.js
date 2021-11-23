import Link from 'next/link'
import styles from '../../styles/components/_Common/Nav.module.css'

export default function Navbar({ user }) {
  return (
    <div>
      <ul>
        <Link href="/">
          <a></a>
        </Link>
        <Link href="/">
          <a></a>
        </Link>
        <Link href="/">
          <a></a>
        </Link>
      </ul>
    </div>
  )
}