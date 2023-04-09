import Nav from './components/pages/navbar/Nav';
// import TestFirebse from './components/test/testFirebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import pageRoutes, { authRoutes, commonRoutes } from './components/routes/route'
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/routes/protectedRoute';
import "./scss/app.scss"
import NotifyBanner from './components/banner';

function App() {
  return (
    <div className='mainframe'>
      <Toaster />
      <NotifyBanner
        content={"If the API fails to function, it supposes that my free database and API connects have expired. I will update the connection as soon as possible."}
      />
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
          {commonRoutes && commonRoutes.length > 0 && commonRoutes.map((route, i) => {
            return <Route key={i} path={route.path} element={
              route.component
            } />
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
