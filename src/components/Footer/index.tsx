import Link from "next/link";
import styles from "./styles.module.scss";

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p>Copyright <span>&copy;</span> Todos os direitos reservados. <Link href="https://github.com/nandobutzke"><a>Fernando Butzke</a></Link></p>
        </footer>
    );
}