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
      <div className="min-h-screen flex text-red-500 items-center justify-center text-lg">
        Page or images not found
      </div>
    );
  }

  return (
    <div>
      {page.images && page.images.length > 0 && (
        <CustomScrolling images={page.images} slug={page.slug} />
      )}
    </div>
  );
}
