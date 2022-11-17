import styled from "styled-components";
import { device } from "../../theme";

export const Container = styled.div`
    max-width: 1216px;
    margin: 115px auto auto auto;

    @media ${device.tablet} {
        margin-top: 33px;
    };
`;