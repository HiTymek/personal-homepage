import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, selectProjects, selectStatus } from "./projectsSlice";
import ProjectTile from "./ProjectTile";
import Loading from "./Loading";
import Error from "./Error";
import { ProjectTiles } from "./styled";

const Projects = () => {
    const projects = useSelector(selectProjects);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    switch (status) {
        case "initial":
            return <></>;
        case "loading":
            return <Loading />;
        case "error":
            return <Error />;
        default:
            return (
                <>
                    <ProjectTiles>
                        {projects && projects.map(project =>
                            <ProjectTile key={project.id} project={project} />
                        )}
                    </ProjectTiles>
                </>
            );
    };
};

export default Projects;