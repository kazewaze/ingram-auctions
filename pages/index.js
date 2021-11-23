import { useState, useEffect } from 'react'
import HeadTag from '../components/_Common/HeadTag'
import styles from '../styles/pages/Home.module.css'
import Nav from '../components/Admin/Nav'
import Footer from '../components/_Common/Footer'
import Content from '../components/_Common/Content'

export default function Home() {
  const [user, setUser] = useState(null)

  // fetch data
  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (
    <div className={styles.container}>
      <HeadTag title="Ingram Auctioneer" />
      <Nav user={user} />
      <main className={styles.main}>
        <Content user={user} />
      </main>
      <Footer user={user} />
    </div>
  )
}