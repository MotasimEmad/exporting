const ProductsPage = () => {
  return (
    <section>
      <section className="fixed top-0 w-full z-10 mt-16">
        <section className="px-8 md:px-20 pt-16 flex items-center py-4 overflow-x-auto whitespace-nowrap bg-primary text-white">
          <a href="#" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>

          <span className="mx-5 text-white rtl:-scale-x-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </span>

          <a href="#" className="flex items-center text-secondary -px-2 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="mx-2">Products</span>
          </a>
        </section>
      </section>

      <section className=" px-6 py-4 mt-20" style={{ paddingTop: '6rem' }}>
        <div className="lg:flex lg:-mx-2">
          <div className="mt-6 lg:mt-0 lg:px-2">
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </section>
    </section>
  );
};

export default ProductsPage;
