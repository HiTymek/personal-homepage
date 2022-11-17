import styled, { css } from "styled-components";

export const ThemeButtonContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 12px;
    margin-right: 22px;
`;

export const Text = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.text}
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    align-self: flex-end;
    border: 1px solid ${({ theme }) => theme.color.themeButton.border};
    background-color: #e5e5e5;
    border-radius: 150px;
    padding: 0 0 0 2px;
    width: 50px;
    height: 25px;
    cursor: pointer;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.themeButton.background};
    color: white;

    ${({ moveToRight }) => !moveToRight && css`
        transform: translate(24px);
    `}
`;