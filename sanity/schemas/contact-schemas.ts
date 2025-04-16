export const contact = {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo Image",
      type: "image",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "fax",
      title: "Fax Number",
      type: "string",
    },
    {
      name: "socialLogo",
      title: "Social Image",
      type: "image",
    },
    {
      name: "socialName",
      title: "Social Name",
      type: "string",
    },
    {
      name: "socialLink",
      title: "Social Link",
      type: "string",
    },
    {
      name: "footerNote",
      title: "Footer Note",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
