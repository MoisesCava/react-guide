import React from "react";
import ReactDOM from "react-dom";
// import { timeDay } from "d3";

import { Chart } from "react-charts";

import useDemoConfig from "./useDemoConfig";
import useLagRadar from "./useLagRadar";
import ResizableBox from "./ResizableBox";
import "./Chart.css";

const MyChart = () => {

  useLagRadar();

  const { data, randomizeData } = useDemoConfig({
    series: 10,
  });

  const series = React.useMemo(
    () => ({
      showPoints: false,
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "time",
        position: "bottom",
        // filterTicks: (ticks) =>
        //   ticks.filter((date) => +timeDay.floor(date) === +date),
      },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <ResizableBox>
        <Chart data={data} series={series} axes={axes} tooltip />
      </ResizableBox>
    </div>
  );
}

export default MyChart;


