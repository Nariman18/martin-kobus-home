"use client";

import React, { useEffect, useState } from "react";
import { Project } from "../../../../types/Project";
import { getProjects } from "../../../../sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/image";

function ProjectComponent() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const pagesData = await getProjects();
      const sortedPagesData = pagesData.sort(
        (a, b) =>
          new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
      );
      setProjects(sortedPagesData);
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center mt-[100px] pb-5">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {projects.map((project) => (
          <Link key={project._id} href={`projects/${project.slug}`}>
            {project.image?.asset && (
              <div className="relative w-[320px] h-[400px]">
                <Image
                  src={urlFor(project.image?.asset)
                    .width(800)
                    .quality(80)
                    .url()}
                  alt={project.name}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            )}

            <h2 className="uppercase font-openSans font-[300] mt-4 text-[14px]">
              {project.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectComponent;
