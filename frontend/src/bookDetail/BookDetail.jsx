import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await axios.get(`https://bookstore-backend-dpto.onrender.com/book/${id}`);
                setBook(res.data);  // Assuming res.data is an object representing a single book
            } catch (error) {
                setError(error.message);
            }
        };
        fetchBook();
    }, [id]);

    if (!book) {
        return error ? (
            <div>Error: {error}</div>
        ) : (
            <div>Loading...</div>
        );
    }

    return (
        <div className='w-[1000px] h-[70vh] border rounded-lg p-5 my-2 m-auto'>
            <div className='flex gap-1'>
                <div className=''>
                    <img className='w-80 h-80 rounded-lg' src={book.image} alt="" />
                </div>
                <div className='space-y-8 pl-6'>
                    <p>ID: {book.id}</p>
                    <p>Name: {book.name}</p>
                    <p>Title: {book.title}</p>
                    <p>Price: ${book.price}</p>
                    <p>Category: {book.category}</p>
                </div>
            </div>
            <div className='m-[33px] flex justify-center'>
                <Link to='/course'>
                    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                        Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookDetails;
