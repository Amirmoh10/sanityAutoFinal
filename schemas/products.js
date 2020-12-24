export default {
  name: "products",
  type: "document",
  title: "Products",
  fields: [
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
  ],
};
