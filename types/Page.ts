export type SanityImageAsset = {
  _id: string;
  url: string;
};

export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  images: {
    asset: SanityImageAsset;
  }[];
  slug: string;
  styleClass?: string;
};
