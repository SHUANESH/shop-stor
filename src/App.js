import './App.css';
import Routing from './components/Features/Routing';
import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
         <Routing/>
      </Router> 
    </div>
  );
}

export default App;
