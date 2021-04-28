import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Promotion from './components/promotion'

function App() {
  return (
    <div className='container main' >
    <Router>
    <Navbar />
    <Landing />
    <Promotion />
    <Switch>
    <Route  path='/' exact component={Banner} />
    <Route path='/about' component={About} />
    </Switch>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
