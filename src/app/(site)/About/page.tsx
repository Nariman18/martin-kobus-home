import Image from "next/image";
import AboutComponent from "../components/AboutComponent";
import { About } from "../../../../types/About";
import { getAbout } from "../../../../sanity/sanity-utils";

export default async function Page() {
  const about: About | null = await getAbout();

  if (!about) {
    return (
      <div className="text-red-500 text-center p-10">
        <h2>About data is fully empty in the dashboard</h2>
      </div>
    );
  }
  return (
    <div>
      <AboutComponent
        mainImage={about.mainImage}
        aboutDescription={about.aboutDescription}
        leftImage={about.leftImage}
        leftImageDescription={about.leftImageDescription}
        rightImage={about.rightImage}
        rightImageDescription={about.rightImageDescription}
      />
    </div>
  );
}
