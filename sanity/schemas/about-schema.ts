export const about = {
  name: "about",
  title: "About Us",
  type: "document",
  fields: [
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
    },
    {
      name: "aboutDescription",
      title: "About Us Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "leftImage",
      title: "Left Image",
      type: "image",
    },
    {
      name: "leftImageDescription",
      title: "Left Image Description",
      type: "string",
    },
    {
      name: "rightImage",
      title: "Right Image",
      type: "image",
    },
    {
      name: "rightImageDescription",
      title: "Right Image Description",
      type: "string",
    },
  ],
};
