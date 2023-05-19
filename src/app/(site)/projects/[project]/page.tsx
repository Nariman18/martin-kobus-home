import Image from "next/image";
import { getProject } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="mt-20">
      <header className="flex justify-between items-center">
        <h1 className=" bg-gradient-to-r uppercase from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-4xl font-extrabold drop-shadow">
          {project.name}
        </h1>

        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View My Project
        </a>
      </header>

      {/* Content goes here */}
      <div className="mt-10 font-semibold text-lg text-gray-700">
        <PortableText value={project.content} />
      </div>

      {/* Image goes here */}
      <Image
        alt={project.name}
        src={project.image}
        width={1920}
        height={1080}
        className="mt-5 border-2 border-gray-700 object-cover rounded-lg"
      />
    </div>
  );
}
