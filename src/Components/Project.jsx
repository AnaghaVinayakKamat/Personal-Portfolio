// src/components/Carousel.js

import React, { useState, useEffect } from 'react';
import '../index.css'; // Make sure to import the CSS file for transitions

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: './src/assets/sts.png',
      description: 'Embeddings based Semantic Text Similarity with LIME Explainable AI',
      link: 'https://github.com/AnaghaVinayakKamat',
    },
    {
      image: './src/assets/tesla.png',
      description: 'TESLA Stocks Price Prediction',
      link: 'https://github.com/AnaghaVinayakKamat',
    },
    {
      image: './src/assets/custom_cnn.png',
      description: 'Customized conv2d layer of Convolution Neural Networks',
      link: 'https://github.com/AnaghaVinayakKamat',
    },
    // Add more slides as needed
  ];

  const transitionDuration = 1000; // Duration of the fade effect (in milliseconds)
  const autoSlideInterval = 10000; // Time between automatic slide changes (in milliseconds)

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
    <div className="relative min-h-screen lg:px-56 px-10 lg:py-100 py-20 text-center gap-5 lg:text-start justify-between lg:gap-28 items-center" id="Projects">
      {/* Carousel Images */}
      <h1 className="text-[52px] font-bold mb-6 text-rose-500 text-cente border-b-4 border-rose-800">Project Work</h1>
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
                  href={slide.link} target="_blank"
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
        className="absolute top-1/2 lg:left-40 left-3 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 lg:right-40 right-3 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default Project;
