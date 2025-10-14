export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  images: {
    url: string;
  }[]; // Now images is an array of objects with url property
  slug: string;
  styleClass: string;
};
