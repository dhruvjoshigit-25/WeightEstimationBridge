import React from 'react';
import logo_web from "../img/logo_web.png";
import logo from "../img/logo_weob.jpg";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Header = () => {
   return (
      <>
         <div className="Header">
            <nav class="navbar navbar-expand-lg bg-extra-dark shadow navbar-dark">
               <img src={logo} width="50px" height="50px" class="rounded-circle d-none d-sm-inline"></img>
               <a class="navbar-brand company-txt ml-sm-3" href="#">Weight Estimation on Bridge</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                     <li class="nav-item active">
                        <Link class="nav-link" to="/">
                           Home<span class="sr-only">(current)</span>
                        </Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to="/Dashboard">
                           Dashboard<span class="sr-only"></span>
                        </Link>
                     </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                     <input class="form-control" type="search" placeholder="Search" aria-label="Search"></input>
                     <button class="btn btn-outline-secondary my-2 mr-sm-3 my-sm-0 ml-1" type="submit">Search</button>
                  </form>
                  <form class="form-inline">
                     <Link class="nav-link" to="/Login">
                        <button class="btn btn-dark " type="submit" action=" ">Log In</button>
                     </Link>

                  </form>
                  <form class="form-inline">
                     <Link class="nav-link" to="/SignUp">
                        <button class="btn btn-dark" type="submit" action=" ">Sign Up</button>
                     </Link>
                  </form>
               </div>
            </nav>
         </div>
      </>
   );
};

export default Header;