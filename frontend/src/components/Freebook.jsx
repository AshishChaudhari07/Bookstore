import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getYbooks = async () => {
      try {
        const res = await axios.get('https://bookstore-backend-dpto.onrender.com/book');
        const data = res.data.book.filter((data)=> data.category === "Free")
        console.log(data);
        setBook(data); // Assuming `res.data.book` is the correct array
      } catch (error) {
        console.log(error);
      }
    };
    getYbooks();
  }, []);

    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll:3,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
        <h1 className='text-xl font-semibold pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem officia quia sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. consequatur tempora?</p>
        </div>
    <div>
    <Slider {...settings}>
      {
        book.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))
      }
      </Slider>
    </div>
    </div>
  </>
  )
}

export default Freebook
