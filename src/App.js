import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Covid from './components/Pages/covid/Covid';
import BarChart from './components/diagramas/BarChart';
import DatosExtra from './components/Pages/covid/datosextras';
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
        <section className="flex justify-around my-auto">
          <Covid setData={setAppiData}></Covid>
          <BarChart apiData={appState.data}></BarChart>
        </section>
      </section>
    </Router>
  );
}

export default App;
