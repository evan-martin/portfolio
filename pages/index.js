import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Banner from '../components/banner'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Evan Martin</title>
        <link rel="icon" href="/gsd.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Banner />
        <About />
        <Portfolio />

      </main>

      <footer className={styles.footer}>
        <Contact />
      </footer>
    </div>
  )
}
