import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container main' >
    <Router>
    <Navbar />
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
