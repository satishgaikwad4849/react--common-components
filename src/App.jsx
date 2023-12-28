import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import BootstrapComponents from './components/Routes/routes.jsx';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import AppRoutes from './components/Routes/routes.jsx';
import Layout from './components/Layout/layout.jsx';
import PrivateRoute from './components/Routes/privateRoute.jsx';
import Login from './components/common/bootstrap_components/Login/login.jsx';
import Register
 from './components/common/bootstrap_components/Login/register.jsx';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <>
    <Router>
      <Routes>
          {AppRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                isAuthenticated ? <PrivateRoute><Layout>{route.component}</Layout></PrivateRoute> : <Navigate to="/login" />
              }
            />
          ))}
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
