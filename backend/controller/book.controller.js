import Book from "../models/book.model.js";

export const getBook =async(req,res)=>{
    try {
        const book = await Book.find()
        res.status(200).json({book})
    } catch (error) {
        console.log("Error",error)
        res.status(500).json(error)
    }
}

export const getSingleBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book', error });
    }
}

export const searchBook =  async (req, res) => {
    const query = req.query.name;
    console.log(query)
    try {
        const books = await Book.find({ name: new RegExp(query, 'i') }); // Searches for books with matching titles
        res.json(books);
    } catch (error) {
        res.status(500).send("Server Error");
    }
}