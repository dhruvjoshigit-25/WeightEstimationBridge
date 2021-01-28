import React from "react";
import { Chart, BarChart } from "react-charts";
import * as d3 from "d3";
// import image4 from "../img/4.jpg";
// import image5 from "../img/5.jpg";
// import image6 from "../img/6.jpg";
// import LineChart from "react-linechart";
// import ApexCharts from 'react-apexcharts';
// import { Line } from "react-chartjs-2";
import dataBook from "./chart-data.csv" ;
import realBook from "./book.csv";

const PerformanceGraphs = () => {

   function time_vs_avgWeight() {

      function MyChart() {
         const data = React.useMemo(
            () => [
               {
                  label: 'Series 1',
                  data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
               }
               // {
               //    label: 'Series 2',
               //    data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
               // }
            ],
            []
         )
         const axes = React.useMemo(
            () => [
               { primary: true, type: 'linear', position: 'bottom' },
               { type: 'linear', position: 'left' }
            ],
            []
         )
         return (
            <>
               <div style={{
                  width: "100%",
                  height: "65vh"
               }}>
                  <Chart data={data} axes={axes} />
               </div>
            </>
         );
      };

      return (
         <MyChart />
      );


   };

   function time_vs_weightIn() {

      function MyChart() {
         const data = React.useMemo(
            () => [
               // {
               //    label: 'Series 1',
               //    data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
               // }
               {
                  label: 'Series 2',
                  data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]],
                  color: 'red'
               }
            ],
            []
         )
         const axes = React.useMemo(
            () => [
               { primary: true, type: 'linear', position: 'bottom' },
               { type: 'linear', position: 'left' }
            ],
            []
         )
         return (
            <>
               <div style={{
                  width: "100%",
                  height: "65vh"
               }}>
                  <Chart data={data} axes={axes} />
               </div>
            </>
         );
      };

      // function MyChart() {
      //    const [data, setData] = React.useState([]);
      //    const [loading, setLoading] = React.useState(true);

      //    React.useEffect(() => {
      //       d3.csv("./chart-data.csv").then((d) => {
      //          setData(d);
      //          setLoading(false);
      //       });
      //       return () => undefined;
      //    }, []);

      //    return (
      //       <div className="App">
      //          <header className="App-header">
      //             {loading && <div>loading</div>}
      //             {!loading && <BarChart data={data} />}
      //          </header>
      //       </div>
      //    );
      // }

      return (
         <MyChart />
      );


   };

   function time_vs_weightOut() {

      function MyChart() {
         const data = React.useMemo(
            () => [
               {
                  label: 'Series 1',
                  data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]],
                  color: 'green'
               }
               // {
               //    label: 'Series 2',
               //    data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
               // }
            ],
            []
         )
         const axes = React.useMemo(
            () => [
               { primary: true, type: 'linear', position: 'bottom' },
               { type: 'linear', position: 'left' }
            ],
            []
         )
         return (
            <>
               <div style={{
                  width: "100%",
                  height: "65vh"
               }}>
                  <Chart data={data} axes={axes} />
               </div>
            </>
         );
      };

      // function MyChart() {
      //    const [data, setData] = React.useState([]);
      //    const [loading, setLoading] = React.useState(true);

      //    React.useEffect(() => {
      //       d3.csv("./chart-data.csv").then((d) => {
      //          setData(d);
      //          setLoading(false);
      //       });
      //       return () => undefined;
      //    }, []);

      //    return (
      //       <div className="App">
      //          <header className="App-header">
      //             {loading && <div>loading</div>}
      //             {!loading && <BarChart data={data} />}
      //          </header>
      //       </div>
      //    );
      // }

      return (
         <MyChart />
      );


   };

   return (
      <>
         <h4 class="p-2 pl-md-4">Time - Average weight</h4>
         {time_vs_avgWeight()}

         <h4 class="p-sm-4 pt-md-5">Time - Weight in</h4>
         {time_vs_weightIn()}

         <h4 class="p-sm-4 pt-md-5">Time - Weight out</h4>
         {time_vs_weightOut()}

         {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
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
         </div> */}
      </>
   );
};

export default PerformanceGraphs;