import { ReactComponent as SunIcon } from "./sun.svg";
import { ThemeButtonContainer, Text, Button, IconContainer } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../../themeSlice";

const ThemeButton = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <>
            <ThemeButtonContainer>
                <Text>DARK MODE {theme ? "ON" : "OFF"}</Text>
                <Button onClick={() => { dispatch(toggleTheme()) }}>
                    <IconContainer moveToRight={!theme}>
                        <SunIcon />
                    </IconContainer>
                </Button>
            </ThemeButtonContainer>
        </>
    );
};

export default ThemeButton;