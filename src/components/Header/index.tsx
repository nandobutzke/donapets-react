import Image from "next/image";
import logo from '../../../public/img/donapets-title.png';
import { ActiveLink } from "../ActiveLink";

import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <div>
               <Image src={logo} />
            </div>
            <nav>
                <ul>
                    <li>
                        <ActiveLink href="/" activeClassName="active">
                            <a>Home</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/adoption" activeClassName="active">
                            <a>Adoção</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/cadastrar-animal" activeClassName="active">
                            <a>Cadastrar Animal</a>
                        </ActiveLink>
                    </li>
                    <li>
                        |
                    </li>
                    <li>
                        <ActiveLink href="/login" activeClassName="active">
                            <a>Acessar</a>
                        </ActiveLink>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}