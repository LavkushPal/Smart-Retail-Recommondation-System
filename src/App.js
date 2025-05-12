
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './global.css';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Solution_1 from './pages/Solution_1'
import Solution_2 from './pages/Solution_2';
import Contact from './pages/Contact';

function App() {

  return(
    <Router>
      <div>
        <Navbar/>
          <Routes>
            <Route path='/Home' element={ <Home/>}/>
            <Route path='/About' element={ <Solution_1/>}/>
            <Route path='/Skills' element={ <Solution_2/>}/>
            <Route path='/Contact' element={ <Contact/>}/>
          </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
