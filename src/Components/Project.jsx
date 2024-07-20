// src/components/Carousel.js

import React, { useState, useEffect } from 'react';
import '../index.css'; // Make sure to import the CSS file for transitions

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
      description: 'Description for image 1',
      link: '#link1',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo890dsxpB5UCLQFdVBWmK4qVxTrsrLEEUg&s',
      description: 'Description for image 2',
      link: '#link2',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxljCiU3pRUXpw-39aklTNk7BDV3G9Dn7ocw&s',
      description: 'Description for image 3',
      link: '#link3',
    },
    // Add more slides as needed
  ];

  const transitionDuration = 3000; // Duration of the fade effect (in milliseconds)
  const autoSlideInterval = 7000; // Time between automatic slide changes (in milliseconds)

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsTransitioning(false);
    }, transitionDuration);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
      setIsTransitioning(false);
    }, transitionDuration);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden" id="Project">
      {/* Carousel Images */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[${transitionDuration}ms] ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Description Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-end p-4">
              <div className="text-white text-center mb-6">
                <p className="text-lg md:text-xl font-bold mb-2">{slide.description}</p>
                <a
                  href={slide.link}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Follow Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default Project;
