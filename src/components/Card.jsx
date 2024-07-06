import "../styles/Card.css";


function Card(props) {
    return (
        <article className="card-caixa">
            <img src={props.imagem} />
            <h3>{props.nome}</h3>
            <p>{props.descricao}</p>
            <button>{props.botao}</button>
        </article>
    );
}

export default Card;