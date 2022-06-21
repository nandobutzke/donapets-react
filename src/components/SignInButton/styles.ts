import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.50rem;

    background: #111;
    border: none;
    border-radius: 3rem;

    padding: 1rem 1.75rem 1rem 1.75rem;

    font-weight: 300;
    color: var(--white);

    svg {
        font-size: 2.25rem;
        color: var(--primary);
    }
`;