import React from "react";
import { Chart, Line, Bar } from "react-charts";
import image4 from "../img/4.jpg";
import image5 from "../img/5.jpg";
import image6 from "../img/6.jpg";

const PerformanceGraphs = () => {

   return (
      <>
         <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
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

         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
               <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" >
               <div class="carousel-item active">
                  <img src={image4} class="d-block w-100" alt="..." height="100%"></img>
               </div>
               <div class="carousel-item">
                  <img src={image5} class="d-block w-100 bg-dark" alt="..." height="100%"></img>
               </div>
               <div class="carousel-item">
                  <img src={image6} class="d-block w-100 bg-danger" alt="..." height="100%"></img>
               </div>
            </div>
         </div>
      </>
   );
};

export default PerformanceGraphs;