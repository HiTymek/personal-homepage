import styled from "styled-components";
import { device } from "../../theme";

export const Container = styled.div`
    text-align: center;
    margin: 72px 0 24px 0;
    color: ${({ theme }) => theme.color.title};

    @media ${device.tablet} {
        margin-top: 48px; 
    };
`;

export const Header = styled.h2`
    font-weight: 900;
    font-size: 30px;
    margin: 13px 0 8px 0;
    line-height: 36px;

    @media ${device.tablet} {
        font-size: 18px;
    };
`;

export const SubHeader = styled.p`
    font-size: 20px;
    line-height: 1.4;
    margin: 0;

    @media ${device.tablet} {
        font-size: 17px;
    };
`;