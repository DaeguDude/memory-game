import { Heading1 } from "../styles/h1";

function ProjectTitle(props) {
  return (
    <div class="title">
      <Heading1 spotify>{props.title}</Heading1>
    </div>
  );
}

export default ProjectTitle;
