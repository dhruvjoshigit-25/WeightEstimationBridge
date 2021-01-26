import React from "react";

const GateControls = () => {

   const Bridge = (props) => {
      return (
         <p>{props.name}</p>
      );
   };

   return (
      <>
         <div class="container">
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

export default GateControls;