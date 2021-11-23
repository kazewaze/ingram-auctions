import HeadTag from '../components/_Common/HeadTag'
import styles from '../styles/pages/Home.module.css'
import Footer from '../components/_Common/Footer'

export default function About() {
  return (
    <div className={styles.container}>
      <HeadTag title="Ingram Auctioneer | About" />
      <main className={styles.main}>
        <h1>About</h1>
      </main>
      <Footer user={''} />
    </div>
  )
}