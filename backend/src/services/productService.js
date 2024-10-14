const Category = require("../models/category.model");
const Product = require("../models/product.model");

async function createProduct(reqData) {
  const topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!toplevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });
  }

  const secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });
  }

  const thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });

    if (!thirdLevel) {
        thirdLevel = new Category({
        name: reqData.thirdLevelCategory,
        parentCategory: secondLevel._id,
        level: 3,
        });
    }




    const product=new Product({
        title:reqData.title,
        description:reqData.description,
        price:reqData.price,
        discountedPrice:reqData.discountedPrice,
        discountedPersent:reqData.discountedPersent,
        quantity:reqData.quantity,
        brand:reqData.brand,
        color:reqData.color,
        sizes:reqData.sizes,
        imageURL:reqData.imageURL,
        category:thirdLevel._id

    })

    return await    product.save()
}

async function deleteProducts(productId) {
    const product= await findProductById(productId)

    if(!product){
        throw new Error('Product not found')
    }
    await Product.findByIdAndDelete(productId)

    return "Product deleted successfully"   
}

async function updateProduct(productId,reqData) {
    return await Product.findByIdAndUpdate(productId,reqData);

    
}


async function findProductById(productId) {
    const product=await Product.findById(productId).populate('category').exec();

    if(!product){
        throw new Error('Product not found')
    }
    return product;
}

async function getAllProducts(reqQuery) {

    let {category,color ,sizes,minPrice,maxPrice,minDiscount,maxDiscount,sor,stock,pageNumber,pageSize}=reqQuery;

    pageSize= pageSize || 10;

    let query=await Product.find().populate('category');

    if(category){
        let existCategory=await Category.findOne({name:category})
        if(existCategory){
            query=query.where('category').equals(existCategory._id)
        }else{
            return {content:[],currentPage:1,totalPages:0}
        }
    }

    if(color){

        const colorSet=new Set(color.split(',').map(color=>color.trim().toLowerCase()))
        const colorRegex=colorSet.size>0?new RegExp([...colorSet].join("|"),"i"):null
        query=query.where('color').regex(colorRegex)
    }

    if(sizes){
        const sizeSet=new Set(sizes)
        query=query.where('sizes.name').in([...sizeSet])
    }
}