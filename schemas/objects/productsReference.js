export default {
  name: "productsReference",
  type: "object",
  title: "Products Reference",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },

    {
      name: "image",
      type: "image",
      title: "Image",
    },

    {
      name: "productName",
      type: "string",
      title: "Product Name",
    },

    {
      name: "productType",
      type: "string",
      title: "Product Type",
    },

    {
      name: "brands",
      title: "Brands",
      type: "string",
    },
    {
      name: "productId",
      title: "product ID",
      type: "number",
    },
  ],
};
