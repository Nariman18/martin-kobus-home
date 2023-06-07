const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" }
      },
      {
        name: "image",
        title: "Main Image",
        type: "image",
        options: { hotspot: true },
       
      },
      {
        //Here is the input that i created for Images array inside my Sanity studio
        name: "images",
        title: "Images",
        type: "array",
        of: [{ type: 'image' }],
        options: { hotspot: true },
        
      },
      {
        name: "url",
        title: "URL",
        type: "url"
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }]
      }
    ]
  }
  
  export default project;