import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getYbooks = async () => {
      try {
        const res = await axios.get('http://localhost:4001/book');
        console.log(res.data);
        setBook(res.data.book); // Assuming `res.data.book` is the correct array
      } catch (error) {
        console.log(error);
      }
    };
    getYbooks();
  }, []);

  return (
    <div>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='items-center justify-center text-center '>
          <h1 className='mt-28 text-2xl font-semibold md:text-4xl'>
            We're delighted to have you <span className='text-pink-500'>Here! :)</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, fugit explicabo officiis distinctio repellat cupiditate inventore veritatis illo eligendi saepe dolorem sit in ad soluta nisi modi delectus maxime culpa.
            Minus voluptate quis excepturi distinctio perferendis, quibusdam obcaecati velit fugiat, ratione culpa molestias id soluta! Earum facilis voluptas minus, sit labore dolores excepturi eveniet iste magni nihil animi. Eligendi, at.
          </p>
          <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.length > 0 ? (
              book.map((item) => (
                <Cards item={item} key={item.id} />
              ))
            ) : (
              <p>Loading...</p> // Add a fallback message when there are no books
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Course;
