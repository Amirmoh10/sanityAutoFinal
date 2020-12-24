export default {
  name: "brands",
  type: "document",
  title: "Brands",
  fields: [
    {
      name: "brands",
      title: "Brands",
      type: "array",
      of: [
        {
          type: "brandReference",
        },
      ],
    },
  ],
};
