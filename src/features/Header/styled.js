import styled from "styled-components";
import photo from "./photo398w.jpg";
import hireMeButton from "../../common/icons/hireMeButton.png";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr; 
    margin-bottom: 63px;
    color: #6E7E91;
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
    margin: 63px 66px;
`;

export const ThisIs = styled.span`
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
`;

export const Name = styled.h1`
    color: #252525;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
`;

export const AboutMe = styled.p`
    margin-bottom: 32px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
`;

export const Image = styled.img`
    background-image: url(${hireMeButton});
    width: 154px;
    height: 49px
`;