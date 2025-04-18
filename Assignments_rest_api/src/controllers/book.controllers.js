import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";
import { Book } from "../models/book.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHnadler.js";

const addBook = asyncHandler(async(req ,res) =>{
     
    console.log(req.body)
    const {book_ID, title,author_name,year_of_publication} = req.body;
    
    // verify all the filed are present are not 

    if(!book_ID || !title || !author_name || !year_of_publication) {

        throw new ApiError(400,"All fields are required")
    }

    // find not already exist 
    const existBook = await Book.findOne({book_ID})

    if(existBook){
        throw new ApiError(409, "Book with id already exist")
    }

    const book = await Book.create({
        book_ID,
        title,
        author_name,
        year_of_publication
    })
    
    // cheking book is created or not 

    const bookCreated = await Book.findById(book._id);

    if(!bookCreated){
        throw new ApiError(500, "somthing is wrong while adding new book")
    }

    return res.status(201).json(
        new ApiResponse(200, bookCreated,"Book added sucessfully")
    )

})

const getAllBooks = asyncHandler(async (req ,res)=>{
     
     const books = await Book.find();

     // check book is found 
     if(!books) {
        throw new ApiError(400 , "somthing is wrong while ftching all books");
     }

     return res.status(200).json(
        new ApiResponse (200, books,"Fetche all books succesfully")
     )
})

const getByBookId = asyncHandler( async (req ,res)=>{
     
   const {book_ID} = req.body;

   if(!book_ID){
      throw new ApiError(400, "Book ID is required")
   }

   const book = await Book.findOne({book_ID})

   if(!book){
    throw new ApiError(404,"No book found with this ID")
   }

   return res.status(201).json(
    new ApiResponse(200,book,"Sucessufully found ")
   )
})

const updateBookDetails = asyncHandler( async (req,res)=>{
     
    const {book_ID, title,author_name,year_of_publication} = req.body;
    if(!book_ID || !title || !author_name || !year_of_publication) {

        throw new ApiError(400,"All fields are required")
    }

    // find not already exist 
    const book = await Book.findOne({book_ID})

     const newbook = await Book.findByIdAndUpdate(
        book?._id,
        {
           $set:{
            title,
            author_name,
            year_of_publication
           }
        },
        {
            new :true
        }
    )

    return res.status(201).json(
        new ApiResponse(200,newbook,"Succesfully updated")
    )
 

})
const deleteBook = asyncHandler(async(req, res) =>{
      
    const {book_ID} = req.body;

    if(!book_ID){
       throw new ApiError(400, "Book ID is required")
    }

    const book = await Book.findOne({book_ID});
    
   if(!book){
         throw new ApiError(404,"Book id is not found")
   }

    const deletedBook = await Book.findByIdAndDelete(book._id)

    if(!deletedBook){
        throw new ApiError(404,"Book Not found")
    }

    return res.status(201).json(
        new ApiResponse(200,deletedBook,"deleted successfully")
    )
 
})

export {addBook ,getAllBooks,getByBookId, updateBookDetails,deleteBook}