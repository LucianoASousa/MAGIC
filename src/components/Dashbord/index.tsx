import { Link } from "react-router-dom";
import { Container } from "./style";

export function Dashboard() {
    return(
        <Container>
        <Link to="/Legendary"><img src="src/assets/imgs/Legendary.png" id="Legendary" /></Link>
        <Link to="/Normal"><img src="src/assets/imgs/Normal.jpg" id="Normal"/></Link>
        </Container>
    )
}