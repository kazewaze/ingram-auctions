import { useState, useEffect } from 'react'

import styles from '../styles/pages/Admin.module.css'
import Nav from '../components/Admin/Nav'
import Denied from '../components/Admin/Denied'
import HeadTag from '../components/_Common/HeadTag'
import Content from '../components/_Common/Content'
import Footer from '../components/_Common/Footer'

export default function Admin() {
  const [user, setUser] = useState(null)

  // fetch data
  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  // global loading state
  if (!user) return <Denied />

  return (
    <div className={styles.container}>
      <HeadTag title="Ingram Auctioneer | Admin" />
      <Nav user={user} />
      <main className={styles.main}>
        <Content user={user} />
      </main>
      <Footer user={user} />
    </div>
  )
}