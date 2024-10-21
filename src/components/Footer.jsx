import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <>
            <footer class="bg-primary">
                <div class="container px-6 py-8 mx-auto">
                    <div class="flex flex-col items-center text-center">
                        <a href="#">
                            <img class="w-auto h-16" src={logo} alt="logo" />
                        </a>

                        <p class="max-w-md mx-auto mt-4 text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <hr class="my-10 border-gray-200" />

                    <p class="text-sm text-gray-100">© Copyright 2024. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
