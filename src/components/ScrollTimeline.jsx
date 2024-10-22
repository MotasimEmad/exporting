import React, { useState, useEffect } from 'react';

const ScrollTimeline = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollable = documentHeight - windowHeight;
      const percentage = (scrollTop / scrollable) * 150;

      setScrollPercentage(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const posts = [
    {
      id: 1,
      date: "Jun 15, 2024",
      title: "Understanding Modern Business Practices",
      excerpt: "Lorem ipsum is simply dummy text of the printing, typesetting industry and others.",
      comments: 3,
      shares: 2,
      side: 'left'
    },
    {
      id: 2,
      date: "Jul 22, 2024",
      title: "Embracing Digital Transformation",
      excerpt: "Digital transformation is not just about technology; it’s about rethinking business models.",
      comments: 5,
      shares: 4,
      side: 'right'
    },
    {
      id: 3,
      date: "Aug 10, 2024",
      title: "Future of AI in Businesses",
      excerpt: "AI is reshaping industries across the globe with its vast capabilities.",
      comments: 8,
      shares: 6,
      side: 'left'
    },
    {
      id: 4,
      date: "Sep 5, 2024",
      title: "Sustainability in 2024",
      excerpt: "Sustainability has become a core component for successful businesses.",
      comments: 2,
      shares: 1,
      side: 'right'
    },
    {
      id: 5,
      date: "Oct 15, 2024",
      title: "Leveraging Cloud Solutions",
      excerpt: "Cloud solutions are making businesses more agile and scalable.",
      comments: 4,
      shares: 3,
      side: 'left'
    }
  ];

  return (
    <div className="relative min-h-screen mt-6">
      {/* Center Timeline */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[5px] bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 w-full bg-primary origin-top rounded-full"
          style={{
            height: `${scrollPercentage >= 100 ? 98 : scrollPercentage}%`,  // Adjust line height to stop before last circle
            transition: 'height 0.1s ease-out'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-12"> {/* Reduced space between cards */}
          {posts.map((post, index) => (
            <div key={post.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${scrollPercentage > (index * 20)
                    ? 'bg-primary border-4 border-primary shadow-lg'
                    : 'bg-white border-4 border-gray-300 shadow-md'
                  }`}>
                  {/* Icon inside the circle */}
                  {scrollPercentage > (index * 20) ? (

                    <svg className="h-5 w-5 text-white" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path>
                    </svg>

                  ) : null}
                </div>
              </div>

              {/* Alternating Side Content */}
              {post.side === 'left' ? (
                <>
                  <div className={`md:col-start-1 ${scrollPercentage > (index * 20) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } transition-all duration-500 ease-out`}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto text-start">
                      <div className="relative h-32"> {/* Reduced height */}
                        <img
                          src="https://images.unsplash.com/photo-1703226741497-6de4f67c6e11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Blog post"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3"> {/* Reduced padding */}
                        <div className="text-gray-600 text-xs mb-1">{post.date}</div>
                        <h2 className="text-md font-bold mb-1">{post.title}</h2>
                        <p className="text-gray-600 text-sm mb-1">{post.excerpt}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <span>💬 {post.comments} Comments</span>
                          <span>🔄 {post.shares} Shares</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block"></div>
                  <div className={`md:col-start-2 ${scrollPercentage > (index * 20) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } transition-all duration-500 ease-out`}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto text-start">
                      <div className="relative h-32"> {/* Reduced height */}
                        <img
                          src="https://images.unsplash.com/photo-1703226741497-6de4f67c6e11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Blog post"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3"> {/* Reduced padding */}
                        <div className="text-gray-600 text-xs mb-1">{post.date}</div>
                        <h2 className="text-md font-bold mb-1">{post.title}</h2>
                        <p className="text-gray-600 text-sm mb-1">{post.excerpt}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <span>💬 {post.comments} Comments</span>
                          <span>🔄 {post.shares} Shares</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Add the last circle only */}
              {index === posts.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10">
                  <div className="w-10 h-10 bg-primary rounded-full border-4 border-primary shadow-lg flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollTimeline;
