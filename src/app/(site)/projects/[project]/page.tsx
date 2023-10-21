import { getProject } from "../../../../../sanity/sanity-utils";
import { Project } from "../../../../../types/Project";
import CustomScrolling from "../../components/CustomScrolling";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      {project && (
        <CustomScrolling images={project.images} slug={project.slug} />
      )}
    </div>
  );
}
