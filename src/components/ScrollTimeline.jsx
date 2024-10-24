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
      excerpt: "Digital transformation is not just about technology; it's about rethinking business models.",
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
    }
  ];

  return (
    <div className="relative mt-6 font-sans py-4">
      {/* Timeline */}
      <div className="absolute md:left-1/2 left-8 top-0 bottom-0 w-[3px] md:w-[4px] bg-gray-300">
        <div
          className="absolute top-0 left-0 w-full bg-primary origin-top"
          style={{
            height: `${scrollPercentage >= 100 ? 98 : scrollPercentage}%`,
            transition: 'height 0.1s ease-out'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-12">
          {posts.map((post, index) => (
            <div key={post.id} className="relative">
              {/* Timeline Dot */}
              <div className="absolute md:left-1/2 left-4 transform -translate-x-[20px] md:-translate-x-[20px] -translate-y-1/2 z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${scrollPercentage > (index * 20)
                  ? 'bg-primary border-4 border-primary shadow-lg scale-110'
                  : 'bg-white border-4 border-gray-300 shadow-md scale-100'
                  }`}>
                  {scrollPercentage > (index * 20) && (
                    <svg className="h-5 w-5 text-white transform transition-transform duration-500" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:grid md:grid-cols-2 md:gap-6 ${scrollPercentage > (index * 20)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                } transition-all duration-700 ease-out`}>
                {post.side === 'left' ? (
                  <>
                    <div class="flex justify-center items-center">
                      <div class="max-w-[720px] mx-auto">

                        <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                          <div
                            class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                            <img
                              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                              alt="ui/ux review check" />
                            <div
                              class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                            </div>

                          </div>
                          <div class="p-6">
                            <div class="flex items-center justify-between mb-3">
                              <h5 class="block font-sans text-md antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                Wooden House, Florida
                              </h5>

                            </div>
                            <p class="block font-sans text-sm antialiased font-light leading-relaxed text-gray-700 text-start">
                              Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone
                              walls, and open meadows.
                            </p>

                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div class="flex justify-center items-center">
                      <div class="max-w-[720px] mx-auto">

                        <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                          <div
                            class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                            <img
                              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                              alt="ui/ux review check" />
                            <div
                              class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                            </div>

                          </div>
                          <div class="p-6">
                            <div class="flex items-center justify-between mb-3">
                              <h5 class="block font-sans text-md antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                Wooden House, Florida
                              </h5>

                            </div>
                            <p class="block font-sans text-sm antialiased font-light leading-relaxed text-gray-700 text-start">
                              Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone
                              walls, and open meadows.
                            </p>

                          </div>

                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Last circle */}
              {index === posts.length - 1 && (
                <div className="absolute md:left-1/2 left-4 bottom-0 transform -translate-x-[20px] md:-translate-x-[20px] translate-y-1/2 z-10">
                  <div className="w-10 h-10 bg-primary rounded-full border-4 border-primary shadow-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
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
