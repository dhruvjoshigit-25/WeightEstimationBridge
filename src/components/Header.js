import React from 'react';

const Header = () => {
   return (
      <>
         <div>
            <nav class="navbar navbar-expand-lg shadow bg-light navbar-light">
               <a class="navbar-brand company-txt" href="#">Weight Estimation on Bridge</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                     <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="index.html">About us<span class="sr-only"></span></a>
                     </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                     <button class="btn btn-outline-success my-2 my-sm-0 ml-2" type="submit">Search</button>
                  </form>
                  <form class="form-inline my-2 my-lg-2">
                     <button class="btn btn-info my-2 my-sm-0 ml-2" type="submit" action="log.html">Log In</button>
                  </form>
                  <form class="form-inline my-2 my-lg-2">
                     <button class="btn btn-info my-2 my-sm-0 ml-2" type="submit">Sign Up</button>
                  </form>
               </div>
            </nav>
         </div>
      </>
   );
};

export default Header;