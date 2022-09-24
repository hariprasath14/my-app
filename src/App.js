import Home from './components/home';
import Nav from './components/navbar/Nav';
// import TestFirebse from './components/test/testFirebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetInput from './components/test/getInput';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movies' element={<GetInput/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
