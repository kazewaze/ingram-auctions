import styles from '../../styles/components/_Common/Content.module.css'

export default function Content({ user }) {
  return <h1 className={styles.title}>Welcome back, {user.name}</h1>
}