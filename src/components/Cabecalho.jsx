import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "../styles/Cabecalho.css";
import logo from "../assets/logo.png";

function Cabecalho() {
    return (
        <header>
            <Navbar className="cabecalho-caixa" expand="md">
                <Container fluid>
                    <Link to="/">
                        <img src={logo} width="100" alt="Logo Rayssa"/>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="nav-caixa ms-auto">
                            <Link className="nav-link m-auto" to="/">Home</Link>
                            <Link className="nav-link m-auto" to="/contato">Contato</Link>
                            <Link className="nav-link m-auto" to="/cadastro">Cadastro</Link>
                            <Link className="nav-link m-auto" to="/login">
                                <Button size="sm">Login</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Cabecalho;


// Navegação antiga

// function Cabecalho(props) {

//     return (
//         <header className="cabecalho-caixa">
//             <img src={logo} alt="Logo Rayssa"/>
//             <nav className="navbar">
//             <a href="#">Home</a>
//             <a href="#">Sobre</a>
//             <a href="#">Projetos</a>
//             <a href="#">Contato</a>
//             {props.deslogado && <button className="cabecalho-botao" onClick={() => alert('Mude o valor da propriedade <deslogado={true}> (no componente App) para <deslogado={false}>')}>Entrar</button>}
//             </nav>
//         </header>
//     );
// }

// export default Cabecalho;
