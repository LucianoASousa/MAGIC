import { Link } from "react-router-dom";
import { Container } from "./style";

export function Dashboard() {
    return(
        <Container>
        <Link to="/Legendary"><img src="https://i.pinimg.com/564x/cc/9b/30/cc9b300866e9525103b70c84c5b8e7e4.jpg" id="Legendary" /></Link>
        <Link to="/Normal"><img src="https://mcdn.wallpapersafari.com/medium/43/47/Kw0eD4.png" id="Normal"/></Link>
        </Container>
    )
}