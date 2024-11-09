import React, { useState, useEffect, useRef } from 'react';

const ScrollTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);
  const sectionsRef = useRef([]);
  const circlesRef = useRef([]);
  const mainTimelineRef = useRef(null);
  const [sectionStates, setSectionStates] = useState([]);

  useEffect(() => {
    const setTimelineTop = () => {
      if (circlesRef.current[0] && mainTimelineRef.current && timelineRef.current) {
        const circleRect = circlesRef.current[0].getBoundingClientRect();
        const containerRect = timelineRef.current.getBoundingClientRect();
        const topOffset =
          circleRect.top -
          containerRect.top +
          circlesRef.current[0].clientHeight / 2;
        mainTimelineRef.current.style.top = `${topOffset}px`;
      }
    };

    setTimelineTop();
    window.addEventListener('resize', setTimelineTop);

    const handleScroll = () => {
      if (!timelineRef.current || !mainTimelineRef.current) return;

      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = timelineRect.top + scrollTop;
      const timelineHeight = timelineRef.current.offsetHeight;
      const viewportCenter = scrollTop + windowHeight / 2;

      const relativeScroll = viewportCenter - timelineTop;
      const progress = (relativeScroll / timelineHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const newSectionStates = circlesRef.current.map((circle, index) => {
        if (!circle) return false;

        const circleRect = circle.getBoundingClientRect();
        const circleTop = circleRect.top + scrollTop;
        const circleBottom = circleTop + circleRect.height;
        const lineTop = timelineTop + (parseFloat(mainTimelineRef.current.style.top) || 0);
        const lineHeight = (progress / 115) * timelineHeight;
        const lineBottom = lineTop + lineHeight;

        return lineBottom >= circleTop;
      });

      setSectionStates(newSectionStates);
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setTimelineTop);
    };
  }, []);

  const posts = [
    {
      id: 1,
      title: 'About Us',
      excerpt:
        "Tareeg Alhareer International Trade Company was founded by Mr. Omer Imam Hassan Mohamed, a graduate of Shanghai Tongji University with over 22 years of experience in international trade.",
      side: 'right',
    },
    {
      id: 2,
      title: 'Our Story',
      excerpt:
        "The journey of Tareeg Alhareer began with a vision: to elevate Sudan's agricultural treasures and promote their availability in global markets. With a passion for sustainable practices, we tap into local knowledge and expertise, working closely with farmers to enhance our offerings.",
      side: 'left',
    },
    {
      id: 3,
      title: 'Our Mission',
      excerpt:
        'Our mission is to provide innovative and world-class solutions tailored to Sudan\'s agribusiness and export sectors. We aim to enhance productivity by equipping local farmers with advanced technologies and best practices, fostering economic development across Sudan.',
      side: 'right',
    },
    {
      id: 4,
      title: 'Our Vision',
      excerpt:
        "We aspire to be the leading authority in Sudan's agribusiness sector, dedicated to empowering local farmers and enhancing the agricultural value chain. Our vision encompasses continuous improvement and innovation, ensuring we remain at the forefront of the industry.",
      side: 'left',
    },
  ];

  return (
    <div
      id="about-us"
      ref={timelineRef}
      className="relative mt-12 md:mt-8 font-sans pt-0 md:py-4 text-start min-h-screen"
    >
      {/* Timeline */}
      <div
        className="absolute ml-10 md:ml-0 md:left-1/2 top-0 bottom-0 w-[3px] md:w-[4px] bg-gray-300 transform -translate-x-1/2 z-0"
        ref={mainTimelineRef}
      >
        <div
          className="absolute top-0 left-0 w-full bg-primary transition-transform duration-300 ease-in-out"
          style={{
            height: `${scrollProgress}%`,
            transformOrigin: 'top',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-24">
          {posts.map((post, index) => {
            const isRight = post.side === 'right';
            const isActive = sectionStates[index];

            return (
              <div
                key={post.id}
                ref={(el) => (sectionsRef.current[index] = el)}
                className="relative min-h-[200px] md:grid md:grid-cols-12 md:gap-6"
              >
                {/* Timeline Circle with Title */}
                <div className="absolute ml-6 md:ml-0 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center"
                     ref={(el) => (circlesRef.current[index] = el)}
                     style={{ top: '50%' }}>
                  {/* Title on the left/right of circle */}
                  <div
                    className={`hidden md:block absolute ${
                      isRight ? 'right-80' : 'left-80'
                    } transform -translate-y-1/2 whitespace-nowrap`}
                  >
                    <h3
                      className={`text-2xl font-bold text-primary transition-all duration-300
                        ${isActive
                          ? 'opacity-100 translate-x-0'
                          : `opacity-0 ${isRight ? '-translate-x-8' : 'translate-x-8'}`
                        }`}
                    >
                      {post.title}
                    </h3>
                  </div>

                  {/* Circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                      ${isActive
                        ? 'bg-primary border-4 border-primary shadow-lg scale-110'
                        : 'bg-white border-4 border-gray-300 shadow-md scale-100'
                      }`}
                  >
                    {isActive && (
                      <svg
                        className="h-5 w-5 text-white animate-fadeIn"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`col-span-12 md:col-span-5 ${
                    isRight ? 'md:col-start-8' : 'md:col-start-1'
                  } md:ml-0 ${isRight ? 'md:mr-20' : 'md:ml-20'}`}
                >
                  <div
                    className={`ml-16 md:ml-0 relative transition-all duration-300
                      ${isActive
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-16 pointer-events-none'
                      }`}
                  >
                    <div className="flex flex-col items-center mt-4 md:mt-0 md:mx-0">
                      <div className="w-full max-w-md bg-white rounded-xl shadow-lg">
                        <img
                          className="w-full h-36 rounded-t-md object-cover"
                          src="https://images.unsplash.com/photo-1730724742886-b0e36d1eb067?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt={post.title}
                        />
                        <div className="px-6 py-8">
                          <h3 className="block md:hidden text-md font-bold text-primary mb-2">{post.title}</h3>
                          <p className="text-gray-500 text-sm md:text-lg">{post.excerpt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* End Circle */}
      <div className="absolute ml-10 md:ml-0 md:left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
          ${scrollProgress >= 100
              ? 'bg-primary border-4 border-primary shadow-lg scale-110'
              : 'bg-white border-4 border-gray-300 shadow-md scale-100'
            }`}
        >
          {scrollProgress >= 100 && (
            <svg
              className="h-5 w-5 text-white animate-fadeIn"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollTimeline;