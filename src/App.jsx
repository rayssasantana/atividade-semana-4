import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <>
            <BrowserRouter>
                <Cabecalho />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/contato" element={<Contato />}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Rodape />
            </BrowserRouter>
        </>
    );
}

export default App;



// App antigo

// function App() {
//     return (
//         <main>
//         <Cabecalho deslogado={true}/>
//         <Banner />
//         <Galeria />
//         <Rodape />
//         </main>
//     );
// }

// export default App;