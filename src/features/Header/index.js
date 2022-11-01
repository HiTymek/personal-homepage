import {
    Wrapper,
    ThisIs,
    Photo,
    Content,
    Name,
    AboutMe,
    Image
} from "./styled";

const Header = () => (
    <Wrapper>
        <Photo />
        <Content>
            <ThisIs>THIS IS</ThisIs>
            <Name>Tymoteusz Wójcik</Name>
            <AboutMe>👨🏻‍💼👨🏻‍💻 I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities. </AboutMe>
            <a href="mailto:timmywojcik@gmail.com">
                <Image />
            </a>
        </Content>
    </Wrapper>
);
export default Header;