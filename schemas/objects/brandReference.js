export default{
    name: 'brandReference',
    type: 'object',
    title: 'Brand Reference',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        
        
      },

      {
       name: 'image',
       type: 'image',
       title: 'Image'

     },

     {
      name: 'route',
      type: 'string',
      title: 'Route',
      
      
    },

    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "productsReference",
        },
      ],
    },


     
    ]
  }