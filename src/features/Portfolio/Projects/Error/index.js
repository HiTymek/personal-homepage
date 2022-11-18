import { Wrapper, IconContainer, Header, Info, Link } from "./styled";
import { ReactComponent as Danger } from "./danger.svg";

const Error = () => (
    <Wrapper>
        <IconContainer>
            <Danger />
        </IconContainer>
        <Header>Ooops! Something went wrong...</Header>
        <Info>
            Sorry, failed to load Github projects.<br />
            You can check them directly on Github.
        </Info>
        <Link rel="noreferrer noopener" target="_blank" href="https://github.com/HiTymek">Go to Github</Link>
    </Wrapper>
);

export default Error;