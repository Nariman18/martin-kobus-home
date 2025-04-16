import type { Image } from "sanity";

import { dataset, projectId } from "../env";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const imageBuilder = createClient({
  projectId: projectId || "",
  dataset: dataset || "",
});

const builder = imageUrlBuilder(imageBuilder);

export function urlFor(source: any) {
  return builder.image(source).url();
}
