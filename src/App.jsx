import Cabecalho from "./components/Cabecalho";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import Rodape from "./components/Rodape";

function App() {
    return (
        <main>
        <Cabecalho deslogado={true}/>
        <Banner />
        <Galeria />
        <Rodape />
        </main>
    );
}

export default App;