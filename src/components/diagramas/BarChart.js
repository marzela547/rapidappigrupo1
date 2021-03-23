import React from "react";
import { __DATA__ } from "./data";
import {
  Number,
  BlackLine,
  MakeBar
} from "./styles";

function BarChart({apiData}) {
  let datos=[];
  let factor = 1;
  let suma= 1;

  if(apiData.length>0){
   apiData.map((o)=>{
     factor=100/o.confirmed;
     suma = (o.confirmed + o.critical + o.deaths + o.recovered);
     console.log(suma);
      datos=
      [
        {label: "Confirmados", y: o.confirmed, colors: __DATA__[0].colors},
        {label: "Críticos", y: o.critical, colors: __DATA__[1].colors},
        {label: "Muertes", y: o.deaths, colors: __DATA__[2].colors},
        {label: "Recuperados", y: o.recovered, colors: __DATA__[3].colors}
      ]
    });
  }
  return (
    <section className="container mb-12 w-5/6  lg:max-w-lg h-96 m-auto flex flex-col justify-end bg-white rounded-lg ">
      <section className="maincontainer flex justify-between lg:w-full h-full">
        {datos.map(({ label, y, colors }, i) => {
            return (
              <section className="flex flex-col justify-end items-center sm:w-3/4 " key={i}>
                <Number className="sm:text-sm" color={colors[1]}>{((y/suma)*100).toFixed()} % {label} </Number>
                <MakeBar height={((y/suma)*100).toFixed()} colors={colors}/>
              </section>
            );
          })}
      </section>
      <BlackLine className="sm:w-3/4"/>
    </section>
  );
}

export default BarChart;