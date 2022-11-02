import styled from "styled-components";

export const ListItem = styled.li`
    display: flex;
    color: ${({ theme }) => theme.colors.slateGray};
    font-size: 18px;
    line-height: 1.4;
`;

export const Dot = styled.div`
    align-self: center;
    border-radius: 50%;
    width: 9px;
    height: 9px;
    margin-right: 16px;
    background-color: ${({ theme }) => theme.colors.blue};
`;