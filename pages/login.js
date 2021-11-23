import HeadTag from '../components/_Common/HeadTag'
import styles from '../styles/pages/Login.module.css'
import Footer from '../components/_Common/Footer'

export default function Login() {
  return (
    <div className={styles.container}>
      <HeadTag title="Ingram Auctioneer | Login" />
      <main className={styles.main}>
        <h1>Login</h1>
      </main>
      <Footer user={''} />
    </div>
  )
}