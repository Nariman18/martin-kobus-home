const page = {
    name: "page",
    title: "Work",
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
        //Here is the input that i created for Images array inside my Sanity studio
        name: "images",
        title: "Images",
        type: "array",
        of: [{ type: 'image' }],
        options: { hotspot: true },
        
      },
      
     
    ]
  }
  
  export default page;