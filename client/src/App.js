import './App.css';
import {BrowserRouter as Router,Routes,Route, Link,} from "react-router-dom";
import LandingPage from './components/LandingPage'
import Home from './components/Home';
import CreateForm from './components/CreateForm'
import Detail from './components/Detail.jsx'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/'; //paso de refactorizacion



function App() {
  return (
    <Router>

    <div className="App">
      
      <Routes>

      <Route exact path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/videogame/:id' element={<Detail/>} />
      <Route path='/videogames' element={<CreateForm/>} />


      </Routes>

    </div>

    </Router>
  );
}

export default App;