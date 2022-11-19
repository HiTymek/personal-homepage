import ThemeButton from "../ThemeButton/index";
import { ReactComponent as Message } from "./message.svg";

import {
    Wrapper,
    ThisIs,
    Photo,
    Content,
    Name,
    AboutMe,
    HireMeLink,
} from "./styled";

const Header = () => (
    <>
        <ThemeButton />
        <Wrapper>
            <Photo />
            <Content>
                <ThisIs>THIS IS</ThisIs>
                <Name>Tymoteusz Wójcik</Name>
                <AboutMe>👨🏻‍💼👨🏻‍💻 I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities. </AboutMe>
                <HireMeLink href="mailto:timmywojcik@gmail.com">
                    <Message /> Hire Me
                </HireMeLink>
            </Content>
        </Wrapper>
    </>
);
export default Header;