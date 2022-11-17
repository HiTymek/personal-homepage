import {
    Tile,
    TileTitle,
    TileDescription,
    LinkContainer,
    TileSpan,
    TileLink
} from "./styled";

const ProjectTile = ({ project }) => (
    <Tile>
        <TileTitle>{project.name}</TileTitle>
        <TileDescription>{project.description}</TileDescription>
        <LinkContainer>
            <TileSpan>Demo: </TileSpan>
            <TileLink rel="noopener noreferrer" target="_blank" href={`https://hitymek.github.io/${project.name}/`}>{`https://hitymek.github.io/${project.name}/`}</TileLink>
            <TileSpan>Code: </TileSpan>
            <TileLink rel="noopener noreferrer" target="_blank" href={project.html_url}>{project.html_url}</TileLink>
        </LinkContainer>
    </Tile>
);

export default ProjectTile;