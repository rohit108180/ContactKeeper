import React , {Fragment, useContext}from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import authContext from "../../context/auth/authContext";

function Navbar({ title, icon }) {

  const {isAuthenticated, logout, user} = useContext(authContext);


  const onLogout =()=>{
    logout();
  }


  const authLinks = (
    <Fragment>
      <li> Hello {user && user.name}</li>
      <li>
        <a onClick ={onLogout}>
          <i className = "fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>

  );


  const guestLinks = (
    <Fragment>
      <li>
              <Link to ="/login">Login</Link>
          </li>
          <li>
              <Link to ="/register">SignUp</Link>
          </li>
    </Fragment>

  );
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1> 
      <ul>

          {isAuthenticated? authLinks : guestLinks}
          
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
