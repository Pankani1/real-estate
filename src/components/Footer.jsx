import React from 'react';
import { assets } from '../assets/assets';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BsSnapchat } from 'react-icons/bs'; // Import Snapchat icon

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 text-white w-full overflow-hidden' id='Footer'>
      {/* Footer Container */}
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start gap-8'>
        {/* Logo and Company Description */}
        <div className='w-full md:w-1/3'>
          <img src={assets.logo} alt="Company Logo" className='w-32 mb-4' />
          <p className='text-gray-400 text-sm leading-relaxed'>
            Crafting Spaces, Building Legacies. Discover our portfolio of premium projects designed to inspire and last a lifetime.
          </p>
        </div>

        {/* Quick Links */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-gray-400'>
            <li><a href='#About' className='hover:text-white'>About Us</a></li>
            <li><a href='#Projects' className='hover:text-white'>Our Projects</a></li>
            <li><a href='#Testimonials' className='hover:text-white'>Testimonials</a></li>
            <li><a href='#Contact' className='hover:text-white'>Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
          <div className='flex gap-6'>
            <a href='https://facebook.com' target='_blank' rel='noreferrer' className='text-gray-400 hover:text-white'>
              <FaFacebookF size={24} />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer' className='text-gray-400 hover:text-white'>
              <FaInstagram size={24} />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer' className='text-gray-400 hover:text-white'>
              <FaTwitter size={24} />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noreferrer' className='text-gray-400 hover:text-white'>
              <FaLinkedinIn size={24} />
            </a>
            <a href='https://snapchat.com' target='_blank' rel='noreferrer' className='text-gray-400 hover:text-white'>
              <BsSnapchat size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-700 mt-10 text-center py-4'>
        <p className='text-gray-500 text-sm'>
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
