import React from 'react';

import "./index.css";
import PerformanceGraphs from "./components/PerformanceGraphs.js";

const Dashboard = () => {

   const WeightStatus = () => {

      // const tweight_value = ([value]) => {
      //    return(
      //       <p>{value}</p>
      //    )
      // }

      // const Bridge = (props) => {
      //    return (
      //       <p>{props.name}</p>
      //    );
      // };

      return (
         <>
            <div class="col-12">
               <div class="row">
                  <div class="col-md-12">
                     <div class="row tweight text-center">
                        <div>
                           <button type="button" class="btn btn-dark btn-lg my-4">Current weight on bridge</button>
                           <input type="text" class="text-center btn-lg form-control" placeholder="current weight" value="100.012 kg" ></input>
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
         {PerformanceGraphs()}
         <main class="container-fluid p-0">
            <div class="row">
               {/* {GateControls()} */}
               {WeightStatus()}
            </div>
         </main>
         {DailyEntryTable()}
      </>
   );
}

export default Dashboard;