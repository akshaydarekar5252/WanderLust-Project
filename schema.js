const joi = require('joi');
const review = require('./models/review');

module.exports.listingSchema = joi.object({
    listings: joi.object({
        title: joi.string().required(),
        price: joi.number().required().min(0),
        description: joi.string().required(),
        location: joi.string().required(),
        image:joi.string().allow("",null),
        country :joi.string().required(),
    }).required()
});


module.exports.reviewSchema = joi.object({
    review : joi.object({
        rating : joi.number().required().min(1).max(5),
        comment : joi.string().required(),
    }).required()
});