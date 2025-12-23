export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { getProject } from "../../../../../sanity/sanity-utils";
import CustomScrolling from "../../components/CustomScrolling";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      {project?.images && project.images.length > 0 && (
        <CustomScrolling images={project.images} slug={project.slug} />
      )}
    </div>
  );
}
