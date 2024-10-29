const productService=require('../services/productService');


const createProduct=async(req,res)=>{
    try{

        const product=await productService.createProduct(req.body);
        return res.status(201).json(product);
       

    }catch(error){
        if (!res.headersSent) {
            res.status(500).send(error.message);
          } else {
            console.error('Headers already sent:', error.message);
          }
    }
}
const deleteProduct=async(req,res)=>{
    const productId=req.params.id;
    try{

        const product=await productService.deleteProduct(productId);

        return res.status(201).json(product);

    }catch(error){
        res.status(500).send(error.message);
    }
}
const updateProduct=async(req,res)=>{
    const productId=req.params.id;
    try{

        const product=await productService.updateProduct(productId,req.body);

        return res.status(201).json(product);

    }catch(error){
        res.status(500).send(error.message);
    }
}

const findProductById=async(req,res)=>{
   
    const productId=req.params.id;
  
    try{

        const product=await productService.findProductById(productId);

        return res.status(201).json(product);

    }catch(error){
        res.status(500).send(error.message);
    }
}
const getAllProducts=async(req,res)=>{
  
    try{
        console.log("req.query",req.params);
        const products=await productService.getAllProducts(req.query);

        return res.status(201).json(products);

    }catch(error){
        res.status(500).send(error.message);
    }
}


const createMultipleProduct=async(req,res)=>{
    try{

        const products=await productService.createMultipleProduct(req.body);

        return res.status(201).json({message:"Products created successfully"});

    }catch(error){
        res.status(500).send(error.message);
    } 
}

module.exports={
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProduct
}


