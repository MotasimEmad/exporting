import { useEffect } from "react";
import team from '../assets/team.jpg';
import team1 from '../assets/team1.png';

const TeamPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (

    <main class="container mx-auto px-6 py-10 mt-12">
        <div class="flex flex-col md:flex-row items-center justify-between text-start">
            <div class="md:w-1/2 mb-6 md:mb-0">
                <img src={team1} alt="Team Image" class="rounded-lg w-full" />
            </div>
            <div class="md:w-1/2 md:pl-8 mt-2 md:mt-8">
                <p class="text-gray-600 mb-6 font-thin">
                    <span className="text-primary font-bold">Our team</span> is fundamental to our success in the agricultural export industry. We are a group of seasoned professionals with deep expertise in international trade, agronomy, and logistics, committed to providing top-quality products to our global clients.
                </p>
                <p class="text-gray-600 mb-6 font-thin">
                    Driven by a passion for sustainable agriculture and strong relationships with farmers and suppliers, we ensure we meet our customers' diverse needs while upholding the highest standards of quality and integrity. Together, we aim to innovate and establish Tareeg Alhareer as a reliable name in the agri-export sector.
                </p>
            </div>
        </div>

        <hr class="my-12 border-gray-200" />

        <div class="flex flex-col md:flex-row items-center justify-between text-start">
            <div class="md:w-1/2 md:pl-8 mt-2 md:mt-8">
                <h2 class="text-2xl font-semibold text-primary">Omer Imam</h2>
                <p class="text-gray-600 mb-6 font-thin">
                    Omer Imam leads our Global Trade and Marketing Services team. With 22 years of experience, he brings extensive market knowledge and expertise in trade and export management, handling engagements with both the private and public sectors worldwide effectively.
                </p>
            </div>

            <div class="md:w-1/2 mb-6 md:mb-0">
            <img class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full md:ml-12" src={team} alt="" />
                {/* <img src={team} class="rounded-lg shadow-lg w-full" /> */}
            </div>
        </div>
    </main>
  );
};

export default TeamPage;
