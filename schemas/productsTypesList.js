import { string } from "prop-types";

export default {
  name: "partTypeList",
  type: "document",
  title: "partTypeList",
  fields: [
    {
      name: "productTypeList",
      title: "Products Types List",
      type: "string",
    },

    {
      name: "productTypeTitle",
      title: "Product Type Title",
      type: "array",
      of: [
        {
          type: "mainTypeList",
        },
      ],
    },
  ],
};
