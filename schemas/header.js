export default {
  name: "header",
  type: "document",
  title: "Header",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },

    {
      title: "Navbar",
      name: "headerNavbar",
      type: 'array',
        of: [
          {
            type: 'navBarReference'
          }
        ]
    },

    

    {
      title: "Main Title",
      name: "mainTitle",
      type: 'string',
        
    },

    {
      title: "Sub Title",
      name: "subTitle",
      type: 'string',
        
    },

    {
      title: "Visit Us Button",
      name: "visitUsBtn",
      type: 'string',
        
    },


  ],
};
