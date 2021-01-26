import React from "react";

import Blink from 'react-blink-text';

const ManualGateControl = () => {

   const tweight_value = (props) => {
      return (
         <span> {props.value} </span>
      );
   };

   const GateControls = () => {
      const Bridge = (props) => {
         return (
            <span class="bridge-name">{props.name}</span>
         );
      };
      return (
         <>
            <div class="container " className="GateControls">

               <div class="p-3">
                  <div class="input-group p-2">
                     <div class="input-group-prepend">
                        <div class="input-group-text">Current Weight</div>
                     </div>
                     <input type="text" class="form-control" placeholder="Weight..." value="251.059 kg" aria-label="Input group example" aria-describedby="btnGroupAddon"></input>
                  </div>
                  <div class="input-group p-2">
                     <div class="input-group-prepend">
                        <div class="input-group-text">Bridge Name</div>
                     </div>
                     <input type="text" class="form-control" placeholder="Weight..." value="Some name" aria-label="Input group example" aria-describedby="btnGroupAddon"></input>
                  </div>
               </div>

               <div class="card border-danger m-5">
                  <div class="card-header">Important notice</div>
                  <div class="card-body text-danger">
                     {/* <h5 class="card-title">Danger card title</h5> */}
                     <p class="card-text">Do not close or open the gates manually unless extreamly necessary</p>
                  </div>
               </div>

               <div class="row manual-buttons ml-md-5 mr-md-5">

                  <div class="col-md-12 text-center pl-3 pr-3 pb-3">
                     Bridge-side : <Bridge name=" Thane - Mulund" />
                  </div>

                  {/* <div class="input-group mt-5 mb-5">
                     <div class="input-group-prepend">
                        <div class="input-group-text btn-dark text-white bg-dark pl-5 pr-5">Gate 1</div>
                     </div>
                     <input type="text" class="form-control" placeholder="Status" value="Closing . . ." aria-label="Input group example" aria-describedby="btnGroupAddon"></input>
                  </div> */}

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
                        <div class="col-12 text-left ml-3">
                           <p class="font-italic">Gate status : Closing . . .  </p>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-12 text-center">
                     <div class="row">
                        <div class="col-md-6">
                           <button class="btn btn-lg btn-secondary">Signal Status</button>
                        </div>
                        <div class="col-md-2">
                           <button class="btn btn-lg btn-outline-danger signal-status font-weight-bold" disabled>
                              <Blink color='red' text='Red' fontSize='20'>Red</Blink>
                           </button>
                        </div>
                        <div class="col-md-2">
                           <button class="btn btn-lg btn-outline-warning signal-status" disabled>Yellow</button>
                        </div>
                        <div class="col-md-2">
                           <button class="btn btn-lg btn-outline-success signal-status" disabled>Green</button>
                        </div>
                     </div>
                  </div>

                  <div class="col-md-12 text-center p-3 pt-5">
                     Bridge-side : <Bridge name="Mulund - Thane" />
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
                        <div class="col-12 text-left ml-3">
                           <p class="font-italic">Gate status : Open  </p>
                        </div>
                     </div>
                  </div>


                  <div class="col-md-12 text-center">
                     <div class="row">
                        <div class="col-md-6">
                           <button class="btn btn-lg btn-secondary ">Signal Status</button>
                        </div>
                        <div class="col-md-2">
                           <button class="btn btn-lg btn-outline-danger signal-status" disabled>Red</button>
                        </div>
                        <div class="col-md-2">
                           <button class="btn btn-lg btn-outline-warning signal-status" disabled>Yellow</button>
                        </div>
                        <div class="col-md-2">
                           <button class="btn btn-lg btn-outline-success signal-status font-weight-bold" disabled><Blink color='green' text='Green' fontSize='20'>Green</Blink></button>
                        </div>
                     </div>
                  </div>

               </div>



            </div>
         </>
      )
   };

   return (
      <>
         <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-4 pb-2 mb-3 border-bottom">
            <h1 class="h2">Manual Gate Controls</h1>
         </div>
         {GateControls()}
      </>
   );
};

export default ManualGateControl;