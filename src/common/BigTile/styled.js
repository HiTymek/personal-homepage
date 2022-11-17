import styled from "styled-components";
import { device } from "../../theme";

export const Wrapper = styled.div`
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 33px;
    margin: 72px 0 72px 0;
    background-color: ${({ theme }) => theme.color.tileBackground};

    @media ${device.tablet} {
        margin: 48px 0 48px 0;
        padding: 16px;
    };
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    margin: 0;
    padding-bottom: 15px;
    color: ${({ theme }) => theme.color.title};
    border-bottom: 1px solid ${({ theme }) => theme.color.tileTitleUnderline};

    @media ${device.tablet} {
        font-size: 18px;
    };
`;

export const List = styled.ul`
    margin: 32px 0 32px 0;
    padding: 0;
    display: grid;
    row-gap: 8px;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 115px;
    list-style: none;
    align-items: center;

    @media ${device.desktop} {
        grid-template-columns: repeat(2, 1fr);
    };
    
    @media ${device.laptop} {
        grid-column-gap: 80px;
    };

    @media ${device.tablet} {
        grid-template-columns: repeat(1, 1fr);
        margin: 12px 0 12px 0;
    };
`;