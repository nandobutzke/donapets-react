import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    gap: 0.75rem;

    background: #111;
    border: none;
    border-radius: 3rem;

    padding: 1rem 1.75rem 1rem 1.75rem;

    font-weight: 300;
    color: var(--white);

    img {
        border-radius: 50%;
    }

    svg {
        font-size: 2rem;
        color: var(--primary);
    }
`;