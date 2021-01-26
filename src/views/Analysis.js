import React from 'react';
import "../index.css";
import PerformanceGraphs from "../components/PerformanceGraphs.js";

const Analysis = () => {

   const WeightStatus = () => {

      const tweight_value = (value) => {
         return (
            { value }
         );
      };

      return (
         <>
            <div class="col-12 pb-4">
               <div class="row">
                  <div class="col-md-12">
                     <div class="row tweight text-center">
                        <div>
                           <button type="button" class="btn btn-dark btn-lg my-4">Current weight on bridge</button>
                           <input type="text" class="text-center btn-lg form-control" placeholder="current weight" value="100.12 kg" ></input>
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
                        <td>1</td>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>sit</td>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td>amet</td>
                        <td>consectetur</td>
                        <td>adipiscing</td>
                        <td>elit</td>
                     </tr>
                     <tr>
                        <td>3</td>
                        <td>Integer</td>
                        <td>nec</td>
                        <td>odio</td>
                        <td>Praesent</td>
                     </tr>
                     <tr>
                        <td>4</td>
                        <td>libero</td>
                        <td>Sed</td>
                        <td>cursus</td>
                        <td>ante</td>
                     </tr>
                     <tr>
                        <td>5</td>
                        <td>dapibus</td>
                        <td>diam</td>
                        <td>Sed</td>
                        <td>nisi</td>
                     </tr>
                     <tr>
                        <td>6</td>
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
      <>
         <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-4 pb-2 mb-3 border-bottom">
            <h1 class="h2">Real Time Analysis</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
               <div class="btn-group mr-2">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
               </div>
               <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                     This week
               </button>
            </div>
         </div>

         {/* <main class="container-fluid pl-0 pb-3">
            <div class="row">
               {WeightStatus()}
            </div>
         </main> */}

         <div class="p-4 pl-md-5 pr-md-5">
            <div class="input-group p-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">Bridge Name</div>
               </div>
               <input type="text" class="form-control" placeholder="Weight..." value="Some name" aria-label="Input group example" aria-describedby="btnGroupAddon"></input>
            </div>
            <div class="input-group p-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">Current Weight</div>
               </div>
               <input type="text" class="form-control" placeholder="Weight..." value="251.059 kg" aria-label="Input group example" aria-describedby="btnGroupAddon"></input>
            </div>
            
         </div>

         {PerformanceGraphs()}
         {DailyEntryTable()}
      </>
   );
};

export default Analysis;