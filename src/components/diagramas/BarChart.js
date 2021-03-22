import React from "react";
import { __DATA__ } from "./data";
import {
  Number,
  BlackLine,
  MakeBar
} from "./styles";

function BarChart() {
  return (
    <section className="container mb-12 mx-auto max-w-lg h-96 flex flex-col justify-end ">
      <section className="maincontainer flex justify-between w-full h-full">
        {__DATA__.map(({ distance, colors }, i) => {
            return (
              <section className="flex flex-col justify-end items-center" key={i}>
                <Number color={colors[1]}>{distance} km</Number>
                <MakeBar height={distance * 2} colors={colors}/>
              </section>
            );
          })}
      </section>
      <BlackLine />
    </section>
  );
}

export default BarChart;