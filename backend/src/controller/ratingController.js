const ratingService= require('../services/ratingService');


const createRating= async (req, res) => {
    const user=req.user;
    try{
        const rating=await ratingService.createRating(req.body,user);
        return res.status(201).json(rating);

    }catch(error){
        res.status(500).send(error.message);
    }

}

const getAllRatings= async (req, res) => {
    const productId=req.params.productId;
    const user=req.user;
    try{
        const ratings=await ratingService.getAllRating(productId);
        return res.status(201).json(ratings);

    }catch(error){
        res.status(500).send(error.message);
    }

}
module.exports = {
    createRating,
    getAllRatings
}