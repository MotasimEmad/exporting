import React, { useState, useEffect, useRef } from 'react';

const ScrollTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState([]);
  const timelineRef = useRef(null);
  const circlesRefs = useRef([]);
  const progressRef = useRef(0);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate the start point (when timeline enters viewport)
      const startPoint = timelineRect.top - windowHeight;
      // Calculate the end point (when timeline bottom reaches viewport bottom)
      const endPoint = timelineRect.bottom - windowHeight;
      
      // Calculate target progress percentage
      const total = endPoint - startPoint;
      const current = window.scrollY - startPoint;
      const targetProgress = Math.max(0, Math.min(100, (current / total) * 100));

      // Animate progress smoothly
      const animateProgress = () => {
        const diff = targetProgress - progressRef.current;
        const step = diff * 0.1; // Adjust this value to control animation speed (smaller = slower)
        
        if (Math.abs(diff) > 0.1) {
          progressRef.current += step;
          setScrollProgress(progressRef.current);
          animationFrameRef.current = requestAnimationFrame(animateProgress);
        } else {
          progressRef.current = targetProgress;
          setScrollProgress(targetProgress);
        }

        // Update visible sections based on current progress
        circlesRefs.current.forEach((circle, index) => {
          if (circle) {
            const circleRect = circle.getBoundingClientRect();
            const circleTop = window.scrollY + circleRect.top;
            const timelineTop = window.scrollY + timelineRect.top;
            const circleProgress = ((circleTop - timelineTop) / timelineRect.height) * 100;
            
            if (progressRef.current >= circleProgress) {
              setVisibleSections(prev => prev.includes(index) ? prev : [...prev, index]);
            } else {
              setVisibleSections(prev => prev.filter(i => i !== index));
            }
          }
        });
      };

      // Cancel any existing animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Start new animation
      animationFrameRef.current = requestAnimationFrame(animateProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const posts = [
    {
      id: 1,
      title: "About us",
      excerpt: "Tareeg Alhareer International Trade Company was founded by Mr. Omer Imam Hassan Mohamed, a graduate of Shanghai Tongji University with over 22 years of experience in international trade. Our company was established to connect the vast potential of Sudan’s agricultural sector with global markets. We actively participate in local and international fairs, showcasing the richness of Sudan’s agricultural products while building valuable relationships with customers and partners worldwide. Our commitment to sustainability and quality ensures that every product contributes positively to our communities and empowers local farmers.",
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
    <div 
      ref={timelineRef}
      id="about-us" 
      className="relative mt-12 md:mt-8 font-sans pt-0 md:py-4 text-start min-h-screen"
    >
      {/* Timeline */}
      <div className="absolute md:left-1/2 left-8 top-0 bottom-0 w-[3px] md:w-[4px] bg-gray-300">
        <div
          className="absolute top-0 left-0 w-full bg-primary"
          style={{ 
            height: `${scrollProgress}%`,
            transition: 'none' // Remove CSS transition to allow JS animation
          }}
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-24">
          {posts.map((post, index) => {
            const isImageLeft = index % 2 === 0;
            const isGroupVisible = visibleSections.includes(index);

            return (
              <div key={post.id} className="relative min-h-[200px] md:grid md:grid-cols-2 md:gap-6">
                {/* Timeline Circle */}
                <div
                  ref={(el) => (circlesRefs.current[index] = el)}
                  className="absolute md:left-1/2 left-8 transform -translate-x-1/2 z-10"
                  style={{ top: '50%' }}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
                    ${isGroupVisible ? 'bg-primary border-4 border-primary shadow-lg scale-110' : 'bg-white border-4 border-gray-300 shadow-md scale-100'}`}
                  >
                    {isGroupVisible && (
                      <svg
                        className="h-5 w-5 text-white"
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

                {isImageLeft ? (
                  <>
                    {/* Title on the left */}
                    <div
                      className={`relative flex items-center justify-center mt-8 pr-4 transition-all duration-500 
                      ${isGroupVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                      <h3 className="text-xl font-semibold text-primary">{post.title}</h3>
                    </div>

                    {/* Image and description on the right */}
                    <div
                      className={`relative transition-all duration-500 
                      ${isGroupVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                      <div className="flex justify-center items-center mt-4 ml-10 md:mx-16">
                        <div className="w-full max-w-[26rem] bg-white rounded-xl shadow-lg">
                          <img
                            className="w-full h-auto rounded-t-md"
                            src="https://images.unsplash.com/photo-1726711340790-ccaa3ae7e0c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt={post.title}
                          />
                          <p className="text-gray-500 text-sm px-6 pb-8">{post.excerpt}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image and description on the left */}
                    <div
                      className={`relative transition-all duration-500 
                      ${isGroupVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                      <div className="flex justify-center items-center mt-4 ml-10 md:mx-16">
                        <div className="w-full max-w-[26rem] bg-white rounded-xl shadow-lg">
                          <img
                            className="w-full h-auto rounded-t-md"
                            src="https://images.unsplash.com/photo-1726711340790-ccaa3ae7e0c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt={post.title}
                          />
                          <p className="text-gray-500 text-sm px-6 pb-8">{post.excerpt}</p>
                        </div>
                      </div>
                    </div>

                    {/* Title on the right */}
                    <div
                      className={`relative flex items-center justify-center mt-8 pl-4 transition-all duration-500 
                      ${isGroupVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                      <h3 className="text-xl font-semibold text-primary">{post.title}</h3>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollTimeline;