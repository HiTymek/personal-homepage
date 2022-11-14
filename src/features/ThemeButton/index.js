import { ReactComponent as SunIcon } from "./sun.svg";
import { Button, IconContainer } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../../themeSlice";

const ThemeButton = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <>
            <Button onClick={() => { dispatch(toggleTheme()) }}>
                <IconContainer moveToRight={!theme}>
                    <SunIcon />
                </IconContainer>
            </Button>
        </>
    );
};

export default ThemeButton;