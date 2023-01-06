import './App.css';
import About from './components/About/About';
import Services from './components/Services/Services';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { ContactUs } from './components/SubmitForm/ContactUs';
import PortfolioSlider from './components/Portfolio/PortfolioSlider';




function App() {
    const [showForm, setShowForm] = useState(false)
    const onClick = () => setShowForm(true)

    return (
    <>
    <About />
    <Button text='Get A Quote' onClick={onClick}/>
    {showForm ? <ContactUs /> : null }
    <Services />
    <PortfolioSlider />
    <Footer />
    </>
  );
}

export default App;
