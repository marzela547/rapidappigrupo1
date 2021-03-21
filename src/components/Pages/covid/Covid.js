import {useState,useEffect} from 'react';
import getCountryCodeTotal from './CovidApi';
import lugar from './CovidApi';
import firebaseSDK from '../../../FireBaseInit';

function Covid (){
    lugar="Honduras";
    useEffect(
        function(){
            getCountryCodeTotal(
                (err, data)=>{
                    if(err)
                        console.log(err);
                    else
                    {
                        console.log(data);
                        console.log(data[0].country);
                        console.log(data[0].lastChange);
                       
                    }
                        
                }
            )
        }
        
    );

    return(
        <section>
            <h1>COVID PAGE</h1>
            
        </section>
         
    );
    
    
}

export default Covid;