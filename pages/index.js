// import { useState, useEffect } from 'react'
import HeadTag from '../components/_Common/HeadTag'
import styles from '../styles/pages/Home.module.css'
import Nav from '../components/_Common/Nav'
import Footer from '../components/_Common/Footer'
// import Content from '../components/_Common/Content'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadTag title="Ingram Auctioneer" />
      <main className={styles.main}>
        <Nav />
        <h1>Welcome</h1>
        <Footer user={''} />
      </main>
    </div>
  )
}