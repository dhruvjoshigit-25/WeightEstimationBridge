import React from "react";
// import { Chart, Line, Bar } from "react-charts";
import image4 from "../img/4.jpg";
import image5 from "../img/5.jpg";
import image6 from "../img/6.jpg";

const PerformanceGraphs = () => {

   return (
      <>
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