

import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 25px;

    color: var(--${(props => props.color)});
    border-color: var(--${(props => props.color)});
    background: none;
    border-radius: 5px;
    
    padding: 0.75rem;
    
    svg {
        font-size: 30px
    }

    transition: 0.25s all;

    &:hover {
        color: var(--brown-900);
        background-color: var(--${(props => props.color)});
        border-color: var(--brown-900);
    }
    
`;