import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import history from "./history";
import { Fragment } from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/Contact/ContactState";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AlertState from "./context/alert/AlertState";
import Alerts from "./components/layout/Alerts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />

              <div className='container'>
                <Alerts />
                <Routes>
                  <Route exact path='/' element={<PrivateRoute />}>
                    <Route exact path='/' element={<Home />} />
                  </Route>
                  <Route path='/about' element={<About />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/login' element={<Login />} />
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
