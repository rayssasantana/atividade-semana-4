import "../styles/Rodape.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.png";

function Rodape() {
    const textoRodape = "Rayssa Santana. Todos os direitos reservados."
    
    return (
        <footer className="caixa-rodape py-4 px-4">
            <a href="https://github.com/rayssasantana" target="_blank">
                <img src={github} alt="Github Logo" />
            </a>
            <a href="https://www.linkedin.com/in/rayssantana/" target="_blank">
                <img src={linkedin} alt="Linkedin Logo" />
            </a>
            <p className="texto-rodape mt-auto mb-auto">&copy; {textoRodape}</p>
        </footer>
    );
}

export default Rodape;
