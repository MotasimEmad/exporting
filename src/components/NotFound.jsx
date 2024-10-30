import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section class="bg-white mt-20 text-start">
        <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div class="wf-ull lg:w-1/2">
            <p class="text-sm font-medium text-primary">404 error</p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Page not found</h1>
            <p class="mt-4 text-gray-500 ">Sorry, the page you are looking for doesn't exist.</p>

            <div class="flex items-center mt-6">
              <Link to={`/`} class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-primary rounded-lg shrink-0 sm:w-auto hover:bg-primary/80">
                Take me home
              </Link>
            </div>
          </div>

          <div class="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <img class=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover " src="https://images.unsplash.com/photo-1710081644060-d27e178f7786?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="not found" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
