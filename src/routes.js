import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
//Criar/Entrar
import Login from './pages/Login';
import Criar from './pages/Criar';
import Jogos from './pages/Jogos';
/////////////

//Jogos
import Asteroid from "pages/Games/Asteroid";
import Snake from "pages/Games/Snake";
import Pacman from "pages/Games/Pacman";
////////////
import Ranking from "pages/Ranking/indes";
import Error from "pages/Error";

//Componentes
import Header from './componentes/Header';
import Footer from './componentes/Footer';
////////////

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element = { <Home/> }/>
                <Route path="/login" element = { <Login/> }/>
                <Route path="/criar" element = { <Criar/> }/>
                <Route path="/ranking" element = { <Ranking/> }/>
                <Route path="/jogos" element = { <Jogos/> }/>
                <Route path="/asteroid" element = { <Asteroid/> }/>
                <Route path="/snake" element = { <Snake/> }/>
                <Route path="/pacman" element = { <Pacman/> }/>

                <Route path="*" element = { <Error/> }/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;