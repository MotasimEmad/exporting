import React, { useEffect, useRef, useState } from 'react';

const Timeline = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.dataset.id;
                    if (entry.isIntersecting) {
                        setVisibleItems((prevVisibleItems) => {
                            if (!prevVisibleItems.includes(id)) {
                                return [...prevVisibleItems, id];
                            }
                            return prevVisibleItems;
                        });
                    } else {
                        setVisibleItems((prevVisibleItems) => {
                            if (prevVisibleItems.includes(id)) {
                                return prevVisibleItems.filter((itemId) => itemId !== id);
                            }
                            return prevVisibleItems;
                        });
                    }
                });
            },
            { threshold: 0.6 }
        );

        itemsRef.current.forEach((item) => {
            if (item) {
                observer.observe(item);
            }
        });

        return () => {
            itemsRef.current.forEach((item) => {
                if (item) {
                    observer.unobserve(item);
                }
            });
        };
    }, []);

    const totalItems = 4;

    return (
        <div className="relative w-full max-w-3xl mx-auto py-16">
            <div className="pl-12">
                {[...Array(totalItems)].map((_, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemsRef.current[index] = el)}
                        data-id={`${index + 1}`}
                        className={`relative ${index === totalItems - 1 ? '' : 'mb-24'}`}
                    >
                        {/* Line Segment (not for the last item) */}
                        {index < totalItems - 1 && (
                            <div
                                className={`absolute left-0 w-px ${visibleItems.includes(`${index + 1}`) ? 'bg-primary' : 'bg-gray-300'
                                    }`}
                                style={{ top: '1.25rem', height: 'calc(100% + 6rem)' }}
                            ></div>
                        )}

                        {/* Circle */}
                        <div
                            className={`absolute left-0 top-0 transform -translate-x-1/2 w-10 h-10 rounded-full transition-colors duration-300 ${visibleItems.includes(`${index + 1}`)
                                ? 'bg-primary border-2 border-white'
                                : 'bg-white border-2 border-gray-300'
                                }`}
                            style={{ zIndex: 1 }}
                        >
                            <svg className=' text-white pt-2 px-2' dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                        </div>

                        {/* Card Content */}
                        <div
                            className={`ml-12 p-6 rounded-lg shadow-lg transition-all duration-300 text-start ${visibleItems.includes(`${index + 1}`) ? 'bg-gray-100' : 'bg-white'
                                }`}
                        >
                            <p className="text-sm text-secondary font-semibold">Nov {6 - index * 2}, 2020</p>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                {index === 0
                                    ? 'Dental Implant Recovery Process Facts'
                                    : index === 1
                                        ? 'Good Choices For Your Oral Health'
                                        : index === 2
                                            ? 'Pediatric Dentistry – Facts To Consider'
                                            : 'Ways Your Dental Health Affects You'}
                            </h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. {index === 0
                                    ? 'Praesent fringilla tristique velit, sit amet ultrices arcu ornare sed...'
                                    : index === 1
                                        ? 'Pellentesque consequat, felis ac fringilla rhoncus, augue massa venenatis augue, sed maximus ipsum...'
                                        : index === 2
                                            ? 'Nulla ultricies elit sapien, sed congue ligula molestie eu...'
                                            : 'Donec bibendum quam sed vestibulum...'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const FullSection = () => {
    return (
        <div id="about-us" className="container mx-auto px-4 md:px-8 py-2 md:py-16">
            <div className="flex flex-col lg:flex-row">
                {/* Left side content */}
                <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 flex flex-col py-8 md:py-16 text-start">
                    <h2 className="text-2xl mb-4 font-semibold text-primary ">
                        Lorem ipsum dolor 
                        <div class="relative inline-block mx-2">
                            <span class="absolute -rotate-3 bg-secondary/50 px-2 py-1 inset-0"></span>
                            <span class="relative text-primary font-bold"> sit ame</span>
                        </div>
                    </h2>
                    <p className="text-gray-500 mb-6 font-thin">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <ol className='text-gray-500 font-thin'>
                        <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
                        <li>2. Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
                        <li>3. Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
                    </ol>
                    <img
                        src="https://diviplus.io/wp-content/uploads/2021/08/divi-blog-timeline-settings.png"
                        alt="Our Journey"
                        className="w-full rounded-lg shadow-lg mt-4"
                    />
                </div>

                {/* Right side timeline */}
                <div className="lg:w-2/3">
                    <Timeline />
                </div>
            </div>

            <hr class="my-12 border-gray-200" />
        </div>
    );
};

export default FullSection;