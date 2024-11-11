const Category = require("../models/category.model");
const Product = require("../models/product.model");

async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });

    await topLevel.save();
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });
    await secondLevel.save();
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });

    await thirdLevel.save();
  }

  const product = new Product({
    title: reqData.title,
    description: reqData.description,
    price: reqData.price,
    discountedPrice: reqData.discountedPrice,
    discountedPersent: reqData.discountedPersent,
    quantity: reqData.quantity,
    brand: reqData.brand,
    color: reqData.color,
    sizes: reqData.sizes,
    imageURL: reqData.imageURL,
    category: thirdLevel._id,
  });

  await product.save();
  return product;
}

async function deleteProduct(productId) {
  const product = await findProductById(productId);

  if (!product) {
    throw new Error("Product not found");
  }
  await Product.findByIdAndDelete(productId);

  return "Product deleted successfully";
}

async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(productId) {
  const product = await Product.findById(productId).populate("category").exec();

  if (!product) {
    throw new Error("Product not found");
  }
  return product;
}

async function getAllProducts(reqQuery) {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    maxDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;
  
  pageNumber = parseInt(pageNumber) || 1;
  pageSize = parseInt(pageSize) || 10;
  
  let query = Product.find().populate("category");
  
  if (category) {
    
    let existCategory = await Category.findOne({ name: category });

    if (existCategory) {
      query = query.where("category").equals(existCategory._id);
     
    } else {
      return { content: [], currentPage: 1, totalPages: 0 };
    }
  }



  if(color==="red" || color==="green" || color==="blue" || color==="yellow" || color==="black" || color==="white" || color==="pink" || color==="purple" || color==="orange" || color==="brown" || color==="grey" || color==="gold" || color==="silver" || color==="multi" || color==="beige" || color==="navy" || color==="khaki" || color==="maroon" || color==="olive" || color==="turquoise" || color==="coral" || color==="teal" || color==="mint" || color==="mustard" || color==="peach" || color==="lavender" || color==="rust" || color==="cream" || color==="charcoal" || color==="taupe" || color==="indigo" || color==="bronze" || color==="copper" || color==="rose" || color==="ivory" || color==="tan" || color==="salmon" || color==="plum" || color==="burgundy" || color==="mauve" || color==="khaki" || color==="lime" || color==="aqua" || color==="fuchsia" || color==="violet" || color==="magenta" || color==="olive" || color==="peach" || color==="coral" || color==="teal" || color==="turquoise" || color==="lavender" || color==="mustard" || color==="mint" || color==="taupe" || color==="salmon" || color==="ivory" || color==="rose" || color==="indigo" || color==="bronze" || color==="copper" || color==="burgundy" || color==="mauve" || color==="khaki" || color==="lime" || color==="aqua" || color==="fuchsia" || color==="violet" || color==="magenta" || color==="olive" || color==="peach" || color==="coral" || color==="teal" || color==="turquoise" || color==="lavender" || color==="mustard" || color==="mint" || color==="taupe" || color==="salmon" || color==="ivory" || color==="rose" || color==="indigo" || color==="bronze" || color==="copper" || color==="burgundy" || color==="mauve" || color==="khaki" || color==="lime" ){  
    // console.log("Color is Valid Saurabh",color);
  
    const colorSet = new Set(
      color.split(",").map((color) => color.trim().toLowerCase())
    );
    // console.log("Color Set ", colorSet);
    const colorRegex =
      colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;

      // console.log("Color Regex ", colorRegex);
    query = query.where("color").regex(colorRegex);
    // console.log("Color Query ", (await query).toString());
  }
  
  if (sizes) {
    
    const sizeSet = new Set(sizes.split(",").map((size) => size.trim()));
    query = query.where("sizes.name").in([...sizeSet]);
  }
  
  if (minPrice && maxPrice) {
    query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
  }

 
  if (minDiscount) {
    query = query.where("discountedPersent").gt(minDiscount);
  }
  if (maxDiscount) {
    query = query.where("discountedPersent").lte(maxDiscount);
  }

  if (stock) {
    if (stock == "in_stock") {
      query = query.where("quantity").gt(0);
    } else if (stock == "out_of_stock") {
      query = query.where("quantity").lte(0);
    }
  }

  if (sort) {
    const sortDirection = sort === "price_high" ? -1 : 1;
    query = query.sort({ discountedPrice: sortDirection });
  }
  // console.log("Query ", query.getFilter());
  const totalProduct = await Product.countDocuments(query.getFilter());
  // console.log("Total Product ", totalProduct);
  const skip = (pageNumber - 1) * pageSize;

  query = query.skip(skip).limit(pageSize);
  
  const products = await query.exec();
  // console.log("Products ", products);

  const totalPages = Math.ceil(totalProduct / pageSize);

  return { content: products, currentPage: pageNumber, totalPages };
}

async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,
};
