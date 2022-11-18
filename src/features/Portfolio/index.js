import { Container, Header, SubHeader } from "./styled";
import { ReactComponent as GithubBlue } from "./githubBlue.svg";
import Projects from "./Projects/index";

const Portfolio = () => (
    <>
        <Container>
            <GithubBlue />
            <Header>Portfolio</Header>
            <SubHeader>My recent projects</SubHeader>
        </Container>
        <Projects />
    </>
);

export default Portfolio;