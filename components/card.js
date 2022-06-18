import Link from "next/link";
import Image from "next/image";
import cls from "classnames";

import styles from "../styles/card.module.css";

const Card = (props) => {
    return (
        <Link href={props.href}>
            <a className={styles.cardLink}>
                <div className={cls("glass", styles.container)}>
                    <div className={styles.cardHeaderWrapper}>
                        <h2 className={styles.cardHeader}>{props.name}</h2>
                    </div>
                    <div className={styles.cardImageWrapper}>
                        <Image
                            className={styles.cardImage}
                            src={props.imgUrl}
                            width={360}
                            height={260}
                            alt={props.name}
                        />
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card;