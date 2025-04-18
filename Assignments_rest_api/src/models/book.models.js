import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
    {  
        book_ID:{
          type:String,
          required:true,
          unique:true
        },
        title:{
           type:String,
           required:true,

        },
        author_name:{
            type:String,
            required:true,
        },
        year_of_publication:{
          type:String,
          required:true
        }
    },
    {
       timestamps :true
    }
)

export const Book = mongoose.model("Book",BookSchema);