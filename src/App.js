import Nav from './components/pages/navbar/Nav';
// import TestFirebse from './components/test/testFirebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import pageRoutes from './components/routes/route'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          {pageRoutes && pageRoutes.length > 0 && pageRoutes.map((route, i) => {
            return <Route key={i} path={route.path} element={<route.component />} />
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
