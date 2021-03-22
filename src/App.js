import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Covid from './components/Pages/covid/Covid';
import BarChart from './components/diagramas/BarChart';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <section>
        <BrandHeader></BrandHeader>
        <Covid></Covid>
        <BarChart></BarChart>
      </section>
    </Router>
  );
}

export default App;
