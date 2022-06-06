

import styled from "styled-components";

export const StyledButton = styled.button`
    background: var(--${(props => props.color)});
    border-radius: 5px;

    padding: 0.75rem;

    
`;