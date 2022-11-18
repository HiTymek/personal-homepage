import styled from "styled-components";
import { device } from "../../../theme";

export const ProjectTiles = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-gap: 32px;

    @media ${device.laptop} {
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    };

    @media ${device.tablet} {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    };
`;