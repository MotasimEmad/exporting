import React, { useRef, useEffect, useState } from 'react';

const ChooseUs = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <hr className="my-12 border-gray-200" />
            <section
                ref={sectionRef}
                className={`bg-white transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                        Why
                        <div className="relative inline-block mx-2">
                            <span className="absolute -rotate-6 bg-secondary/50 px-2 py-1 inset-0 mt-4"></span>
                            <span className="relative text-secondary font-bold">us</span>
                        </div>
                    </h1>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2">
                        {/* Choose Us Items */}
                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                            <span className="inline-block p-3 text-primary bg-primary/20 rounded-full">
                                {/* SVG Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize">Global Expertise with Local Insight</h1>

                            <p className="text-gray-500">
                                We combine extensive international trade experience with a deep understanding of Sudan’s agricultural landscape, enabling us to provide high-quality products.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                            <span className="inline-block p-3 text-primary bg-primary/20 rounded-full">
                                {/* SVG Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize">Trusted Quality Standards</h1>

                            <p className="text-gray-500">
                                Our rigorous quality control measures ensure that every product meets or exceeds industry standards, guaranteeing satisfaction.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                            <span className="inline-block p-3 text-primary bg-primary/20 rounded-full">
                                {/* SVG Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize">Empowering Local Farmers</h1>

                            <p className="text-gray-500">
                                We are committed to building strong partnerships with local farmers, providing them with resources and knowledge to enhance their production.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                            <span className="inline-block p-3 text-primary bg-primary/20 rounded-full">
                                {/* SVG Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize">Adaptable and Flexible</h1>

                            <p className="text-gray-500">
                                Our proactive approach allows us to respond quickly to market changes and customer needs, ensuring tailored solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChooseUs;
