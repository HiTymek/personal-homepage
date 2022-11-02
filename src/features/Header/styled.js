import styled from "styled-components";
import photo from "./photo398w.jpg";
import hireMeButton from "../../common/icons/hireMeButton.png";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr; 
    margin-bottom: 63px;
    color: ${({ theme }) => theme.colors.slateGray};
`;

export const Photo = styled.div`
    background-image: url(${photo});
    background-position: 50% 15%;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 398px;
    height: 398px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 66px;
`;

export const ThisIs = styled.span`
    margin-top: 38px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
`;

export const Name = styled.h1`
    color: ${({ theme }) => theme.colors.mineShaft};
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    margin: 12px 0 35px 0;
`;

export const AboutMe = styled.p`
    margin: 0 0 32px 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
`;

export const Image = styled.img`
    background-image: url(${hireMeButton});
    width: 154px;
    height: 49px
`;