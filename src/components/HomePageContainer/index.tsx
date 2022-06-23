import styles from './styles.module.scss';
import { Logo } from "../Logo";
import { FaDog, FaMoneyCheckAlt } from "react-icons/fa";
import { Button } from "../Button";
import Image from "next/image";
import cat from "../../../public/img/cat.svg";
import dog from "../../../public/img/dog.svg";

export function MainContainer() {
    return (
        <>
            <main className={styles.mainContainer}>
                <div className={styles.logoContainer}>
                    <Logo />
                    <h3>PORTAL DE ADOÇÃO E DOAÇÃO DE ANIMAIS ONLINE</h3>
                    <div className={styles.textContainer}>
                        <p>Deseja adotar ou doar uma quantia para ajudar ONGs protetoras de animais? Aqui você pode!</p>
                    </div>
                </div>
                <div className={styles.animalImageContainer}>
                    <Image src={cat} style={{ transform: 'scale(-1, 1)' }} />
                    <Image src={dog} style={{ transform: 'scale(1, -1)' }} />
                </div>
            </main>
            <section className={styles.sectionOptionsContainer}>
                <Button color="primary" icon={<FaDog />}>Adotar</Button>
                <Button color="primary" icon={<FaMoneyCheckAlt />}>Doar</Button>
            </section>
        </>
    );
}