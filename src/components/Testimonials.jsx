import React from 'react';
import { testimonialsData, assets } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      {/* Heading */}
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Real Stories from Those Who Found Home with Us
      </p>

      {/* Testimonials Cards */}
      <div className='flex flex-wrap justify-center gap-8 lg:gap-12'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='max-w-[340px] border shadow-lg rounded-lg px-8 py-12 text-center'>
            {/* Profile Image */}
            <img
              className='w-20 h-20 rounded-full mx-auto mb-4'
              src={testimonial.image}
              alt={testimonial.alt}
            />
            {/* Name and Title */}
            <h2 className='text-lg font-semibold text-gray-800'>{testimonial.name}</h2>
            <p className='text-gray-500 text-sm mb-2'>{testimonial.title}</p>
            {/* Rating Stars */}
            <div className='flex justify-center mt-4 gap-1 text-red-500'>
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img
                  key={index}
                  src={assets.star_icon}
                  alt="Star"
                  className='w-5 h-5 inline-block mx-0.5'
                />
              ))}
            </div>
            <p className='text-gray-600'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
