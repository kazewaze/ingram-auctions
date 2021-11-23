import styles from '../../styles/components/Admin/Avatar.module.css'

export default function Avatar({ user }) {
  return <img className={styles.Avatar} src={user.avatar ? user.avatar : "/gelloh.svg"} alt={user.name} width={65} height={65} />
}