import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HorizontalTimeline from './components/TimeLine';
import ContactUs from './components/ContactUs';
import WhyUs from './components/ChooseUs';
import Footer from './components/Footer';
import ScrollTimeline from './components/ScrollTimeline';
import Products from './components/Products';

function App() {
  return (
    <div className="App font-ubuntu">
      <NavBar />
      <Hero />
      <ScrollTimeline />
      <WhyUs />
      <Products />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
