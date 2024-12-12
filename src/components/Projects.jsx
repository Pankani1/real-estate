import React, { useState, useRef, useEffect } from 'react';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectsRef = useRef(null);
  const imagesPerPage = 3; // Number of images per scroll

  const scrollToProject = (index) => {
    if (projectsRef.current) {
      const container = projectsRef.current;
      const scrollAmount = container.clientWidth * (index / imagesPerPage);
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    const nextIndex = currentProjectIndex + imagesPerPage;
    setCurrentProjectIndex(nextIndex >= projectsData.length ? 0 : nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = currentProjectIndex - imagesPerPage;
    setCurrentProjectIndex(prevIndex < 0 ? projectsData.length - imagesPerPage : prevIndex);
  };

  // Auto-change functionality
  useEffect(() => {
    const autoScroll = setInterval(() => {
      handleNext();
    }, 10000); // Change every 10 seconds

    return () => clearInterval(autoScroll); // Cleanup on unmount
  }, [currentProjectIndex]); // Restart on index change

  useEffect(() => {
    scrollToProject(currentProjectIndex);
  }, [currentProjectIndex]);

  return (
    <div 
      className='w-screen h-screen flex flex-col justify-center items-center bg-gray-100 overflow-hidden' 
      id='Projects'
    >
      <h1 className='text-3xl sm:text-5xl font-bold mb-4 text-center'>
        Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-2xl mx-auto'>
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Slider Buttons */}
      <div className='flex justify-between items-center w-full px-10 mb-6'>
        <button 
          onClick={handlePrevious} 
          className='p-3 bg-gray-300 rounded-full hover:bg-gray-400' 
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button 
          onClick={handleNext} 
          className='p-3 bg-gray-300 rounded-full hover:bg-gray-400' 
          aria-label='Next Project'
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project Slider */}
      <div
        ref={projectsRef}
        className='flex overflow-x-auto space-x-6 w-full h-[50%] px-10 scroll-smooth'
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className='flex-shrink-0 w-1/5 h-full' // Smaller image card
            style={{ scrollSnapAlign: 'center' }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className='w-full h-[70%] object-cover rounded-lg shadow-lg'
            />
            <div className='mt-4 text-center'>
              <h2 className='text-lg font-semibold text-gray-800'>{project.title}</h2>
              <p className='text-gray-500 text-sm'>
                {project.price} <span>|</span> {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
