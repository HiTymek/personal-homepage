import { ReactComponent as Facebook } from "../../common/icons/facebook.svg";
import { ReactComponent as Github } from "../../common/icons/github.svg";
import { ReactComponent as Linkedin } from "../../common/icons/linkedin.svg";
import {
    Wrapper,
    LetsTalk,
    Mail,
    Text,
    SocialLinks,
    Link
} from "./styled";

const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's Talk</LetsTalk>
        <Mail href="mailto:timmywojcik@gmail.com">timmywojcik@gmail.com</Mail>
        <Text>
            I'm always open to new projects whenever I have the time.
            If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life,
            feel free to conatct me. ✌🏼
        </Text>
        <SocialLinks>
            <Link rel="noreferrer noopener" target="_blank" href="https://github.com/HiTymek"><Github /></Link>
            <Link rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/tymek.wojcikz/"><Facebook /></Link>
            <Link rel="noreferrer noopener" target="_blank" href="https://pl.linkedin.com/"><Linkedin /></Link>
        </SocialLinks>
    </Wrapper>
);

export default Footer;