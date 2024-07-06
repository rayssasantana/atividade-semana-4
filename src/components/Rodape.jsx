import "../styles/Rodape.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.png";

function Rodape() {
    const textoRodape = "Rayssa Santana. Todos os direitos reservados."
    
    return (
        <footer className="caixa-rodape">
            <a href="https://github.com/rayssasantana" target="_blank">
                <img src={github} alt="Github Logo" />
            </a>
            <a href="https://www.linkedin.com/in/rayssantana/" target="_blank">
                <img src={linkedin} alt="Linkedin Logo" />
            </a>
            <p className="texto-rodape">&copy; {textoRodape}</p>
        </footer>
    );
}

export default Rodape;


