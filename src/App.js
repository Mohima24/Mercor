import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './page/Dashboard';
import About from './page/About';
import Sidebar from './component/Sidebar';

function App() {

  return (
    <div className="App">
      
      <Sidebar>
        <Routes>
          <Route path ="/" element={<Dashboard/>}/>
          <Route path ="/about" element={<About/>}/>
        </Routes>
      </Sidebar>
        
    </div>
  );

}

export default App;
