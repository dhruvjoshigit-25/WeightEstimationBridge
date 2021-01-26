import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import PerformanceGraphs from "./components/PerformanceGraphs.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import SideBar from "./components/SideBar";
import GateControls from "./components/GateControls"
import Dashboard from './Dashboard';
import ManualGateControl from './ManualGateControl';

const App = () => {

   return (
      <div className="App">
         <Router>
            {Header()}
            <div class="container-fluid">
               <div class="row">
                  {SideBar()}
                  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                     <Switch>
                        <Route path="/" exact component={() => <Dashboard />} ></Route>
                        <Route path="/ManualGateControl" exact component={() => <ManualGateControl />} ></Route>
                     </Switch>
                  </main>
               </div>
            </div>
            {Footer()}
         </Router>
      </div>
   );
};

export default App;