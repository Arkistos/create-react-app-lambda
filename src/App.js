import './App.css';
import {Link, Outlet, Route, Routes} from 'react-router-dom';
import Versets from './Versets';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='versets' element={<Versets/>}/>
        </Route>
      </Routes>
    </div>
  );
}

function Layout(){
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/versets'>Versets</Link>
      </nav>
      <Outlet/>
    </div>
    );
}

function Home(){
  return(<h2>Bienvenu</h2>)
}



export default App;

