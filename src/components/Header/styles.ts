import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2.5rem;

    div {
        width: 9.25rem;
    }

    nav {
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            
            gap: 1.25rem;

            list-style: none;

            li {
                color: var(--white);
                line-height: 2.05rem;
                
                a {
                    display: inline-block;
                    position: relative;
                    color: var(--white);

                    &.active {
                        font-weight: bold;
                    }
    
                    &.active::after {
                        content: '';
                        height: 3px;
                        width: 100%;
                        position: absolute;
                        border-radius: 0 0 3px 3px;
                        bottom: 0;
                        left: 0;
                        background: var(--primary);
                    }
                }
            }
        }
    }
`;
