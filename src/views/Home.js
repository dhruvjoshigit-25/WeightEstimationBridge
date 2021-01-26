import React from 'react';
import "../css/Home.css"
import { Link, withRouter } from "react-router-dom";
import BridgeImg from "../img/Home/bridge.jpg";

const Home = () => {
   return (
      <>
         <div class="container">
            <h1 class="text-center font-weight-bold mt-sm-5 mt-4 col-12">Weight Estimation on Bridge</h1>
            <br></br>
            <div class="col-12 p-3">
               <div class="row">
                  <div class="col-md-6">
                     <img src={BridgeImg} width="100%"></img>
                  </div>
                  <div class="col-md-6 pt-5 pt-sm-0">
                     <p>
                        This project focuses on calculating the weight on a bridge and operating the gates and also perform statistical analysis on the obtained weights.
                  </p>
                     <p>
                        This project deals with estimation of weight on bridges and autonomously closing the gates when a certain threshold is reached. This also includes carrying out statistical analysis of the calculated weights such as weight in , weight out , average weight , peak hours , maximum weight etc.
                  </p>
                     <p>
                        The project will be completed using ReactJs, Django, OpenCV, Lua Script and ChartJs.
                  </p>
                     <p>
                        For measuring the weight load cells will be used at the time of building new bridges and for already made bridges Image Processing will be used to estimate the weight.
                  </p>
                  </div>
               </div>
            </div>

         </div>
      </>
   );
};

export default Home;