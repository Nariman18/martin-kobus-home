export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  images?: {
    asset: {
      _id: string;
      url: string;
    };
  }[];
};
