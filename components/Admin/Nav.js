import Image from 'next/image'
import Avatar from './Avatar'
import styles from '../../styles/components/Admin/Nav.module.css'

export default function Nav({ user }) {
  return (
    <nav className={styles.Nav}>
      <div className={styles.Nav__Left}>
        <Image className={styles.Logo} src={"/Logo.svg"} height={"55px"} width={"155px"} alt={"Ingram Auctioneer"} />
      </div>
      <div className={styles.Nav__Right}>
        <div className={styles.Nav__Right__User}>
          <Avatar user={user} />
          <p className={styles.Nav__Right__UserName}>{user.full_name}</p>
        </div>
        <button className={styles.Nav__Right__LogoutBtn}>Logout</button>
      </div>
    </nav>
  )
}