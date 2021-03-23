import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Covid from './components/Pages/covid/Covid';
import BarChart from './components/diagramas/BarChart';
import DatosExtra from './components/Pages/covid/datosextras';
import Tables from './components/Pages/covid/tabla';
import { BrowserRouter as Router} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [appState, setAppState]= useState({data: []});

  const setAppiData= (data) =>{
    setAppState({...appState, data})
  }
  return (
    <Router>
      <section className="box-border overflow-hidden">
        <BrandHeader></BrandHeader>
        <DatosExtra></DatosExtra>
        <section className="col justify-around my-auto">
          <section className="flex bg-indigo-900 justify-around">
            <Covid setData={setAppiData}></Covid>
            <Tables></Tables>
          </section>
          <section className="flex">
            <BarChart apiData={appState.data}></BarChart>
            <BarChart apiData={appState.data}></BarChart>
          </section>
        </section>
      </section>
    </Router>
  );
}

export default App;
