export const dynamic = "force-dynamic";

import { getPage } from "../../../../../sanity/sanity-utils";
import CustomScrolling from "../../components/CustomScrolling";

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPage(params.slug);

  if (!page || !page.images || page.images.length === 0) {
    return (
      <div className="min-h-screen flex text-red-500 items-center justify-center text-lg">
        Page or images not found
      </div>
    );
  }

  return <CustomScrolling images={page.images} slug={page.slug} />;
}
