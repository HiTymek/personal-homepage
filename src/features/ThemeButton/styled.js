import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-end;
    border: 1px solid ${({ theme }) => theme.colors.iron};
    background: ${({ theme }) => theme.colors.mercury};
    border-radius: 150px;
    width: 50px;
    height: 25px;
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.slateGray};
    border: none;
    margin: 2px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
`;