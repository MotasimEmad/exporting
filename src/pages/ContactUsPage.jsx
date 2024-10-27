import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from '../redux/messagesSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsPage = () => {
    const dispatch = useDispatch();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const { isLoading, success, error } = useSelector((state) => state.message);

    const handleSubmitClick = () => {
        dispatch(sendMessage({ full_name: fullName, email: email, phone_number: phoneNumber, message: message }))
            .unwrap()
            .then((payload) => {
                toast.success('Message has been send successfully.', {
                    position: "top-right"
                });

                setFullName("");
                setEmail("");
                setPhoneNumber("");
                setMessage("");
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: "top-right"
                });
            })
    };

    return (
        <section class="mt-20 text-start min-h-screen bg-white">
              <div className="text-start"><ToastContainer /></div>
            <div class="container px-6 py-10 mx-auto">
                <div class="lg:flex lg:items-center lg:-mx-10">
                    <div class="lg:w-1/2 lg:mx-10">
                        <h1 class="text-2xl font-semibold text-primary capitalize  lg:text-3xl">Let’s talk</h1>

                        <p class="mt-4 text-gray-500 ">
                            Ask us everything and we would  <div class="mx-1 relative inline-block">
                                <span class="absolute -rotate-6 bg-secondary/50 px-2 py-1 inset-0 mt-4"></span>
                                <span class="relative text-secondary font-bold uppercase">love</span>
                            </div>
                            to hear from you
                        </p>

                        <form class="mt-12">
                            <div class="-mx-2 md:items-center md:flex">
                                <div class="flex-1 px-2">
                                    <label class="block mb-2 text-sm text-gray-600 ">Full Name</label>
                                    <input value={fullName} onChange={(e) => { setFullName(e.target.value) }} type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-primary/20  focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="flex-1 px-2 mt-4 md:mt-0">
                                    <label class="block mb-2 text-sm text-gray-600 ">Email address</label>
                                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-primary/20  focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                            </div>

                            <div class="flex-1 mt-4">
                                <label class="block mb-2 text-sm text-gray-600 ">Phone Numnber</label>
                                <input value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} type="text" placeholder="xxxxxxxxxx" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-primary/20  focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="w-full mt-4">
                                <label class="block mb-2 text-sm text-gray-600 ">Message</label>
                                <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56  focus:border-primary/20  focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                            </div>

                            {isLoading ? <button disabled class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/80 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sending ...
                            </button>
                                : <button onClick={handleSubmitClick} class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/80 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    get in touch
                                </button>
                            }

                        </form>
                    </div>

                    <div class="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                        <img class="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96 border-4 border-secondary" src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="contact image" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactUsPage;
