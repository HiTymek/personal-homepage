import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    margin: 72px 0 24px 0;
    color: ${({ theme }) => theme.colors.mineShaft};
`;

export const Header = styled.h2`
    font-weight: 900;
    font-size: 30px;
    margin: 13px 0 8px 0;
    line-height: 36px;
`;

export const SubHeader = styled.p`
    font-size: 20px;
    line-height: 1.4;
    margin: 0;
`;

export const ProjectTiles = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
`;

export const SmallTile = styled.div`
    background-color: ${({ theme }) => theme.colors.white}; 
    color: ${({ theme }) => theme.colors.slateGray};   
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 50px;

    &:hover{
        border: 6px solid rgba(3, 102, 214, 0.2);
        box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
        border-radius: 4px;
    }
`;

export const TileTitle = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${({ theme }) => theme.colors.scienceBlue};
    margin: 0;
`;

export const TileDescription = styled.p`
    margin: 24px 0 24px 0;
    font-size: 18px;
    line-height: 1.4;
`;

export const LinkContainer = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 8fr;
`;

export const TileSpan = styled.span`
    font-size: 18px;
    line-height: 1.4;
`;

export const TileLink = styled.a`
    font-size: 18px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.scienceBlue};
    cursor: pointer;
`;