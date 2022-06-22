import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Card from '../components/card'
import styles from '../styles/Home.module.css'
import CoffeeStoresData from "../data/coffee-stores.json"

export async function getStaticProps(context) {
  fetch("https://api.foursquare.com/v2/venues/search?11=43.65267326999575,-79.39545615725015&query=coffeestores&client_id=X00XAXFEIOUKZUOUNFUZKKZZPK3VYU105DH1LOROJAC5D5A0&client_secret=AADM2KMGD3ZYSJ4J0VXXWIT54DFOWOONXZXVB4LZIDEEFNRW&v=20210525")
    .then(response => response.json())
    .then(data => console.log(data))
  return {
    props: {
      CoffeeStores: CoffeeStoresData
    },
  }
}

export default function Home(props) {
  function handleOnClickButtonClick() {

  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Banner buttonText="View Stores Near By" handleOnClick={handleOnClickButtonClick} />
      </main>
      <div className={styles.heroImage}>
        <Image
          src="/static/hero-image.png"
          width={700}
          height={400}
          alt="hero image"
        />
      </div>
      <div className={styles.sectionWrapper}>
        <h2 className={styles.heading2}>Stores near me</h2>
        <div className={styles.cardLayout}>
          {
            props.CoffeeStores.length > 0 && props.CoffeeStores.map((coffee) => {
              return (
                <Card
                  key={coffee.id}
                  name={coffee.name}
                  imgUrl={
                    coffee.imgUrl ||
                    "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  }
                  href={`/coffee-store/${coffee.id}`}
                  className={styles.card}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
