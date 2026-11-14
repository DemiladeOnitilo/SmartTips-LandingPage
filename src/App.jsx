import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Navbar from './components/Navbar.jsx'
import Sample from './components/Sample.jsx'
import MatchdayGuide from './components/MatchdayGuide.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Sample />
      <MatchdayGuide />
      <Footer />
    </div>
  )
}

export default App
