import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "sanity";

export type Contact = {
  _id: string;
  _createdAt: Date;
  _type: "contact";
  email: string;
  address: string;
  phone: string;
  fax: string;
  logoImage: SanityImageSource;
  socialLogo: SanityImageSource;
  socialName: string;
  socialLink: string;
  footerNote: PortableTextBlock[];
};
