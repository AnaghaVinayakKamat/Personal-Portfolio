import React, { useState, useEffect } from 'react';
import '../index.css'; // Ensure you have the necessary CSS for transitions

const Carousel = () => {


  return (
    <div className="relative min-h-screen lg:px-56 px-10 lg:py-100 py-20 text-center gap-5 lg:text-start justify-between lg:gap-28 items-center" id="Projects">
      {/* Carousel Images */}
      <h1 className="text-[52px] font-bold mb-6 text-rose-500 text-cente border-b-4 border-rose-800">Projects</h1>
      
      <div className="items-center w-full flex flex-col">
        <a href="https://github.com/AnaghaVinayakKamat/Embeddings_based_STS_using_LIME_XAI" target='__blank' className="m-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-auto rounded-t-lg sm:w-full" src="/assets/sts.jpg" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Embeddings based semantic text similarity with LIME Explainable AI</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sentence embeddings are collected from a state-of-the-art transformer model to measure the semantic similarity between two sentences. To evaluate the degree of similarity, we applied cosine similarity, which helps in quantifying how similar the sentences are in meaning.To understand and explain the model's decision-making process, LIME (Local Interpretable Model-agnostic Explanations) is used. LIME provides insights into how the model interprets and processes the input data, offering a clearer explanation of its predictions.</p>
            </div>
        </a>
        <a href="https://github.com/AnaghaVinayakKamat/Tesla-Stock-Prediction" target='__blank' className="m-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-auto rounded-t-lg sm:w-full" src="/assets/tesla.jpg" alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TESLA Stocks Price Analysis and Prediction</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tesla stock data for 3 years was gathered from Yahoo Finance and a comprehensive exploratory data analysis (EDA) was conducted. This analysis leveraged various technologies including Python, R, MS Excel, and MS PowerBI to gain insights and visualize trends. Future stock prices were predicted using an LSTM (Long Short-Term Memory) regression model, which is well-suited for time series predictions. This model was used to project Tesla's stock prices for the upcoming month, providing valuable forecasts based on historical data.</p>
          </div>
        </a>
        <a href="https://github.com/AnaghaVinayakKamat/Custom-CNN-Image-Classification" target='__blank' className="m-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-auto rounded-t-lg sm:w-full" src="/assets/custom_cnn.jpg" alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Customized conv2D layer in Convolution Neural Network</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This project focuses on customizing the receptive field of Conv2D layers in Convolutional Neural Networks (CNNs). By introducing flexibility and adaptability in how these layers capture features from input data, our goal is to improve the performance of the algorithm. The enhancements are designed as an attempt to make the CNNs more effective in learning and representing complex patterns, ultimately leading to better results in various applications.</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
