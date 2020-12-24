// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import brands from "./brands";
import brandReference from "./objects/brandReference";
import header from "./header";
import navBarReference from "./objects/navBarReference";
import products from "./products";
import productsReference from "./objects/productsReference";
import mainTypeList from "./objects/mainProductTypeList";
import partTypeList from "./productsTypesList";
import subItemArray from "./objects/subProductTypeList";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    brands,
    products,
    brandReference,
    header,
    partTypeList,
    navBarReference,
    productsReference,
    mainTypeList,
    subItemArray,
  ]),
});
