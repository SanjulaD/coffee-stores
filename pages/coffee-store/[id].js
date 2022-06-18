import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import cls from 'classnames'
import { useRouter } from "next/router"
import CoffeeStoresData from "../../data/coffee-stores.json"
import styles from './../../styles/coffee-store.module.css'

export async function getStaticProps(staticProps) {
    const params = staticProps.params
    console.log(params)
    return {
        props: {
            CoffeeStore: CoffeeStoresData.find((CoffeeStore) => {
                return CoffeeStore.id.toString() === params.id
            })
        },
    }
}

export async function getStaticPaths() {
    const paths = CoffeeStoresData.map(CoffeeStore => {
        return {
            params: { id: CoffeeStore.id.toString() }
        }
    })
    return {
        paths,
        fallback: true,
    }
}

const CoffeeStore = (props) => {

    const { id, name, voting, imgUrl, neighbourhood, address } = props.CoffeeStore;

    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    function handleUpvoteButton() {
        console.log("clicked")
    }
    return (
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
                <meta name="description" content={`${name} coffee store`} />
            </Head>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>{name}</h1>
                    </div>
                    <Image
                        src={
                            imgUrl ||
                            "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                        }
                        width={600}
                        height={360}
                        className={styles.storeImg}
                        alt={name}
                    />
                </div>

                <div className={cls("glass", styles.col2)}>
                    {address && (
                        <div className={styles.iconWrapper}>
                            <Image
                                src="/static/icons/places.svg"
                                width="24"
                                height="24"
                                alt="places icon"
                            />
                            <p className={styles.text}>{address}</p>
                        </div>
                    )}
                    {neighbourhood && (
                        <div className={styles.iconWrapper}>
                            <Image
                                src="/static/icons/nearMe.svg"
                                width="24"
                                height="24"
                                alt="near me icon"
                            />
                            <p className={styles.text}>{neighbourhood}</p>
                        </div>
                    )}
                    <div className={styles.iconWrapper}>
                        <Image
                            src="/static/icons/star.svg"
                            width="24"
                            height="24"
                            alt="star icon"
                        />
                        <p className={styles.text}>12</p>
                    </div>

                    <button className={styles.upvoteButton} onClick={handleUpvoteButton} >
                        Up vote!
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CoffeeStore