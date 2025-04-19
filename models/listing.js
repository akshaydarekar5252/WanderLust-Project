const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const listingSchema = new Schema({
    title :{
        type: String,
        required: true
    },
    description : String , 

    image:{
        type:String,
        default: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        
        set: (v) => v === "" ? "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" : v,
    },
    price :{
        type: Number,
       
    },
    location:{
        type: String,
       
    },
    country :{
        type: String,
        
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;