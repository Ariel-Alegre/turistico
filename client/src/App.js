import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import CardDetails from './components/CardDetails/CardsDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element= {<Home/>}/>
          <Route exact path='/auth/login' element= {<Login/>}/>
          <Route exact path='/auth/register' element= {<Register/>}/>
          <Route exact path='/rooms' element= {<CardDetails/>}/>



        </Routes>

      </Router>
    </div>
  );
}

export default App;
