import { Text, SpinnerContainer, LoadingSpinner } from "./styled";

const Loading = () => {
    return (
        <>
            <SpinnerContainer>
                <Text>Please wait, projects are being loaded...</Text>
                <LoadingSpinner />
            </SpinnerContainer>
        </>
    );
};

export default Loading;