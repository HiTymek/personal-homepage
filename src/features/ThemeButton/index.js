import { useState } from "react";
import { Button, ButtonContainer } from "./styled";

const ThemeButton = () => {
    const [isActive, setIsActive] = useState(false);

    const onClickButton = () => {
        setIsActive(current => !current);
    };

    return (
        <ButtonContainer style={{justifyContent: isActive ? "flex-end" : "flex-start"}}>
            <Button onClick={onClickButton}></Button>
        </ButtonContainer>
    );
};

export default ThemeButton;