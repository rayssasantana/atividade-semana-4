import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../styles/Contato.css";

function Contato() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function contatar(data) {
        console.log(data);
    }

    return (
        <main className="mt-4 min-vh-100">
            <Container>
                <form className="form-section" onSubmit={handleSubmit(contatar)}>
                    <h1 className="fw-bold">Contato</h1>
                    <hr />
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            className="form-control"
                            {...register("nome", { required: "O nome é obrigatório!" })}
                        />
                        {errors.nome && <small className="invalid">{errors.nome.message}</small>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            {...register("email", { required: "O email é obrigatório!" })}
                        />
                        {errors.email && <small className="invalid">{errors.email.message}</small>}
                    </div>
                    <div>
                        <label htmlFor="feedback">Feedback</label>
                        <textarea
                            id="feedback"
                            className="form-control"
                            {...register("feedback", { required: true })}
                        ></textarea>
                        {errors.feedback && <small className="invalid">O feedback é inválido!</small>}
                    </div>
                    <div className="div-contato">
                        <Button className="mt-2 w-100" type="submit">Enviar</Button>
                    </div>
                </form>
            </Container>
        </main>
    );
}

export default Contato;