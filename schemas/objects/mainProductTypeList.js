export default {
  name: "mainTypeList",
  type: "object",
  title: "Main Type List",
  fields: [
    {
      name: "mainTypeItem",
      title: "Main Type Item",
      type: "string",
    },

    {
      name: "subTypItem",
      title: "Sub Type Item",
      type: "array",
      of: [
        {
          type: "subItemArray",
        },
      ],
    },
  ],
};
