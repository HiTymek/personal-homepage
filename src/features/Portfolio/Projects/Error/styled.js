import styled from "styled-components";
import { device } from "../../../../theme";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const IconContainer = styled.div`
    color: ${({ theme }) => theme.color.title};
`;

export const Header = styled.h3`
    color: ${({ theme }) => theme.color.title};
    font-size: 24px;
    font-weight: 700;
    margin: 23px 0 0 0;

    @media ${device.tablet} {
        font-size: 20px;
    };
`;

export const Info = styled.p`
    color: ${({ theme }) => theme.color.title};
    margin: 32px 0 32px 0;
    font-size: 20px;

    @media ${device.tablet} {
        font-size: 16px;
    };
`;

export const Link = styled.a`
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.color.links};
    text-decoration: none;
    color: ${({ theme }) => theme.color.buttonText};
    border: 1px solid rgba(209, 213, 218, 0.1);
    border-radius: 4px;

    @media ${device.tablet} {
        padding: 10px 14px;
    };

    :hover{
        filter: brightness(130%);
    };
`;