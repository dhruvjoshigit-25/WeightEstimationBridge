import React from 'react';

import "../index.css";
import PerformanceGraphs from "../components/PerformanceGraphs.js";
import profilePic from "../img/profile_pic.png";

const Dashboard = () => {

   return (
      <>
         <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-4 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
               <div class="btn mr-2">
                  <button type="button" class="btn btn-sm btn-outline-dark">Edit Profile</button>
               </div>
            </div>
         </div>

         <div id="handler-details">

            <form id="handler-detail-form">

               <div class="row mb-3">
                  <label for="h-name" class="col-sm-2 col-form-label">First name</label>
                  <div class="col-sm-8">
                     <input type="text" class="form-control" id="h-name" value="Poonam" ></input>
                  </div>
               </div>
               <div class="row mb-3">
                  <label for="h-name" class="col-sm-2 col-form-label">Last name</label>
                  <div class="col-sm-8">
                     <input type="text" class="form-control" id="h-name" value="Kumari" ></input>
                  </div>
               </div>

               <div class="row mb-3">
                  <label for="h-name" class="col-sm-2 col-form-label">Profile image</label>
                  <div class="col-sm-8">
                     {/* <input type="text" class="form-control" id="h-name" value="Kumari Poonam" ></input> */}
                     <img src={profilePic} width="100"></img>
                  </div>
               </div>

               <div class="row mb-3">
                  <label for="h-username" class="col-sm-2 col-form-label">Username</label>
                  <div class="col-sm-8">
                     <input type="text" class="form-control" id="h-username" value="poonam.kumari" ></input>
                  </div>
               </div>

               <div class="row mb-3">
                  <label for="h-email" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-8">
                     <input type="email" class="form-control" id="h-email" value="kumari.p@somaiya.edu"></input>
                  </div>
               </div>

               <div class="row mb-3">
                  <label for="h-location" class="col-sm-2 col-form-label">Address</label>
                  <div class="col-sm-8">
                     <input type="text" class="form-control" id="h-location" value="Somhere address here, Thane, Maharashtra"></input>
                  </div>
               </div>

               <div class="row mb-3">
                  <label for="h-b-location" class="col-sm-2 col-form-label">Bridge location</label>
                  <div class="col-sm-8">
                     <input type="text" class="form-control" id="h-b-location" value="Thane"></input>
                  </div>
               </div>

               <div class="row mb-3">
                  <label for="h-b-name" class="col-sm-2 col-form-label">Bridge name</label>
                  <div class="col-sm-8">
                     <input type="text" class="form-control" id="h-b-name" value="Name of bridge here"></input>
                  </div>
               </div>

               {/* <fieldset class="row mb-3">
                  <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                  <div class="col-sm-8">
                     <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
                        <label class="form-check-label" for="gridRadios1">
                           First radio
                        </label>
                     </div>
                     <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                        <label class="form-check-label" for="gridRadios2">
                           Second radio
                        </label>
                     </div>
                     <div class="form-check disabled">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled></input>
                        <label class="form-check-label" for="gridRadios3">
                           Third disabled radio
                        </label>
                     </div>
                  </div>
               </fieldset>
               <div class="row mb-3">
                  <div class="col-sm-10 offset-sm-2">
                     <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1"></input>
                        <label class="form-check-label" for="gridCheck1">
                           Example checkbox
                        </label>
                     </div>
                  </div>
               </div>
               <button type="submit" class="btn btn-primary">Sign in</button> */}
            </form>

         </div>
      </>
   );
};

export default Dashboard;