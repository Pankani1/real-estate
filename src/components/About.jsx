import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full h-screen overflow-hidden'
      id='About'
      style={{ minHeight: "100vh" }}
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-4'>
        About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        {/* Image Section */}
        <img
          src={assets.brand_img}
          alt="Brand"
          className='w-full sm:w-1/2 max-w-lg mb-8 md:mb-0'
        />

        {/* Text and Stats Section */}
        <div className='flex flex-col items-center md:items-start text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className='my-10 max-w-lg text-center md:text-left'>
          AO Consultant and Real Estate is a dynamic and comprehensive consulting firm specializing in real estate and property management services. 
          Our team of experts is dedicated to providing personalized guidance and tailored solutions
           for individuals, families, and businesses navigating the complex world of real estate.
          </p>
          <button className='bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition-colors'>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
