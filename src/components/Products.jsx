import { useEffect } from "react";
 
const Products = () => {
    
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

    return (
        <section>
            <hr class="my-12 border-gray-200"></hr>
            <div class="container px-6 py-4 mx-auto">
                <div class="flex justify-between items-center text-start">
                    <div>
                        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                            Our
                            <i class="fas fa-object-ungroup"></i>
                            <div class="relative inline-block mx-2">
                                <span class="absolute -rotate-6 bg-secondary/50 px-2 py-1 inset-0 mt-4"></span>
                                <span class="relative text-secondary font-bold">Products</span>
                            </div>
                        </h1>
                    </div>

                </div>
                <div class="lg:flex lg:-mx-2">
                    <div class="mt-6 lg:mt-0 lg:px-2">
                        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div class="group relative w-full">
                                <img class="object-cover w-96 rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1728649305937-3bdea64ef9f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <h4 class="mt-2 text-lg font-medium text-primary_dark">Lorem ipsum</h4>
                                <p class="text-primary font-bold">12.55</p>
                                <div
                                    class="absolute bottom-0 left-0 h-0 flex flex-col justify-center items-center bg-secondary opacity-0 xl:group-hover:h-full group-hover:opacity-100 duration-500 group-hover:max-w-lg group-hover:mx-auto rounded-md">
                                    <p class="text-md text-white text-start px-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt velit, et eaque nihil amet corrupti inventore dicta corporis, impedit recusandae, vel molestiae! Exercitationem, impedit fuga! Corporis eaque ex odio esse.</p>
                                </div>
                            </div>
                            <div class="group relative w-full">
                                <img class="object-cover w-96 rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1728649305937-3bdea64ef9f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <h4 class="mt-2 text-lg font-medium text-primary_dark">Lorem ipsum</h4>
                                <p class="text-primary font-bold">12.55</p>
                                <div
                                    class="absolute bottom-0 left-0 h-0 flex flex-col justify-center items-center bg-secondary opacity-0 xl:group-hover:h-full group-hover:opacity-100 duration-500 group-hover:max-w-lg group-hover:mx-auto rounded-md">
                                    <p class="text-md text-white text-start px-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt velit, et eaque nihil amet corrupti inventore dicta corporis, impedit recusandae, vel molestiae! Exercitationem, impedit fuga! Corporis eaque ex odio esse.</p>
                                </div>
                            </div>

                            <div class="group relative w-full">
                                <img class="object-cover w-96 rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1728649305937-3bdea64ef9f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <h4 class="mt-2 text-lg font-medium text-primary_dark">Lorem ipsum</h4>
                                <p class="text-primary font-bold">12.55</p>
                                <div
                                    class="absolute bottom-0 left-0 h-0 flex flex-col justify-center items-center bg-secondary opacity-0 xl:group-hover:h-full group-hover:opacity-100 duration-500 group-hover:max-w-lg group-hover:mx-auto rounded-md">
                                    <p class="text-md text-white text-start px-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt velit, et eaque nihil amet corrupti inventore dicta corporis, impedit recusandae, vel molestiae! Exercitationem, impedit fuga! Corporis eaque ex odio esse.</p>
                                </div>
                            </div>
                            <div class="group relative w-full">
                                <img class="object-cover w-96 rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1728649305937-3bdea64ef9f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <h4 class="mt-2 text-lg font-medium text-primary_dark">Lorem ipsum</h4>
                                <p class="text-primary font-bold">12.55</p>
                                <div
                                    class="absolute bottom-0 left-0 h-0 flex flex-col justify-center items-center bg-secondary opacity-0 xl:group-hover:h-full group-hover:opacity-100 duration-500 group-hover:max-w-lg group-hover:mx-auto rounded-md">
                                    <p class="text-md text-white text-start px-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt velit, et eaque nihil amet corrupti inventore dicta corporis, impedit recusandae, vel molestiae! Exercitationem, impedit fuga! Corporis eaque ex odio esse.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
