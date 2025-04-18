import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getByBookId, updateBookDetails } from "../controllers/book.controllers.js";

const router = Router();

router.route("/add-new-book").post(addBook);
router.route("/get-all-books").get(getAllBooks);
router.route("/get-book-by-id").post(getByBookId);
router.route("/update-book-details").put(updateBookDetails);
router.route("/delete-book-by-id").delete(deleteBook);




export default router;