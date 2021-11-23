import Head from 'next/head'

export default function HeadTag({ title }) {
  return (
    <Head>
      <title>{ title }</title>
      <meta name="author" description="Kaycee Ingram" />
      <meta name="description" content="Official Website of Auctioneer Ronnie Ingram" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}