import {Routes,Route} from 'react-router-dom'
import './App.css';
// import First from './FirstTask/First';
import Home from './SecondTask/Home';
import Task from './SecondTask/Task';
import Nav from './SecondTask/Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element ={ <Home/>}/>
        <Route path='CheckTask' element ={ <Task/>}/>
        
      </Routes>
      {/* <First/> */}
      
    </div>
  );
}

export default App;
