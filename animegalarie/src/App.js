import './App.css';
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Section from './components/Section'
import Arc from './components/Arc'

function App() {
  return (
      <div className="app">
        <Navbar />
        <Jumbotron />
        <Gallery />
        <Section /> 
        <Arc />
        <Footer />
      </div>
  );
}

export default App;
