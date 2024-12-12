import React, { useState, useEffect, useRef } from 'react';
import { projectsData, assets } from '../assets/assets';

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectsRef = useRef(null); // Ref for the slider container

  const imagesPerPage = 3; // Adjust this for how many images to show at a time

  // Handle scrolling to the next project
  const handleNext = () => {
    if (projectsRef.current) {
      const container = projectsRef.current;
      const nextIndex = currentProjectIndex + imagesPerPage;
      if (nextIndex < projectsData.length) {
        setCurrentProjectIndex(nextIndex);
        container.scrollLeft += container.clientWidth; // Scroll to the next set of images
      }
    }
  };

  // Handle scrolling to the previous project
  const handlePrevious = () => {
    if (projectsRef.current) {
      const container = projectsRef.current;
      const prevIndex = currentProjectIndex - imagesPerPage;
      if (prevIndex >= 0) {
        setCurrentProjectIndex(prevIndex);
        container.scrollLeft -= container.clientWidth; // Scroll to the previous set of images
      }
    }
  };

  // Auto-scroll to the next project every 3 seconds
  useEffect(() => {
    const autoScrollInterval = setInterval(handleNext, 3000); // 3000ms = 3 seconds
    return () => clearInterval(autoScrollInterval); // Clear interval on component unmount
  }, [currentProjectIndex]); // Runs whenever currentProjectIndex changes

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 min-h-screen w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Slider buttons */}
      <div className='flex justify-between items-center mb-8'>
        <button
          onClick={handlePrevious}
          className='p-3 bg-gray-200 rounded mr-2'
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={handleNext}
          className='p-3 bg-gray-200 rounded mr-2'
          aria-label='Next Project'
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project slider container */}
      <div
        ref={projectsRef}
        className='flex overflow-x-auto space-x-4 scroll-smooth'
        style={{ scrollSnapType: 'x mandatory' }} // Ensures smooth scroll snapping
      >
        {projectsData.map((project, index) => (
          <div
            key={index}
            className='flex-shrink-0 w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4' // Responsive width
            style={{ scrollSnapAlign: 'center' }} // Ensures images snap into place
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-auto mb-4'
            />
            {/* Title and Price below the image */}
            <div className='mt-4 text-center'>
              <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
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
