import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Section from './components/Section'
import Arc from './components/Arc'
import Tanjiro from './components/Tanjiro'

function App() {
  return (
      <Router>
        <Switch>
          {/* Favourite Character Page */}
          <Route path="/favouritecharacter">
            <Navbar />
            <Tanjiro />
            <Footer />
          </Route>
          {/* Home Page */}
          <Route path="/">
            <Navbar />
            <Jumbotron />
            <Gallery />
            <Section /> 
            <Arc />
            <Footer />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
