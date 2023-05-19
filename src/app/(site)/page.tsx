import Image from "next/image";
import { getProjects } from "../../../sanity/sanity-utils";
import { Project } from "../../../types/Project";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="flex flex-col justify-center gap-8 items-center mt-[200px]">
      <h1 className="font-bold text-gray-700 text-3xl">My Projects</h1>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg p-3 hover:scale-105 transition-all duration-150 ease-in-out"
          >
            {project.image && (
              <Image
                src={project.image}
                width={350}
                height={200}
                alt={project.name}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold text-gray-600">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
