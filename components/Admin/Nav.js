// import Link from 'next/Link'
import Avatar from './Avatar'
import styles from '../../styles/components/Admin/Nav.module.css'

export default function Nav({ user }) {
  return (
    <div className={styles.Nav}>
      <div className={styles.Nav__User}>
        <Avatar user={user} />
        <p className={styles.Nav__User__Name}>{user.full_name}</p>
      </div>
      <button className={styles.Nav__LogoutBtn}>Logout</button>
    </div>
  )
}