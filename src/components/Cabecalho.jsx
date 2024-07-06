import "../styles/Cabecalho.css";
import logo from "../assets/logo.png";

function Cabecalho(props) {

    return (
        <header className="cabecalho-caixa">
            <img src={logo} alt="Logo Rayssa"/>
            <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Projetos</a>
            <a href="#">Contato</a>
            {props.deslogado && <button className="cabecalho-botao" onClick={() => alert('Mude o valor da propriedade <deslogado={true}> (no componente App) para <deslogado={false}>')}>Entrar</button>}
            </nav>
        </header>
    );
}

export default Cabecalho;
