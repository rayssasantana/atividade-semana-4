import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../styles/Cadastro.css";

function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function cadastrar(data) {
        console.log(data);
    }

    return (
        <main className="mt-4 min-vh-100">
            <Container>
                <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
                    <h1 className="fw-bold">Cadastro</h1>
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
                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                        <input
                            type="date"
                            id="dataNascimento"
                            className="form-control"
                            {...register("dataNascimento")}
                        />
                    </div>
                    <div>
                        <label htmlFor="senha">Senha</label>
                        <input type={"password"} id={"senha"} className={"form-control"}
                            {...register("senha", {
                                required: "A senha é obrigatória!",
                                minLength: { value: 6, message: "Mínimo de 6 caracteres." },
                                maxLength: { value: 10, message: "Máximo de 10 caracteres." }
                            })}
                        />
                        {errors.senha && <small className="invalid">{errors.senha.message}</small>}
                    </div>
                    <div className="div-cadastro">
                        <Button className="mt-2 w-100" type="submit">Cadastrar</Button>
                    </div>
                    <div className="div-cadastro-google">
                        <Button className="mt-2 w-100" type="button">Entrar com o Google</Button>
                    </div>
                </form>
            </Container>
        </main>
    );
}

export default Cadastro;