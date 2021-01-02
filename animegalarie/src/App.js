import './App.css';
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Section from './components/Section'

function App() {
  return (
      <div className="app">
        <Navbar />
        <Jumbotron />
        <Gallery />
        <Section /> 
        <Footer />
      </div>
  );
}

export default App;
