import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "sanity";

export type About = {
  _id: string;
  _createdAt: Date;
  mainImage: SanityImageSource;
  aboutDescription: PortableTextBlock[];
  leftImage: SanityImageSource;
  leftImageDescription: string;
  rightImage: SanityImageSource;
  rightImageDescription: string;
};
