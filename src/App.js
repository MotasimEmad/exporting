import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Timeline from './components/TimeLine';
import ContactUs from './components/ContactUs';
import WhyUs from './components/ChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-ubuntu">
      <NavBar />
      <Hero />
      <Timeline />
      <WhyUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
