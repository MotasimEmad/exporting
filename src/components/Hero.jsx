const Hero = () => {
    return (
        <>
            <header>
                <div
                    class="w-full bg-center bg-cover h-[28rem] md:h-[38rem] lg:min-h-screen"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                >
                    <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
                        <div class="text-center mt-20">
                            <h1 class="text-3xl font-semibold text-white lg:text-5xl">
                                Together We Archieving More{" "}
                                <div class="relative inline-block">
                                    <span class="absolute -rotate-6 bg-secondary/50 px-2 py-1 inset-0 mt-4"></span>
                                    <span class="relative text-secondary font-bold">Synergy</span>
                                </div>
                            </h1>
                            <a href="#about-us" class="flex justify-center mt-8 cursor-pointer animate-bounce">
                                <svg
                                    width="53"
                                    height="53"
                                    viewBox="0 0 53 53"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="27"
                                        cy="26"
                                        r="18"
                                        stroke="white"
                                        stroke-width="2"
                                    />
                                    <path
                                        d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                                        fill="white"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Hero;
