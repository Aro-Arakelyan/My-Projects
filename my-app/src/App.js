import { Route, Routes } from 'react-router';
import './App.css';
import { Home} from "./pages/Home";
import { router } from './constants/router';
import { BrowserRouter } from 'react-router-dom';
import { First } from './pages/First';

function App() {
  return (
 
    <BrowserRouter>
    <Routes>
      <Route path={router.HOME} element={<Home />} />
      <Route path={router.FIRST} element={<First />} />

    </Routes>
  </BrowserRouter>
 
  );
}

export default App;
