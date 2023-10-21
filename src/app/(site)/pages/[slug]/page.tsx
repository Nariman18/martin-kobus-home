import { getPage } from "../../../../../sanity/sanity-utils";
import CustomScrolling from "../../components/CustomScrolling";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const slug = params.slug;
  const page = await getPage(slug);

  return (
    <div>
      <CustomScrolling images={page.images} slug={page.slug} />
    </div>
  );
}
