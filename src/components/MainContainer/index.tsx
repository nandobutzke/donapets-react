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
                    <h3>PORTAL DE ADOÇÃO E DOAÇÃO DE ANIMAIS ONLINE</h3>
                    <div className={styles.textContainer}>
                        <p>Tem um animal para adoção, ou deseja doar uma quantia para ajudar ONGs protetoras de animais? Aqui você pode!</p>
                    </div>
                </div>
                <div className={styles.animalImageContainer}>
                    <Image src={cat} style={{ transform: 'scale(-1, 1)' }} />
                    <Image src={dog} style={{ transform: 'scale(1, -1)' }} />
                </div>
            </main>
            <div className={styles.footerMainContainer}>
                <div>
                    <Button color="yellow-600" icon={<FaDog />}>Adotar</Button>
                    <Button color="yellow-600" icon={<FaMoneyCheckAlt />}>Doar</Button>
                </div>
                <div>
                    <h4>R$ <span>4.323,00</span> doados!</h4>
                </div>
            </div>
        </>
    );
}