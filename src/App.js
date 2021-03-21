import logo from './logo.svg';
import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Covid from './components/Pages/covid/Covid';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <section>
        <BrandHeader></BrandHeader>
        <Covid></Covid>
      </section>
    </Router>
  );
}

export default App;
