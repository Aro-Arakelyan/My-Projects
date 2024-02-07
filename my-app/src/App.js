import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { router } from "./constants/router";
import { Eighteenth } from "./pages/Eighteenth";
import { Eighth } from "./pages/Eighth";
import { Eleventh } from "./pages/Eleventh";
import { Fifteenth } from "./pages/Fifteenth";
import { Fifth } from "./pages/Fifth";
import { First } from "./pages/First";
import Footer from "./pages/Footer";
import { Fourteenth } from "./pages/Fourteenth";
import { Fourth } from "./pages/Fourth";
import Header from "./pages/Header";
import { Home } from "./pages/Home";
import { Ninth } from "./pages/Ninth";
import { Second } from "./pages/Second";
import { Seventeenth } from "./pages/Seventeenth";
import { Seventh } from "./pages/Seventh";
import { Sixteenth } from "./pages/Sixteenth";
import { Sixth } from "./pages/Sixth";
import { Tenth } from "./pages/Tenth";
import { Third } from "./pages/Third";
import { Thirteenth } from "./pages/Thirteenth";
import { Twelfth } from "./pages/Twelfth";


function App() {
    return (
        <BrowserRouter>
            <Header/>
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
            <Footer />
        </BrowserRouter>
    );
}

export default App;


