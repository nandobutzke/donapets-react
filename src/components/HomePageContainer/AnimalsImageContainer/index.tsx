import Image from "next/image";
import cat from "../../../../public/img/cat.svg";
import dog from "../../../../public/img/dog.svg";
import styles from "./styles.module.scss";

export function AnimalsImageContainer() {
    return (
        <div className={styles.animalImageContainer}>
            <Image src={cat} style={{ transform: 'scale(-1, 1)' }} />
            <Image src={dog} style={{ transform: 'scale(1, -1)' }} />
        </div>
    );
}