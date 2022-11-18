import styled from "styled-components";
import { device } from "../../../../theme";

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.color.tileBackground}; 
    color: ${({ theme }) => theme.color.text};   
    border: 6px solid ${({ theme }) => theme.color.divider};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 50px;

    &:hover{
        border: 6px solid ${({ theme }) => theme.color.tileActiveBorder};
        box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
        border-radius: 4px;
    };

    @media ${device.desktop} {
        padding: 40px;
    };

    @media ${device.laptop} {
        padding: 24px
    };
`;

export const TileTitle = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${({ theme }) => theme.color.tileTitle};
    margin: 0;

    @media ${device.laptop} {
        font-size: 18px;
    };
    
    @media ${device.tablet} {
        font-size: 16px;
    };
`;

export const TileDescription = styled.p`
    margin: 24px 0 24px 0;
    font-size: 18px;
    line-height: 1.4;

    @media ${device.laptop} {
        font-size: 14px;
    };
`;

export const LinkContainer = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: auto 1fr;
`;

export const TileSpan = styled.span`
    font-size: 18px;
    line-height: 1.4;

    @media ${device.laptop} {
        font-size: 14px;
    };
`;

export const TileLink = styled.a`
    font-size: 16px;
    word-break: break-word;
    line-height: 1.4;
    color: ${({ theme }) => theme.color.links};
    cursor: pointer;

    @media ${device.laptop} {
        font-size: 14px;
    };
`;