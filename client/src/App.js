import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import LandingPage from './components/LandingPage'
import Home from './components/Home';

function App() {
  return (
    <Router>

    <div className="App">
      <h1>Henry Videogames</h1>


      

      <Routes>

      <Route exact path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home/>} />

      </Routes>

    </div>

    </Router>
  );
}

export default App;