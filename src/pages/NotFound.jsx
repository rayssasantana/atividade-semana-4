import { Button, Container, Figure } from "react-bootstrap";
import "../styles/NotFound.css";
import erro from "../assets/erro.png";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="nf-main min-vh-100">
            <Container className="nf-caixa mt-5">
                <Figure className="figure-caixa">
                    <Figure.Image
                        width={500}
                        height={500}
                        alt="171x180"
                        src={erro}
                    />
                    <Figure.Caption>
                        <h2>Erro 404 - Página não encontrada</h2>
                        <p>Desculpe, ocorreu um erro, a página solicitada não foi encontrada!</p>
                    </Figure.Caption>
                    <Link className="nf-botao" to="/">
                        <Button >Voltar para a Home</Button>
                    </Link>
                </Figure>
            </Container>
        </main>
    );
}

export default NotFound;
