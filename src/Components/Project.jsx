import React, { useState, useEffect } from 'react';
import '../index.css'; // Ensure you have the necessary CSS for transitions

const Carousel = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isTransitioning, setIsTransitioning] = useState(false);

  // const slides = [
  //   {
  //     image: process.env.PUBLIC_URL + '/assets/sts.jpg',
  //     description: 'Embeddings based Semantic Text Similarity with LIME Explainable AI',
  //     link: 'https://github.com/AnaghaVinayakKamat/Embeddings_based_STS_using_LIME_XAI',
  //   },
  //   {
  //     image: process.env.PUBLIC_URL + '/assets/tesla.jpg',
  //     description: 'TESLA Stocks Price Prediction',
  //     link: 'https://github.com/AnaghaVinayakKamat/Tesla-Stock-Prediction',
  //   },
  //   {
  //     image: process.env.PUBLIC_URL + '/assets/custom_cnn.jpg',
  //     description: 'Customized conv2d layer of Convolution Neural Networks',
  //     link: 'https://github.com/AnaghaVinayakKamat/Custom-CNN-Image-Classification',
  //   },
  //   // Add more slides as needed
  // ];

  // const transitionDuration = 1000; // Duration of the fade effect (in milliseconds)
  // const autoSlideInterval = 10000; // Time between automatic slide changes (in milliseconds)

  // const nextSlide = () => {
  //   if (isTransitioning) return;
  //   setIsTransitioning(true);
  //   setTimeout(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  //     setIsTransitioning(false);
  //   }, transitionDuration);
  // };

  // const prevSlide = () => {
  //   if (isTransitioning) return;
  //   setIsTransitioning(true);
  //   setTimeout(() => {
  //     setCurrentIndex(
  //       (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
  //     );
  //     setIsTransitioning(false);
  //   }, transitionDuration);
  // };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, autoSlideInterval);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <div className="relative min-h-screen lg:px-56 px-10 lg:py-100 py-20 text-center gap-5 lg:text-start justify-between lg:gap-28 items-center" id="Projects">
      {/* Carousel Images */}
      <h1 className="text-[52px] font-bold mb-6 text-rose-500 text-cente border-b-4 border-rose-800">Projects</h1>
      
      <div className="items-center w-full">
        <a href="https://github.com/AnaghaVinayakKamat/Embeddings_based_STS_using_LIME_XAI" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="card-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/sts.jpg" alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
        <a href="https://github.com/AnaghaVinayakKamat/Tesla-Stock-Prediction" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/tesla.jpg" alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
        <a href="https://github.com/AnaghaVinayakKamat/Custom-CNN-Image-Classification" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/custom_cnn.jpg" alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
