import { Route, Routes } from 'react-router';
import './App.css';
import { Home} from "./pages/Home";
import { router } from './constants/router';
import { BrowserRouter } from 'react-router-dom';
import { First } from './pages/First';
import { Second } from './pages/Second';
import { Third } from './pages/Third';
import {Fourth} from "./pages/Fourth";


function App() {
  return (
 
    <BrowserRouter>
    <Routes>
      <Route path={router.HOME} element={<Home />} />
      <Route path={router.FIRST} element={<First />} />
      <Route path={router.SECOND} element={<Second />} />
      <Route path={router.THIRD} element={<Third />} />
      <Route path={router.FOURTH} element={<Fourth />} />


    </Routes>
  </BrowserRouter>
 
  );
}

export default App;
