import styled from "styled-components";
import { device } from "../../theme";

export const ListItem = styled.li`
    display: flex;
    color: ${({ theme }) => theme.color.text};
    font-size: 18px;
    line-height: 1.4;

    @media ${device.tablet} {
        font-size: 14px;
    };
`;

export const Dot = styled.div`
    align-self: center;
    border-radius: 50%;
    width: 9px;
    height: 9px;
    margin-right: 16px;
    background-color: ${({ theme }) => theme.color.primary};

    @media ${device.tablet} {
       width: 6px;
       height: 6px;
    };
`;