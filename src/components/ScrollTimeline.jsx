import React, { useState, useEffect, useRef } from 'react';

const ScrollTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(25);
  const [activeSection, setActiveSection] = useState(0);
  const timelineRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const timelineTop = timelineRef.current.offsetTop;
      const timelineHeight = timelineRef.current.offsetHeight;
      
      const relativeScroll = scrollTop - timelineTop + windowHeight * 0.5;
      const progress = 25 + ((relativeScroll / timelineHeight) * 75);
      setScrollProgress(Math.min(100, Math.max(25, progress)));

      sectionsRef.current.forEach((section, index) => {
        if (section && index > 0) {
          const sectionTop = section.offsetTop - timelineTop;
          const sectionProgress = (relativeScroll / sectionTop) * 100;
          
          if (sectionProgress >= 100 && index > activeSection) {
            setActiveSection(index);
          } else if (sectionProgress < 90 && index === activeSection) {
            setActiveSection(index - 1);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const posts = [
    {
      id: 1,
      title: "About us",
      excerpt: "Tareeg Alhareer International Trade Company was founded by Mr. Omer Imam Hassan Mohamed, a graduate of Shanghai Tongji University with over 22 years of experience in international trade. Our company was established to connect the vast potential of Sudan's agricultural sector with global markets. We actively participate in local and international fairs, showcasing the richness of Sudan's agricultural products while building valuable relationships with customers and partners worldwide. Our commitment to sustainability and quality ensures that every product contributes positively to our communities and empowers local farmers.",
      side: 'left'
    },
    {
      id: 2,
      title: "Our Story",
      excerpt: "The journey of Tareeg Alhareer began with a vision: to elevate Sudan's agricultural treasures and promote their availability in global markets. With a passion for sustainable practices, we tap into local knowledge and expertise, working closely with farmers to enhance our offerings. Through collaboration and open communication, we have transformed our operations into a platform that uplifts local communities while fostering enduring partnerships that empower farmers and elevate Sudan's agricultural industry.",
      side: 'right'
    },
    {
      id: 3,
      title: "Our Mission",
      excerpt: "Our mission is to provide innovative and world-class solutions tailored to Sudan's agribusiness and export sectors. We aim to enhance productivity by equipping local farmers with advanced technologies and best practices, fostering economic development across Sudan. By ensuring that every product meets the highest international standards, we are dedicated to quality and excellence in all our offerings.",
      side: 'left'
    },
    {
      id: 4,
      title: "Our Vision",
      excerpt: "We aspire to be the leading authority in Sudan's agribusiness sector, dedicated to empowering local farmers and enhancing the agricultural value chain. Our vision encompasses continuous improvement and innovation, ensuring we remain at the forefront of the industry. By fostering strong relationships with stakeholders, we aim to create lasting value and contribute to sustainable economic growth in Sudan.",
      side: 'right'
    }
  ];

  return (
    <div id='about-us'
      ref={timelineRef}
      className="relative mt-12 md:mt-8 font-sans pt-0 md:py-4 text-start min-h-screen"
    >
      {/* Timeline */}
      <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[3px] md:w-[4px] bg-gray-300">
        <div
          className="absolute top-0 left-0 w-full bg-primary transition-transform duration-500 ease-in-out"
          style={{ 
            height: '100%',
            transform: `scaleY(${scrollProgress / 100})`,
            transformOrigin: 'top'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-24">
          {posts.map((post, index) => {
            const isRight = index % 2 === 0;
            const isActive = index <= activeSection;
            const shouldShow = index === 0 ? true : isActive;

            return (
              <div 
                key={post.id} 
                ref={el => sectionsRef.current[index] = el}
                className="relative min-h-[200px] md:grid md:grid-cols-2 md:gap-6"
              >
                {/* Timeline Circle */}
                <div
                  className="absolute left-[16px] md:left-1/2 transform -translate-x-1/2 z-10"
                  style={{ top: '50%' }}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                    ${shouldShow ? 'bg-primary border-4 border-primary shadow-lg scale-110' : 'bg-white border-4 border-gray-300 shadow-md scale-100'}`}
                  >
                    {shouldShow && (
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
                <div className={`col-span-1 ${!isRight && 'md:col-start-2'}`}>
                  <div
                    className={`relative transition-all duration-500 
                    ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}`}
                  >
                    <div className="flex flex-col items-center mt-4 ml-16 md:mx-16">
                      <div className="w-full max-w-[26rem] bg-white rounded-xl shadow-lg">
                        <img
                          className="w-full h-auto rounded-t-md"
                          src="https://images.unsplash.com/photo-1726711340790-ccaa3ae7e0c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt={post.title}
                        />
                        <div className="px-6 py-8">
                          <h3 className="text-md font-semibold text-primary mb-4">{post.title}</h3>
                          <p className="text-gray-500 text-sm">{post.excerpt}</p>
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
      <div 
        className="absolute left-[16px] md:left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10"
      >
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 
          ${scrollProgress >= 95 ? 'bg-primary border-4 border-primary shadow-lg scale-110' : 'bg-white border-4 border-gray-300 shadow-md scale-100'}`}
        >
          {scrollProgress >= 95 && (
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
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollTimeline;