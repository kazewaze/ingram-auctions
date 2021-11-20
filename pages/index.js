import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/Image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [user, setUser] = useState(null)

  // fetch data
  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  // global loading state
  if (!user) return <div>ERROR... NO USER!</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>Ingram Auctioneer</title>
        <meta name="author" description="Kaycee Ingram" />
        <meta name="description" content="Official Website of Auctioneer Ronnie Ingram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={user} />
      <main className={styles.main}>
        <Content user={user} />
      </main>
      <Footer user={user} />
    </div>
  )
}

// child components

function Navbar({ user }) {
  return (
    <div>
      <Avatar user={user} />
    </div>
  )
}

function Content({ user }) {
  return <h1 className={styles.title}>Welcome back, {user.name}</h1>
}

function Avatar({ user }) {
  return <Image src={user.avatar ? user.avatar : "/gelloh.svg"} alt={user.name} width={100} height={100} />
}

function Footer({ user }) {
  return (
    <footer className={styles.footer}>
      <a
        href="https://kayceeingram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.logo}>
          <Image src="/gelloh.svg" alt="Vercel Logo" width={35} height={35} />
        </span>
      </a>
      <p>Copyright © 2021 Ingram Auctioneer</p>
    </footer>
  )
}