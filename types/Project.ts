export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  coverImage?: {
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
