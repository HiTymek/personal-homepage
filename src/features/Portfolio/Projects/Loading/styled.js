import styled, { keyframes } from "styled-components";
import { device } from "../../../../theme";

export const SpinningAnimation = keyframes`
    from{transform:rotate(0deg);};
    to{transform:rotate(360deg);};
`;

export const SpinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.color.title};
    font-size: 20px;

    @media ${device.tablet} {
        font-size: 15px;
    };
`;

export const LoadingSpinner = styled.div`
    width: 160px;
    height: 160px;
    margin-top: 24px;
    border-radius: 50%;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #0366d6;
    animation-name: ${SpinningAnimation};
    animation-duration: 1.5s;
    animation-iteration-count: 2;

    @media ${device.tablet} {
        width: 120px;
        height: 120px;
    };
`;