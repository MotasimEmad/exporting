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
    const [companyName, setCompanyName] = useState("");
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
            company_name: companyName, 
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

    const backgroundUrl = "https://images.unsplash.com/photo-1609203599090-1bea00d207b9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <section class="min-h-screen bg-cover pt-8" style={{
            backgroundImage: `url('${backgroundUrl}')`,
          }}>
        <div class="flex flex-col min-h-screen bg-black/60 text-start">
        <div className="text-start"><ToastContainer /></div>
            <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
                <div class="flex-1 lg:flex lg:-mx-6">
                    <div class="text-white lg:w-1/2 lg:mx-6">
                        <h1 class="text-2xl font-semibold capitalize lg:text-3xl mt-28">Ultimate design solution</h1>
    
                        <p class="max-w-xl mt-6">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo
                            aliquid molestiae hic incidunt beatae placeat accusantium! Alias ex quisquam ab tempora. Ratione
                            autem doloremque ducimus numquam doloribus, error sed.
                        </p>
                    </div>
    
                    <div class="mt-8 lg:w-1/2 lg:mx-6">
                        <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-200 shadow-2xl rounded-xl lg:max-w-xl">
                            <h1 class="text-xl font-medium text-gray-700">Contact form</h1>
    
                            <p class="mt-2 text-gray-500">
                                Ask us everything and we would love
                                to hear from you
                            </p>
    
                            <form class="mt-6">
                                <div class="flex-1">
                                    <label class="block mb-2 text-sm text-gray-600">Full Name</label>
                                    <input value={fullName} 
                                    onChange={(e) => setFullName(e.target.value)} type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>
    
                                <div class="flex-1 mt-6">
                                    <label class="block mb-2 text-sm text-gray-600">Email address</label>
                                    <input value={email} 
                                    onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>

                                <div class="flex-1 mt-6">
                                    <label class="block mb-2 text-sm text-gray-600">Phone number</label>
                                    <input value={phoneNumber} 
                                    onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder="xxxxxxxxx" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>

                                <div class="flex-1 mt-6">
                                    <label class="block mb-2 text-sm text-gray-600">Company name</label>
                                    <input value={companyName} 
                                    onChange={(e) => setCompanyName(e.target.value)} type="text" placeholder="Company Name" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>
    
                                <div class="w-full mt-6">
                                    <label class="block mb-2 text-sm text-gray-600">Message</label>
                                    <textarea value={message} 
                                    onChange={(e) => setMessage(e.target.value)} class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Message"></textarea>
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
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ContactUsPage;
