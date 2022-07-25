import { Link } from "react-router-dom";
import { Container } from "./style";

export function Dashboard() {
    return(
        <Container>
        <Link to="/Legendary"><img src="https://github.com/LucianoASousa/MAGIC/blob/main/src/assets/imgs/Legendary.png" /></Link>
        <Link to="/Normal"><img src="https://github.com/LucianoASousa/MAGIC/blob/main/src/assets/imgs/Normal.jpg" id="Normal"/></Link>
        </Container>
    )
}