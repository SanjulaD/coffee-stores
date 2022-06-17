import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'

export default function Home() {
  function handleOnClickButtonClick() {

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Coffee Connoisseur</h1>
      </main>
      <Banner buttonText="View Stores Near By" handleOnClick={handleOnClickButtonClick} />
      <div className={styles.heroImage}>
        <Image
          src="/static/hero-image.png"
          width={700}
          height={400}
          alt="hero image"
        />
      </div>
    </div>
  )
}
