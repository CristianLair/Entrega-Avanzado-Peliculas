import React from "react";
import { Link, withRouter } from "react-router-dom";
import {  NavItem } from "reactstrap";

import { isAuthenticated } from "./apiCore";
import "./Navigation.css"





const Navigation = ({history,setIsUser}) => {

  const clickSingOut = (event) =>{
    console.log("funca")
    localStorage.removeItem("jwt")
    setIsUser (null)

}
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="navbar-header logo">
                  
                  <img className="logo" src="images/logo1.png" alt="" width="119" height="58" /> 
              </div>
        <div className="container">
          <a className="navbar-brand" href="http://localhost:3000/signup">
           
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              
            </ul>
            <ul className="navbar-nav">
              
                <>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/signup">
                      Singup
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/signin">
                      Login
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                  <Link className="nav-link" onClick={clickSingOut} >
                  cerrar session
                  </Link>
                  </NavItem>
                </>
             
              
              
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default withRouter(Navigation);
