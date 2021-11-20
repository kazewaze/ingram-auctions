import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'

const fetch = (...args) => fetch(...args).then(res => res.json())

function Profile() {
  const { data, error } = useSWR('/api/user', fetch);
  console.log(data);
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ingram Auctioneer</title>
        <meta name="author" description="Kaycee Ingram" />
        <meta name="description" content="Official Website of Auctioneer Ronnie Ingram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        { Profile() }

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}