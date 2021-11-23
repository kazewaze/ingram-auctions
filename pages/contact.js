import HeadTag from '../components/_Common/HeadTag'
import styles from '../styles/pages/Contact.module.css'
import Footer from '../components/_Common/Footer'

export default function Contact() {
  return (
    <div className={styles.container}>
      <HeadTag title="Ingram Auctioneer | Contact" />
      <main className={styles.main}>
        <h1>Contact</h1>
      </main>
      <Footer user={''} />
    </div>
  )
}