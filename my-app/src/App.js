import {Route, Routes} from 'react-router';
import './App.css';
import {Home} from "./pages/Home";
import {router} from './constants/router';
import {BrowserRouter} from 'react-router-dom';
import {First} from './pages/First';
import {Second} from './pages/Second';
import {Third} from './pages/Third';
import {Fourth} from "./pages/Fourth";
import {Fifth} from "./pages/Fifth";
import {Sixth} from "./pages/Sixth";
import {Seventh} from "./pages/Seventh";
import {Eighth} from "./pages/Eighth";
import {Ninth} from "./pages/Ninth";
import {Tenth} from "./pages/Tenth";
import {Eleventh} from "./pages/Eleventh";
import {Twelfth} from "./pages/Twelfth";
import {Thirteenth} from "./pages/Thirteenth";
import {Fourteenth} from "./pages/Fourteenth";
import {Fifteenth} from "./pages/Fifteenth";
import {Sixteenth} from "./pages/Sixteenth";
import {Seventeenth} from "./pages/Seventeenth";
import {Eighteenth} from "./pages/Eighteenth";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={router.HOME} element={<Home/>}/>
                <Route path={router.FIRST} element={<First/>}/>
                <Route path={router.SECOND} element={<Second/>}/>
                <Route path={router.THIRD} element={<Third/>}/>
                <Route path={router.FOURTH} element={<Fourth/>}/>
                <Route path={router.FIFTH} element={<Fifth/>}/>
                <Route path={router.SIXTH} element={<Sixth/>}/>
                <Route path={router.SEVENTH} element={<Seventh/>}/>
                <Route path={router.EIGHTH} element={<Eighth/>}/>
                <Route path={router.NINTH} element={<Ninth/>}/>
                <Route path={router.TENTH} element={<Tenth/>}/>
                <Route path={router.ELEVENTH} element={<Eleventh/>}/>
                <Route path={router.TWELFTH} element={<Twelfth/>}/>
                <Route path={router.THIRTEENTH} element={<Thirteenth/>}/>
                <Route path={router.FOURTEENTH} element={<Fourteenth/>}/>
                <Route path={router.FIFTEENTH} element={<Fifteenth/>}/>
                <Route path={router.SIXTEENTH} element={<Sixteenth/>}/>
                <Route path={router.SEVENTEENTH} element={<Seventeenth/>}/>
                <Route path={router.EIGHTEENTH} element={<Eighteenth/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
