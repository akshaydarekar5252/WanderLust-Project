const express = require("express");
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing.js');
const {isLoggedIn , isOwner,validateListing} = require("../middleware.js");

const listingControllers = require("../controllers/listings.js");
const multer  = require('multer') //for parsing multipart/form-data, which is used for uploading files
const { storage } = require('../cloudConfig.js'); // Import the cloudinary storage configuration
const upload = multer({ storage })// Set the destination for uploaded files


router.route("/")
.get(wrapAsync(listingControllers.index))
.post(
    isLoggedIn,
    upload.single('listings[image]'),
     validateListing,
    wrapAsync(listingControllers.createListing)
);

//New Route 
router.get("/new",isLoggedIn,listingControllers.renderNewForm);

router.route("/:id")
.get(
     wrapAsync(listingControllers.showListing)
)
.put(isLoggedIn,
    isOwner,
     upload.single('listings[image]'),
     validateListing ,
     wrapAsync(listingControllers.updateListing)
)
.delete(
    isLoggedIn,
    isOwner, 
    wrapAsync(listingControllers.deleteListing)
)

//Edit route 

router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingControllers.editListing)
);


module.exports = router;