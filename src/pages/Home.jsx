import { Container } from "react-bootstrap";
import Galeria from "../components/Galeria";
import Banner from "../components/Banner";


function Home() {
    return (
        <main className="mt-4 min-vh-100">
            <Banner />
            <Container>
                <Galeria />
            </Container>
        </main>
    );
}

export default Home;