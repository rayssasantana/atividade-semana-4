import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/CardGaleria.css";


function CardGaleria(props) {
    return (
        <article>
            <Card className="card-caixa" style={{ width: '18rem', height: '26.4rem' }}>
                <Card.Img variant="top" src={props.imagem} />
                <Card.Body className="card-body-caixa">
                    <Card.Title className="card-body-titulo">{props.nome}</Card.Title>
                    <Card.Text className="card-body-texto">{props.descricao}</Card.Text>
                    <Link to="*">
                        <Button variant="info">{props.botao}</Button>
                    </Link>
                </Card.Body>
            </Card>

        </article>
    );
}

export default CardGaleria;