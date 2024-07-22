import React, { useState, useEffect } from 'react';
import '../index.css'; // Ensure you have the necessary CSS for transitions

const Carousel = () => {


  return (
    <div className="relative min-h-screen lg:px-56 px-10 lg:py-100 py-20 text-center gap-5 lg:text-start justify-between lg:gap-28 items-center" id="Projects">
      {/* Carousel Images */}
      <h1 className="text-[52px] font-bold mb-6 text-rose-500 text-cente border-b-4 border-rose-800">Projects</h1>
      
      <div className="items-center w-full flex flex-col">
        <a href="https://github.com/AnaghaVinayakKamat/Embeddings_based_STS_using_LIME_XAI" className="m-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96" src="/assets/sts.jpg" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>
        <a href="https://github.com/AnaghaVinayakKamat/Tesla-Stock-Prediction" className="m-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg h-96" src="/assets/tesla.jpg" alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
        <a href="https://github.com/AnaghaVinayakKamat/Custom-CNN-Image-Classification" className="m-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg h-96" src="/assets/custom_cnn.jpg" alt=""/>
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
