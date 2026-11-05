import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Navbar from './components/Navbar.jsx'
import Sample from './components/Sample.jsx'

const App = () => {
  return (
    <div className="dm-sans">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Sample />
      <Contact />
      <Footer />
    </div>
  )
}

export default App