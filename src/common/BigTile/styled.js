import styled from "styled-components";

export const Wrapper = styled.div`
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 33px;
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(209, 213, 218, 0.3);
`;

export const List = styled.ul`
    margin: 32px 0 32px 0;
    padding: 0;
    display: grid;
    row-gap: 8px;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 115px;
    list-style: none;
`;