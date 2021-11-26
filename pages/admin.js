import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'

import styles from '../styles/pages/Admin.module.css'
import Nav from '../components/Admin/Nav'
import Denied from '../components/Admin/Denied'
import HeadTag from '../components/_Common/HeadTag'
import Content from '../components/_Common/Content'
import Footer from '../components/_Common/Footer'

export default function Admin() {
  const [user, setUser] = useState(null)
//  const router = useRouter()

  // fetch user data
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
      <main className={styles.main}>
        <Nav user={user} />
        <Content user={user} />
        <Footer user={user} />
      </main>
    </div>
  )
}