import Nav from './components/pages/navbar/Nav';
// import TestFirebse from './components/test/testFirebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import pageRoutes, { authRoutes } from './components/routes/route'
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/routes/protectedRoute';

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          {pageRoutes && pageRoutes.length > 0 && pageRoutes.map((route, i) => {
            return <Route key={i} path={route.path} element={
              <ProtectedRoute redirectTo="/login" authRoute={true}>
              <Nav />
                {route.component}
              </ProtectedRoute>

            } />
          })}
          {authRoutes && authRoutes.length > 0 && authRoutes.map((route, i) => {
            return <Route key={i} path={route.path} element={

              <ProtectedRoute redirectTo="/" authRoute={false}>
                {route.component}
              </ProtectedRoute>

            } />
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
