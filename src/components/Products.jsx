const Products = () => {
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

                    <div>
                        <p className="text-primary underline text-thin hover:cursor-pointer">View all</p>
                    </div>
                </div>
                <div class="lg:flex lg:-mx-2">
                    <div class="mt-6 lg:mt-0 lg:px-2">
                        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <div className="flex">
                                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                    <img class="object-cover w-96 rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1728649305937-3bdea64ef9f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="T-Shirt" />
                                    <h4 class="mt-2 text-lg font-medium text-primary_dark">Lorem ipsum</h4>
                                    <p class="text-primary font-bold">12.55</p>
                                </div>
                            </div>

                            <div className="flex">
                                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                    <img class="object-cover w-96 rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1728649305937-3bdea64ef9f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="T-Shirt" />
                                    <h4 class="mt-2 text-lg font-medium text-primary_dark">Lorem ipsum</h4>
                                    <p class="text-primary font-bold">12.55</p>
                                </div>

                            </div>

                            <div className="flex">
                                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                    <img class="object-cover w-96 rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1728649305937-3bdea64ef9f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="T-Shirt" />
                                    <h4 class="mt-2 text-lg font-medium text-primary_dark">Lorem ipsum</h4>
                                    <p class="text-primary font-bold">12.55</p>
                                </div>

                            </div>

                            <div className="flex">
                                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                    <img class="object-cover w-96 rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1728649305937-3bdea64ef9f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="T-Shirt" />
                                    <h4 class="mt-2 text-lg font-medium text-primary_dark">Lorem ipsum</h4>
                                    <p class="text-primary font-bold">12.55</p>
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
