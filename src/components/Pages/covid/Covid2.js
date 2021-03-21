import {useState,useEffect} from 'react';
import axios from "axios";
var lugar="Honduras";
let lugares=["Honduras","El Salvador"];
function eleccion(arg){
    lugar=arg;
    console.log(lugar);

}
function Covid (){
    var dato="d";
    
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country',
        params: {name: lugar},
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIAPI_API_KEY,
          'x-rapidapi-host': process.env.REACT_APP_RAPIAPI_API_HOST
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
        console.log(response.data[0].country);
      
      }).catch(function (error) {
          console.error(error);
      });
    
   
    return(
        <section>
            <h1>COVID PAGE</h1>
            <ul>
            <li onClick="eleccion('Honduras')">{lugares[0]}</li>
            <li onClick="eleccion('El Salvador')">{lugares[1]}</li>
            </ul>
        </section>
         
    );
    
    
}

export default Covid;