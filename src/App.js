import React from 'react';
import "./index.css";
import PerformanceGraphs from "./components/PerformanceGraphs.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
// import { Line, Bar } from "react-charts";

const App = () => {

   const SideBar = () => {
      return (
         <>
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
               <div class="sidebar-sticky pt-3">
                  <ul class="nav flex-column">
                     <li class="nav-item">
                        <a class="nav-link active" href="#">
                           <span data-feather="home"></span>Dashboard <span class="sr-only">(current)</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">
                           <span data-feather="file"></span> Weight In</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">
                           <span data-feather="shopping-cart"></span>Weight Out</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">
                           <span data-feather="users"></span>Current Weight</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">
                           <span data-feather="bar-chart-2"></span>Todays Reports</a>
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
                     <li class="nav-item">
                        <a class="nav-link" href="#">
                           <span data-feather="file-text"></span>
                           Current month
                        </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">
                           <span data-feather="file-text"></span>
                           Last quarter
                        </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">
                           <span data-feather="file-text"></span>
                           Year
                        </a>
                     </li>
                  </ul>
               </div>
            </nav>
         </>
      );
   };

   const GateControls = () => {

      const Bridge = (props) => {
         return (
            <p>{props.name}</p>
         );
      };

      return (
         <>
            <div class="col-md-6">
               <div class="row manual-buttons">
                  <div class="col-md-12 bridge-name">
                     <Bridge name="Thane - Mulund" />
                  </div>
                  <div class="col-md-12 text-center">
                     <div class="row">
                        <div class="col-md-6">
                           <button class="btn btn-lg btn-dark">GATE 1</button>
                        </div>
                        <div class="col-md-3">
                           <button class="btn btn-lg btn-danger">Close</button>
                        </div>
                        <div class="col-md-3">
                           <button class="btn btn-lg btn-info">Open</button>
                        </div>
                     </div>
                  </div>

                  <div class="col-md-12 text-center">
                     <div class="row">
                        <div class="col-md-6">
                           <button class="btn btn-lg btn-secondary">Signal Status</button>
                        </div>
                        <div class="col-md-2">
                           <button class="btn btn-lg btn-outline-danger signal-status">Red</button>
                        </div>
                        <div class="col-md-2">
                           <button class="btn btn-lg btn-outline-warning signal-status">Yellow</button>
                        </div>
                        <div class="col-md-2">
                           <button class="btn btn-lg btn-outline-success signal-status">Green</button>
                        </div>
                     </div>
                  </div>

                  <div class="col-md-12 bridge-name">
                     < Bridge name="Mulund - thane" />
                  </div>
                  <div class="col-md-12 text-center">
                     <div class="row">
                        <div class="col-md-6">
                           <button class="btn btn-lg btn-dark">GATE 2</button>
                        </div>
                        <div class="col-md-3">
                           <button class="btn btn-lg btn-danger">Close</button>
                        </div>
                        <div class="col-md-3">
                           <button class="btn btn-lg btn-info">Open</button>
                        </div>
                     </div>
                  </div>


                  <div class="col-md-12 text-center">
                     <div class="row">
                        <div class="col-md-6">
                           <button class="btn btn-lg btn-secondary ">Signal Status</button>
                        </div>
                        <div class="col-md-2">
                           <button class="btn btn-lg btn-outline-danger signal-status">Red</button>
                        </div>
                        <div class="col-md-2">
                           <button class="btn btn-lg btn-outline-warning signal-status">Yellow</button>
                        </div>
                        <div class="col-md-2">
                           <button class="btn btn-lg btn-outline-success signal-status">Green</button>
                        </div>
                     </div>
                  </div>

               </div>

            </div>
         </>
      )
   };

   const WeightStatus = () => {
      return (
         <>
            <div class="col-md-3">
               <div class="row">
                  <div class="col-md-12">
                     <div class="row tweight text-center">
                        <button type="button" class="btn btn-dark btn-lg my-4">Current Total Weight</button>
                        <div class="form-group">
                           <input type="text" class="form-control" id="usr"></input>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      )
   };

   const DailyEntryTable = () => {
      return (
         <>
            <h2 class="pt-5">Daily Entries</h2>
            <div class="table-responsive">
               <table class="table table-striped table-sm">
                  <thead>
                     <tr>
                        <th>Sr No</th>
                        <th>Time</th>
                        <th>Weight In</th>
                        <th>Weight Out</th>
                        <th>Current Weight</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>1,001</td>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>sit</td>
                     </tr>
                     <tr>
                        <td>1,002</td>
                        <td>amet</td>
                        <td>consectetur</td>
                        <td>adipiscing</td>
                        <td>elit</td>
                     </tr>
                     <tr>
                        <td>1,003</td>
                        <td>Integer</td>
                        <td>nec</td>
                        <td>odio</td>
                        <td>Praesent</td>
                     </tr>
                     <tr>
                        <td>1,003</td>
                        <td>libero</td>
                        <td>Sed</td>
                        <td>cursus</td>
                        <td>ante</td>
                     </tr>
                     <tr>
                        <td>1,004</td>
                        <td>dapibus</td>
                        <td>diam</td>
                        <td>Sed</td>
                        <td>nisi</td>
                     </tr>
                     <tr>
                        <td>1,005</td>
                        <td>Nulla</td>
                        <td>quis</td>
                        <td>sem</td>
                        <td>at</td>
                     </tr>

                  </tbody>
               </table>
            </div>
         </>
      );
   };

   return (
      <div>
         {Header()}
         <div class="container-fluid">
            <div class="row">
               {SideBar()}
               <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                  {PerformanceGraphs()}
                  <main class="container-fluid p-0">
                     <div class="row">
                        {GateControls()}
                        {WeightStatus()}
                     </div>
                  </main>
                  {DailyEntryTable()}
               </main>
            </div>
         </div>
         {Footer()}
      </div>
   );
};

export default App;