import "../styles/Galeria.css";
import cod1 from "../assets/cod1.png";
import cod2 from "../assets/cod2.png";
import cod3 from "../assets/cod3.png";
import cod4 from "../assets/cod4.png";
import cod5 from "../assets/cod5.png";
import cod6 from "../assets/cod6.png";
import cod7 from "../assets/cod7.png";
import cod8 from "../assets/cod8.png";
import CardGaleria from "./CardGaleria";

const projetos = [
    {
        cod: 1, 
        imagem: cod1, 
        nome: "Portfólio Website", 
        descricao: "Site pessoal moderno para exibir projetos e habilidades profissionais.",
        botao: "Ver projeto",
    },
    {
        cod: 2, 
        imagem: cod2, 
        nome: "Blog CMS", 
        descricao: "Loja online com carrinho de compras, pagamentos e administração de produtos.",
        botao: "Ver projeto",
    },
    {
        cod: 3, 
        imagem: cod3, 
        nome: "Chat em Tempo Real", 
        descricao: "Aplicativo de chat com WebSockets e autenticação de usuários.",
        botao: "Ver projeto",
    },
    {
        cod: 4, 
        imagem: cod4, 
        nome: "Rede Social", 
        descricao: "Rede social com posts, comentários, likes e sistema de amigos.",
        botao: "Ver projeto",
    },
    {
        cod: 5, 
        imagem: cod5, 
        nome: "Gerenciador de Tarefas", 
        descricao: "Aplicativo para gerenciar tarefas com categorias e prioridades.",
        botao: "Ver projeto",
    },
    {
        cod: 6, 
        imagem: cod6, 
        nome: "Dashboard de Dados", 
        descricao: "Painel interativo com visualização de dados em gráficos dinâmicos.",
        botao: "Ver projeto",
    },
    {
        cod: 7, 
        imagem: cod7, 
        nome: "Aplicativo de Clima", 
        descricao: "App de previsão do tempo com integração a APIs de clima.",
        botao: "Ver projeto",
    },
    {
        cod: 8, 
        imagem: cod8, 
        nome: "Sistema de Reservas", 
        descricao: "Sistema para reservar e gerenciar agendamentos de serviços.",
        botao: "Ver projeto",
    },
];

function Galeria() {
    const cardsProjeto = projetos.map((projeto) => {
        return <CardGaleria key={projeto.cod} imagem={projeto.imagem} nome={projeto.nome} descricao={projeto.descricao} botao={projeto.botao} />
    });

    return (
        <>
            <h2 className="galeria-titulo">Meus Projetos</h2>
            <section className="galeria-caixa">{cardsProjeto}</section>
        </>
    );
};

export default Galeria;