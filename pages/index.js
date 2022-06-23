import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Banner from '../components/banner'
import About from '../components/about'
import Portfolio from '../components/portfolio'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Evan Martin</title>
        <link rel="icon" href="/gsd.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Banner />
        <About />
        <Portfolio />
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
