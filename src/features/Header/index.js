import {
    Wrapper,
    Photo,
    Content,
    Title,
    AboutMe,
    Image
} from "./styled";

const Header = () => (
    <Wrapper>
        <Photo />
        <Content>
            <span>This is</span>
            <Title>Tymoteusz Wójcik</Title>
            <AboutMe>👨🏻‍💼👨🏻‍💻 I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities. </AboutMe>
            <a href="mailto:timmywojcik@gmail.com">
                <Image />
            </a>
        </Content>
    </Wrapper>
);
export default Header;