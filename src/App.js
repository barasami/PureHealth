import './App.css';
import Homeabout from './About/Homeabout';
import Homeexercise from './Exercise/Homeexercise';
import Homefit from './FitnescALc/Homefit';
import Homecalorie from './Calories/Homecalorie';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route path='/bmi' element={<Homeabout/>}/>
          <Route path='/' element={<Homeexercise/>}/>
          <Route path='/muscles' element={<Homefit/>}/>
          <Route path='/calorie' element={<Homecalorie/>}/>
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
