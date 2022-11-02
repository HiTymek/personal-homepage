import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 50%;
    margin: 120px 0 120px 0;
    color: ${({ theme }) => theme.color.text};
`;

export const LetsTalk = styled.p`
    color: ${({ theme }) => theme.color.text};
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    text-transform: uppercase;
    margin: 0 0 24px 0;
`;

export const Mail = styled.a`
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    color: ${({ theme }) => theme.color.title};
    text-decoration: none;
`;

export const Text = styled.p`
    font-size: 18px;
    line-height: 1.4;
`;

export const SocialLinks = styled.div`
    display:flex;
    gap: 24px;
    margin-top: 56px;
`;

export const Link = styled.a`
    &:hover{
        filter: brightness(160%);
        transition: 0.5s;
    }
`;