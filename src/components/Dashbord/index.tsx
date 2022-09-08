import { Link } from "react-router-dom";
import { Container } from "./style";
import ImgNormal from "../../assets/imgs/Normal.jpg";
import ImgLegendary from "../../assets/imgs/Legendary.png";

export function Dashboard() {
    return(
        <Container>
        <Link to="/Legendary"><img src={ImgLegendary} id="Legendary" /></Link>
        <span id="Leg">Legendary</span>
        <Link to="/Normal"><img src={ImgNormal} id="Normal"/></Link>
        <span id="Nor">Normal</span>
        </Container>
    )
}