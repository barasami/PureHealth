import './App.css';
import Homeabout from './About/Homeabout';
import Homeexercise from './Exercise/Homeexercise';
import Homefit from './FitnescALc/Homefit';
import Homecalorie from './Calories/Homecalorie';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path='/drugs' element={<Homeabout/>}/>
          <Route path='/' element={<Homeexercise/>}/>
          <Route path='/fitnes' element={<Homefit/>}/>
          <Route path='/calorie' element={<Homecalorie/>}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
