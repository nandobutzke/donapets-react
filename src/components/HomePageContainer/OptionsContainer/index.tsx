import { FaDog, FaMoneyCheckAlt } from "react-icons/fa";
import { Button } from "../../Button";
import styles from "./styles.module.scss";

export function OptionsContainer() {
    return (
        <section className={styles.sectionOptionsContainer}>
            <div className={styles.optionsSelectorDiv}>
                <div>
                    <h3>Adoção de Animais</h3>
                    <p>Aqui você pode escolher o bichinho para fazer parte da sua família!</p>
                    <Button color="primary" icon={<FaDog />}>Adotar</Button>
                </div>
                <div className={styles.optionsSeparatorDiv}>
                    <h3>X</h3>
                </div>
                <div>
                    <h3>Doação para ONGs</h3>
                    <p>Você pode também, efetuar a doação de uma quantia em dinheiro para ajudar ONGs.</p>
                    <Button color="primary" icon={<FaMoneyCheckAlt />}>Doar</Button>                    
                </div>
            </div>
        </section>
    );
}