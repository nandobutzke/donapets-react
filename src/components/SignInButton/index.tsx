import { StyledButton } from "./styles";
import { FaGithub } from 'react-icons/fa';
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function SignInButton() {
    const { data: session, status } = useSession();

    return status === "authenticated" ? (
        <StyledButton type="button" onClick={() => signOut()}>
            <Image 
                src={session.user.image} 
                width={30} 
                height={30} 
            />
            {session.user.name}
        </StyledButton>
    ) 
    : (
        <StyledButton type="button" onClick={() => signIn('github')}>
            <FaGithub />Acessar
        </StyledButton>
    )
}