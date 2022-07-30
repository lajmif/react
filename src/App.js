import bgimage from "./components/bg.png";
import Header from './components/Header';
import Second from './components/Second';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  
  <div className="App"> 
            <div style={{ backgroundImage:`url(${bgimage})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", height: "100vh"}}>


    <Header />
    <Second />

   
   
      </div> 
   </div>
  );
}

export default App;
