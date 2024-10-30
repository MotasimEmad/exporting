import React, { useState, useEffect } from 'react';

const ScrollTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 200;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
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

  // Group posts in pairs
  const groupedPosts = [];
  for (let i = 0; i < posts.length; i += 2) {
    groupedPosts.push(posts.slice(i, i + 2));
  }

  return (
    <div id='about-us' className="relative mt-12 md:mt-8 font-sans pt-0 md:py-4 text-start">
      {/* Timeline */}
      <div className="absolute md:left-1/2 left-8 top-0 bottom-0 w-[3px] md:w-[4px] bg-gray-300">
        <div
          className="absolute top-0 left-0 w-full bg-primary origin-top transition-all duration-300"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-24">
          {groupedPosts.map((group, index) => {
            // Make the first group visible by default
            const threshold = index === 0 ? 0 : (index * 100) / groupedPosts.length;
            const isGroupVisible = scrollProgress >= threshold;

            return (
              <div key={index} className="relative min-h-[200px] md:grid md:grid-cols-2 md:gap-6">
                {/* Timeline Circle */}
                <div className="absolute md:left-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 
                    ${isGroupVisible 
                      ? 'bg-primary border-4 border-primary shadow-lg scale-110' 
                      : 'bg-white border-4 border-gray-300 shadow-md scale-100'}`}
                  >
                    {isGroupVisible && (
                      <svg 
                        className="h-5 w-5 text-white transition-transform duration-500" 
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

                {/* Display both posts in the group simultaneously */}
                {group.map((post) => (
                  <div key={post.id} className="relative">
                    <div className="flex justify-center items-center mt-4 ml-10 md:mx-16">
                      <div 
                        className={`w-full max-w-[26rem] bg-white rounded-xl shadow-lg transition-all duration-700 
                        ${isGroupVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8 pointer-events-none'}`}
                      >
                        <img className="w-full h-auto rounded-t-md" src='https://images.unsplash.com/photo-1553368191-b4431ec06fca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                        <h3 className="text-xl font-semibold mb-2 text-primary p-6">{post.title}</h3>
                        <p className="text-gray-500 text-sm px-6 pb-8">{post.excerpt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}

          {/* Last Circle at the Bottom */}
          <div className="relative flex justify-center items-center">
            <div className="absolute md:left-1/2 left-4 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10">
              <div className="w-10 h-10 bg-primary rounded-full border-4 border-primary shadow-lg flex items-center justify-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollTimeline;
