import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Github } from "../../common/icons/github.svg";
import { fetchProjects, selectProjects, selectStatus } from "./projectsSlice";
import ProjectTile from "./ProjectTile";
import {
    Container,
    Header,
    SubHeader,
    ProjectTiles,
} from "./styled";

const Projects = () => {
    const projects = useSelector(selectProjects);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch])

    return (
        <>
            <Container>
                <Github />
                <Header>Portfolio</Header>
                <SubHeader>My recent projects</SubHeader>
            </Container>
            <ProjectTiles>
                {status === "loading" ? <div>Ładowanie</div>
                    :
                    <>
                        {projects && projects.map(project =>
                            <ProjectTile key={project.id} project={project} />
                        )}
                    </>
                }
            </ProjectTiles>
        </>
    );
};

export default Projects;