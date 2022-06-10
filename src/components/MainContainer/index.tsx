import Image from "next/image"
import logo from "../../../public/img/donapets-title.png";
import cat from "../../../public/img/cat.svg";
import dog from "../../../public/img/dog.svg";
import styles from './styles.module.scss';
import { Button } from "../Button";
import { FaDog, FaMoneyCheckAlt } from 'react-icons/fa';
import Link from "next/link";

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
                        <p>Deseja adotar ou doar uma quantia para ajudar ONGs protetoras de animais? Aqui você pode!</p>
                    </div>
                </div>
                <div className={styles.animalImageContainer}>
                    <Image src={cat} style={{ transform: 'scale(-1, 1)' }} />
                    <Image src={dog} style={{ transform: 'scale(1, -1)' }} />
                </div>
            </main>
            <section className={styles.sectionOptionsContainer}>
                <div className={styles.optionsSelectorDiv}>
                    <div>
                        <h3>Adoção de Animais</h3>
                        <p>Aqui você pode escolher o bichinho para fazer parte da sua família!</p>
                        <Button color="primary" icon={<FaDog />}>Adotar</Button>
                    </div>
                    <div className={styles.optionsDescriptionDiv}>
                        <h3>X</h3>
                    </div>
                    <div>
                        <h3>Doação para ONGs</h3>
                        <p>Você pode também, efetuar a doação de uma quantia em dinheiro para ajudar ONGs.</p>
                        <Button color="primary" icon={<FaMoneyCheckAlt />}>Doar</Button>                    
                    </div>
                </div>
            </section>
            <footer className={styles.footerContainer}>
                <p>Copyright <span>&copy;</span> Todos os direitos reservados. <Link href="https://github.com/nandobutzke"><a>Fernando Butzke</a></Link></p>
            </footer>
        </>
    );
}