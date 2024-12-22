import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Pages from './components/Pages/Pages';
import Awards from './components/Awards/Awards';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Pages/>
      <Awards/>
      <Projects/>
      <Blog/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
