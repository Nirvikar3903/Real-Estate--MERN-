import Listing from '../models/listing.model.js';
import { errorHandler } from '../utils/error.js';

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async(req , res ,next)=>{
  const listing = await Listing.findById(req.params.id);

  if(!listing) {
    return next(errorHandler(404,'Listing not found!'));
  }

  if(req.user.id !== listing.userRef) {
    return next(errorHandler(401,'You can delete your own listings!'))
  }

  try {

    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json('Listing has been deleted!');
    
  } catch (error) {
    next (error);
    
  }
};     

export const updateListing = async(req , res , next) =>{
  //check if listing exist 
  const listing = await Listing.findById(req.params.id);//this params is mentioned in router 
  if(!listing){
    return next(errorHandler(404,'Listing not found!'));
  }

  //to check if user is authorized to edit the listings
  //check with u ser id and suerRef from listing is same or not 
  if(req.user.id !== listing.userRef ){
    return next(errorHandler(401 ,'You can only update your own listings'));
  }
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true} //to get new updated Listings
    );
    res.status(200).json(updatedListing);

    
  } catch (error) {
    next(error );
   
  }
};

export const getListing = async(req, res, next) =>{

  try {
    const listing = await Listing.findById(req.params.id) // to get the id we noted in route
    if(!listing) {
      return next (errorHandler(404 ,'Listing not found!'))
    }
    res.status(200).json(listing)
    
  } catch (error) {
    next (error);
    
  }
  
};