import React from 'react'
import banner from '../../public/Banner.jpg'

function Banner() {
    return (<>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
            <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36'>
                <div className='space-y-8 '>
                    <h1 className='text-4xl font-bold'>
                        Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span>
                    </h1>
                    <p className='text-xl'><span className='text-2xl text-blue-700'>Expands Knowledge: </span> Learning through books exposes readers to new ideas, cultures, and perspectives, broadening their understanding of the world. <br /><br />
                    <span className='text-2xl text-blue-700'>Enhances Critical Thinking:</span> Books challenge the mind, encouraging deeper thought, problem-solving, and the development of analytical skills. <br /><br /> <span className='text-2xl text-blue-700'>Enhances Focus and Concentration: </span> Reading requires sustained attention, improving your ability to concentrate over time. <br /><br /> <span className='text-2xl text-blue-700'>Boosts Creativity and Imagination: </span> Books, especially fiction, stimulate creative thinking and inspire imaginative ideas.</p>
                
                </div>
                <br />
                <hr />
            </div>
            <div className='order-1 w-full md:w-1/2'>
                <img src={banner} className='w-85 h-85'/>
            </div>
        </div>
    </>
    )
}

export default Banner
