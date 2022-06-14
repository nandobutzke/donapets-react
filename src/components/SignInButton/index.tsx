import { ReactNode } from "react";
import { StyledButton } from "./styles";
import { FaGoogle } from 'react-icons/fa';

interface SignInButtonProps {
    children: ReactNode;
}

export function SignInButton({ children }: SignInButtonProps) {
    return (
        <StyledButton type="button"><FaGoogle />{children}</StyledButton>
    );
}