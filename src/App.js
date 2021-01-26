import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import PerformanceGraphs from "./components/PerformanceGraphs.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import SideBar from "./components/SideBar";
// import GateControls from "./components/GateControls"
import Dashboard from './views/Dashboard';
import ManualGateControl from './views/ManualGateControl';
import Home from "./views/Home";
import Login from './views/Login';
import SignUp from './views/SignUp';
import Analysis from './views/Analysis';

const App = () => {

   return (
      <div className="App">
         <Router>
            {Header()}
            <Switch>
               <Route path="/" exact component={() => <Home />} ></Route>
               <Route path="/Login" exact component={() => <Login />} ></Route>
               <Route path="/Login" exact component={() => <Login />} ></Route>
               <Route path="/Signup" exact component={() => <SignUp />} ></Route>
               <div class="container-fluid">
                  <div class="row">
                     {SideBar()}
                     <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <Switch>
                           <Route path="/Dashboard" exact component={() => <Dashboard />} ></Route>
                           <Route path="/" exact component={() => <Home />} ></Route>
                           <Route path="/ManualGateControl" exact component={() => <ManualGateControl />} ></Route>
                           <Route path="/Analysis" exact component={() => <Analysis />}></Route>
                        </Switch>
                     </main>
                  </div>
               </div>
            </Switch>
            {Footer()}
         </Router>
      </div>
   );
};

export default App;