import { Button, ButtonContainer } from "./styled";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../themeSlice";

const ThemeButton = () => {
    const dispatch = useDispatch();

    return (
        <ButtonContainer>
            <Button onClick={() => { dispatch(toggleTheme()) }}></Button>
        </ButtonContainer>
    );
};

export default ThemeButton;