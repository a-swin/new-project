import logo from './logo.svg';
import './App.css';
import { Novbar } from './components/Novbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home/Home';
import { Details } from './Home/Details';
import { Icon } from './Home/Icon';
import { Service } from './Home/Service';
import { Car } from './Home/Car';
import { Cermice } from './Home/Cermice';
import { Footer } from './Home/Footer';
import { Foot } from './Home/Foot';

function App() {
  return (
    <div className="App" maxWidth="lg md xs ">
     <Novbar/>
     <Home/>
     <Details/>
    <Icon/>
    <Service/>
    <Car/>
    <Cermice/>
    <Footer/>
    <Foot/>
    </div>
  );
}

export default App;
