import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    children: ReactNode;
    color?: string;
}

export function Button({ icon, color, children, ...rest }: ButtonProps) {
   return ( 
        <StyledButton color={color} {...rest}>
            {icon}{children}
        </StyledButton>
    );
}