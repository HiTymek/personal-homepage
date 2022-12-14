import styled from "styled-components";
import { device } from "../../theme";

export const Wrapper = styled.div`
    max-width: 50%;
    margin: 120px 0 120px 0;
    color: ${({ theme }) => theme.color.text};

    @media ${device.tablet} {
        max-width: 100%;
        margin: 48px 0 48px 0;
    };
`;

export const LetsTalk = styled.p`
    color: ${({ theme }) => theme.color.text};
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    text-transform: uppercase;
    margin: 0 0 24px 0;

    @media ${device.tablet} {
        margin-bottom: 12px;
    };
`;

export const Mail = styled.a`
    font-weight: 900;
    font-size: 32px;
    color: ${({ theme }) => theme.color.title};
    text-decoration: none;

    @media ${device.tablet} {
        font-size: 18px;
    };
`;

export const Text = styled.p`
    font-size: 18px;
    line-height: 1.4;

    @media ${device.tablet} {
      margin-top: 12px;  
    };
`;

export const SocialLinks = styled.div`
    display:flex;
    gap: 24px;
    margin-top: 56px;

    @media ${device.tablet} {
      margin-top: 40px;  
    };
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.socialIcons};
    &:hover{
        filter: brightness(160%);
        transition: 0.5s;
    };
`;