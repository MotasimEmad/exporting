import { useState, useEffect } from "react";
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
    const { isLoading } = useSelector((state) => state.message);

    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to validate fields
    const validateFields = () => {
        if (!fullName) {
            toast.error('Full Name is required.', { position: "top-right" });
            return false;
        }
        if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            toast.error('Valid Email is required.', { position: "top-right" });
            return false;
        }
        if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
            toast.error('Valid 10-digit Phone Number is required.', { position: "top-right" });
            return false;
        }
        if (!message) {
            toast.error('Message is required.', { position: "top-right" });
            return false;
        }
        return true;
    };

    const handleSubmitClick = () => {
        // Validate fields before dispatching the action
        if (!validateFields()) return;

        dispatch(sendMessage({ 
            full_name: fullName, 
            email: email, 
            phone_number: phoneNumber, 
            message: message 
        }))
            .unwrap()
            .then(() => {
                toast.success('Message has been sent successfully.', {
                    position: "top-right"
                });

                // Reset form fields
                setFullName("");
                setEmail("");
                setPhoneNumber("");
                setMessage("");
            })
            .catch((error) => {
                toast.error(`Failed to send message: ${error}`, {
                    position: "top-right"
                });
            });
    };

    return (
        <section className="mt-20 text-start min-h-screen bg-white">
            <div className="text-start"><ToastContainer /></div>
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-10">
                    <div className="lg:w-1/2 lg:mx-10">
                        <h1 className="text-2xl font-semibold text-primary capitalize lg:text-3xl">Let’s talk</h1>

                        <p className="mt-4 text-gray-500">
                            Ask us everything and we would  
                            <div className="mx-1 relative inline-block">
                                <span className="absolute -rotate-6 bg-secondary/50 px-2 py-1 inset-0 mt-4"></span>
                                <span className="relative text-secondary font-bold uppercase">love</span>
                            </div>
                            to hear from you
                        </p>

                        <form className="mt-12">
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                                    <input 
                                        value={fullName} 
                                        onChange={(e) => setFullName(e.target.value)} 
                                        type="text" 
                                        placeholder="John Doe" 
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-primary/20 focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" 
                                    />
                                </div>

                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-600">Email address</label>
                                    <input 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        type="email" 
                                        placeholder="johndoe@example.com" 
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-primary/20 focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" 
                                    />
                                </div>
                            </div>

                            <div className="flex-1 mt-4">
                                <label className="block mb-2 text-sm text-gray-600">Phone Number</label>
                                <input 
                                    value={phoneNumber} 
                                    onChange={(e) => setPhoneNumber(e.target.value)} 
                                    type="text" 
                                    placeholder="xxxxxxxxxx" 
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-primary/20 focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" 
                                />
                            </div>

                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-gray-600">Message</label>
                                <textarea 
                                    value={message} 
                                    onChange={(e) => setMessage(e.target.value)} 
                                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 focus:border-primary/20 focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" 
                                    placeholder="Message"
                                ></textarea>
                            </div>

                            <button 
                                type="button"
                                onClick={handleSubmitClick} 
                                disabled={isLoading} 
                                className={`w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/80 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? 'Sending ...' : 'Get in touch'}
                            </button>
                        </form>
                    </div>

                    <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                        <img 
                            className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96 border-4 border-secondary" 
                            src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="contact image" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsPage;
