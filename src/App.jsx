import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar';

function App() {
  
  return <>
  <nav className=''>
 <Navbar/>
  </nav>
  <Outlet/>
  </>;
}

export default App;
