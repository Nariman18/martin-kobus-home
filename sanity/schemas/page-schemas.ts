const page = {
    name: "page",
    title: "Pages",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string"
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 }
      },

      {
        name: "mainImage",
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
        name: "content",
        title: "Content",
        type: "array",
        of: [
          { type: "block" }
        ]
      }
    ]
  }
  
  export default page;