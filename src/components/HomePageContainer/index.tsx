import styles from './styles.module.scss';
import { AnimalsImageContainer } from "./AnimalsImageContainer";
import { OptionsContainer } from "./OptionsContainer";
import { Logo } from "../Logo";

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
                <AnimalsImageContainer />
            </main>
            <OptionsContainer />
        </>
    );
}