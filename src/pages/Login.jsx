import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../styles/Login.css";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function entrar(data) {
        console.log(data);
    }

    return (
        <main className="mt-4 min-vh-100">
            <Container>
                <form className="form-section" onSubmit={handleSubmit(entrar)}>
                    <h1 className="fw-bold">Login</h1>
                    <hr />
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
                    <div className="div-login">
                        <Button className="mt-2 w-100" type="submit">Entrar</Button>
                    </div>
                    <div className="div-login-google">
                        <Button className="mt-2 w-100" type="button">Entrar com o Google</Button>
                    </div>
                </form>
            </Container>
        </main>
    );
}

export default Login;