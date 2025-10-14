import { getPage } from "../../../../../sanity/sanity-utils";
import CustomScrolling from "../../components/CustomScrolling";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const slug = params.slug;
  const page = await getPage(slug);

  if (!page || !page.images || page.images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Page not or images found
      </div>
    );
  }

  return (
    <div>
      <CustomScrolling images={page.images} slug={page.slug} />
    </div>
  );
}
