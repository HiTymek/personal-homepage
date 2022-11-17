import styled from "styled-components";
import photoDesktop from "./profile-image-desktop.png";
import photoLaptop from "./profile-image-laptop.png";
import photoTablet from "./profile-image-tablet.png";
import hireMeButton from "../../common/icons/hireMeButton.png";
import { device } from "../../theme";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr; 
    margin-bottom: 63px;
    color: ${({ theme }) => theme.color.text};

    @media ${device.tablet} {
        grid-template-columns: 1fr;
    };
`;

export const Photo = styled.div`
    background-image: url(${photoDesktop});
    background-position: 50% 15%;
    background-repeat: no-repeat;
    align-self: center;
    border-radius: 50%;
    width: 380px;
    height: 380px;

    @media ${device.laptop} {
        background-image: url(${photoLaptop});
        width: 340px;
        height: 340px;
    };

    @media ${device.tablet} {
        background-image: url(${photoTablet});
        width: 200px;
        height: 200px;
    };
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 66px;

    @media ${device.laptop} {
        margin-left: 33px;
    };

    @media ${device.tablet} {
        margin-left: 0;
    };
`;

export const ThisIs = styled.span`
    margin-top: 38px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;

    @media ${device.tablet} {
        margin-top: 13px;
    };
`;

export const Name = styled.h1`
    color: ${({ theme }) => theme.color.title};
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    margin: 12px 0 35px 0;

    @media ${device.tablet} {
        margin: 8px 0 16px 0;
        font-size: 22px;
    };
`;

export const AboutMe = styled.p`
    margin: 0 0 32px 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;

    @media ${device.tablet} {
        margin-bottom: 24px;
    };
`;

export const Image = styled.img`
    background-image: url(${hireMeButton});
    width: 154px;
    height: 49px;
`;