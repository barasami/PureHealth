import './App.css';
import Homeabout from './About/Homeabout';
import Homeexercise from './Exercise/Homeexercise';
import Homefit from './FitnescALc/Homefit';
import Homecalorie from './Calories/Homecalorie';

function App() {
  return (
    <div className="App">
      <Homeabout/>
      <Homeexercise/>
      <Homefit/>
      <Homecalorie/>
    </div>
  );
}

export default App;
