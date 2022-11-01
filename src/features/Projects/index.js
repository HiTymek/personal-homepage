import github from "../../common/icons/github.svg";
import {
    Container,
    Header,
    SubHeader,
    ProjectTiles,
    SmallTile,
    TileTitle,
    TileDescription,
    LinkContainer,
    TileSpan,
    TileLink
} from "./styled";

const Projects = () => (
    <>
        <Container>
            <img src={github} alt="Github icon" />
            <Header>Portfolio</Header>
            <SubHeader>My recent projects</SubHeader>
        </Container>
        <ProjectTiles>
            <SmallTile>
                <TileTitle>Movie Browser</TileTitle>
                <TileDescription>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</TileDescription>
                <LinkContainer>
                    <TileSpan>Demo: </TileSpan>
                    <TileLink>https://link.demo.com</TileLink>
                    <TileSpan>Code: </TileSpan>
                    <TileLink>https://link.code.com</TileLink>
                </LinkContainer>
            </SmallTile>
            <SmallTile>
                <TileTitle>Movie Browser</TileTitle>
                <TileDescription>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</TileDescription>
                <LinkContainer>
                    <TileSpan>Demo: </TileSpan>
                    <TileLink>https://link.demo.com</TileLink>
                    <TileSpan>Code: </TileSpan>
                    <TileLink>https://link.code.com</TileLink>
                </LinkContainer>
            </SmallTile>
            <SmallTile>
                <TileTitle>Movie Browser</TileTitle>
                <TileDescription>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</TileDescription>
                <LinkContainer>
                    <TileSpan>Demo: </TileSpan>
                    <TileLink>https://link.demo.com</TileLink>
                    <TileSpan>Code: </TileSpan>
                    <TileLink>https://link.code.com</TileLink>
                </LinkContainer>
            </SmallTile>
            <SmallTile>
                <TileTitle>Movie Browser</TileTitle>
                <TileDescription>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</TileDescription>
                <LinkContainer>
                    <TileSpan>Demo: </TileSpan>
                    <TileLink>https://link.demo.com</TileLink>
                    <TileSpan>Code: </TileSpan>
                    <TileLink>https://link.code.com</TileLink>
                </LinkContainer>
            </SmallTile>
        </ProjectTiles>
    </>
);

export default Projects;