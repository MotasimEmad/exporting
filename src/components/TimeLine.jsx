import React from 'react';

const HorizontalTimeline = () => {
  const events = [
    {
      id: 1,
      icon: '👥',
      title: 'Event One',
      description: 'Description for event one.',
    },
    {
      id: 2,
      icon: '📜',
      title: 'Event Two',
      description: 'Description for event two.',
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Event Three',
      description: 'Description for event three.',
    },
    {
      id: 4,
      icon: '🔄',
      title: 'Event Four',
      description: 'Description for event four.',
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex items-center justify-between w-full max-w-4xl relative">
        {events.map((event, index) => (
          <div key={event.id} className="flex flex-col items-center w-1/4">
            {/* Line above the card */}
            {index > 0 && (
              <div className="w-1 h-20 bg-gray-300 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />
            )}
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full shadow-md z-10">
              <span className="text-2xl">{event.icon}</span>
            </div>
            {/* Card */}
            <div className="mt-2 w-full bg-white rounded-lg shadow-md p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
