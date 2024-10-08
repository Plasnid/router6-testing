import { useParams } from "react-router-dom";

function Projects(){
    const params = useParams();
    return (
        <section>
            <h2>Looking at project {params.projectId}!</h2>
            <p>What a great project</p>
        </section>
    )
}
export default Projects;