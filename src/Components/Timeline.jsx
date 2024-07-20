// src/components/Timeline.js

import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      date: 'March 2020 - Present',
      title: 'Experience Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'experience',
    },
    {
      date: 'September 2018 - March 2020',
      title: 'Education Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'education',
    },
    {
      date: 'April 2017 - August 2018',
      title: 'Experience Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'experience',
    },
    {
      date: 'April 2017 - August 2018',
      title: 'Experience Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'experience',
    },
    // Add more entries as needed
  ];

  return (
    <div className="relative bg-gray-100 min-h-screen py-10" id='Timeline'>
      {/* Vertical Divider */}
      <div className="hidden md:block absolute border-l-2 border-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

      <div className="flex flex-col items-center w-full px-4 md:px-8">
        {timelineData.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={`relative flex flex-col ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } justify-between items-center w-full mb-16 ${
                index !== timelineData.length - 1 ? 'pb-16' : ''
              }`}
            >
              {/* Spacer for Left Side */}
              <div className="w-full md:w-4/12"></div>

              {/* Timeline Content */}
              <div
                className={`relative w-full md:w-4/12 px-4 md:px-6 py-4 bg-white shadow-lg rounded-lg ${
                  index % 2 === 0 ? 'text-left' : 'text-right'
                }`}
              >
                <p className="mb-2 text-sm md:text-base text-gray-500">{item.date}</p>
                <h4 className="mb-2 text-base md:text-lg font-bold">{item.title}</h4>
                <p className="text-xs md:text-sm leading-snug text-gray-900 text-opacity-100">
                  {item.description}
                </p>
              </div>

              {/* Timeline Icon */}
              <div
                className={`absolute w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-500 text-white flex items-center justify-center shadow-xl ${
                  index % 2 === 0 ? 'left-1/2 transform -translate-x-1/2' : 'right-1/2 transform translate-x-1/2'
                }`}
              >
                {index + 1}
              </div>
            </div>

            {/* Divider between different sections */}
            {index !== timelineData.length - 1 && (
              <div className="w-full flex justify-center">
                <div className="border-t-2 border-gray-300 w-full md:w-11/12 mt-8 mb-16"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
