const reviewService= require('../services/reviewService');


const createReview= async (req, res) => {
    const user=req.user;
    try{
        const review=await reviewService.createReview(req.body,user);
        return res.status(201).json(review);

    }catch(error){
        res.status(500).send(error.message);
    }

}

const getAllReviews= async (req, res) => {
    const productId=req.params.productId;
    const user=req.user;
    try{
        const reviews=await reviewService.getAllReview(productId);
        return res.status(201).json(reviews);

    }catch(error){
        res.status(500).send(error.message);
    }

}

module.exports = {
    createReview,
    getAllReviews
}