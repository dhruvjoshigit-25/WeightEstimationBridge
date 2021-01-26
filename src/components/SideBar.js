import React from "react";
import { Link, withRouter } from "react-router-dom";

const SideBar = () => {
   return (
      <>
         <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div class="sidebar-sticky position-fixed pt-4">
               <ul class="nav flex-column">
                  
                  <li class="nav-item">
                     <Link class="nav-link" to="/Dashboard">
                        Dashboard<span class="sr-only">(current)</span>
                     </Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" to="/ManualGateControl">
                        Manual Gate Controls<span class="sr-only">(current)</span>
                     </Link>
                  </li>
                  <li class="nav-item dropdown">
                     {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Analysis
                        </a>
                     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Graphical</a>
                        <a class="dropdown-item" href="#">Statistical</a>
                     </div> */}
                     <Link class="nav-link" to="/Analysis">
                        Real Time Analysis
                     </Link>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">
                        <span data-feather="users"></span>Current Weight</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">
                        <span data-feather="bar-chart-2"></span>Daily Entries</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">
                        <span data-feather="users"></span>Settings</a>
                  </li>
               </ul>

               <h6
                  class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Saved reports</span>
                  <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                     <span data-feather="plus-circle"></span>
                  </a>
               </h6>
               <ul class="nav flex-column mb-2">
                  {/* <li class="nav-item">
                     <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Current month
                     </a>
                  </li> */}
                  <li class="nav-item">
                     <Link class="nav-link" to="/">
                        Home<span class="sr-only">(current)</span>
                     </Link>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Log Out
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      </>
   );
};

export default SideBar;