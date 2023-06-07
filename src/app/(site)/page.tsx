import Image from "next/image";
import { getProjects } from "../../../sanity/sanity-utils";
import { Project } from "../../../types/Project";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <video
        src="/OwnerBailache4kweb.mov"
        autoPlay
        loop
        muted
        className="object-cover w-full h-full"
      />
    </div>
  );
}
