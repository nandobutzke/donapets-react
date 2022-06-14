import { ActiveLink } from "../ActiveLink";
import { Logo } from "../Logo";
import { SignInButton } from "../SignInButton";

import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <Logo />
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
                        |
                    </li>
                    <li>
                        <SignInButton>Acessar</SignInButton>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}