import Image from "next/image"
import logo from "../../../public/img/donapets-title.png";
import cat from "../../../public/img/cat.svg";
import dog from "../../../public/img/dog.svg";
import styles from './styles.module.scss';
import { Button } from "../Button";
import { FaDog, FaMoneyCheckAlt } from 'react-icons/fa';

export function MainContainer() {
    return (
        <>
            <main className={styles.mainContainer}>
                <div className={styles.logoContainer}>
                    <div>
                        <Image src={logo} />
                    </div>
                    <h3>PORTAL DE ADOÇÃO DE ANIMAIS ONLINE</h3>
                    <div className={styles.textContainer}>
                        <p>Se você tem um animal para adoção, ou deseja encontrar o companheiro perfeito, está no lugar certo!</p>
                    </div>
                </div>
                <div className={styles.animalImageContainer}>
                    <Image src={cat} style={{ transform: 'scale(-1, 1)' }} />
                    <Image src={dog} style={{ transform: 'scale(1, -1)' }} />
                </div>
            </main>
            <div className={styles.buttonsContainer}>
                <Button color="primary" icon={<FaDog />}>Adotar</Button>
                <Button color="primary" icon={<FaMoneyCheckAlt />}>Doar</Button>
            </div>
        </>
    );
}