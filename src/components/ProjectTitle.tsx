import { Heading1 } from "../styles/h1";

type ProjectTitleProps = {
  title: string;
};

function ProjectTitle(props: ProjectTitleProps) {
  const { title } = props;

  return (
    <div className="title">
      <Heading1>{title}</Heading1>
    </div>
  );
}

export default ProjectTitle;
