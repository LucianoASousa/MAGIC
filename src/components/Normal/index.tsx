import { useState } from "react";
import api from "../../services/api";
import { Container } from "./style";
import ImgButton from "../../assets/imgs/button.png";

export enum LegalityGames {
    LEGAL = "legal",
    NOT_LEGAL = "not_legal"
}

export enum LegalityTypes {
    SORCERY = "Sorcery",
    INSTANT = "Instant",
    LEGENDARYSORCERY = "Legendary Sorcery",
    SNOWSORCERY = "Snow Sorcery",
    LAND = "Land",
    SNOWLAND = "Snow Land",
    LEGENDARYLAND = "Legendary Land",
    BASICSNOWLAND = "Basic Snow Land",
}

export function Normal() {

    const [card, setCard] = useState();
    const [card2, setCard2] = useState();
    const [busy, setBusy] = useState(false);

    const execute = async () => {
        setBusy(true)
        await Promise.all([fetch(), fetch2()])
        setBusy(false)
    }

    const fetch = async () => {
        setBusy(true);

        const response = await api.get("/cards/random",{
            params: {
              q: 'legal:historic',

            }
        })

        const card = response.data
        const types = card.type_line.split(' — ')

        if(    types[0] != LegalityTypes.SORCERY
            && types[0] != LegalityTypes.INSTANT
            && types[0] != LegalityTypes.LEGENDARYSORCERY
            && types[0] != LegalityTypes.SNOWSORCERY
            && types[0] != LegalityTypes.LAND
            && types[0] != LegalityTypes.SNOWLAND
            && types[0] != LegalityTypes.LEGENDARYLAND
            && types[0] != LegalityTypes.BASICSNOWLAND
            ){
            setCard(card.image_uris.normal ?? card.image_uris.large)
            return card
        }

       await fetch()
    }
    
    const fetch2 = async () => {

        const response = await api.get("/cards/random",{
            params: {
              q: 'legal:historic',
            }
        })

        const card = response.data
        const types = card.type_line.split(' — ')

        if(    types[0] != LegalityTypes.SORCERY
            && types[0] != LegalityTypes.INSTANT
            && types[0] != LegalityTypes.LEGENDARYSORCERY
            && types[0] != LegalityTypes.SNOWSORCERY
            && types[0] != LegalityTypes.LAND
            && types[0] != LegalityTypes.SNOWLAND
            && types[0] != LegalityTypes.LEGENDARYLAND
            && types[0] != LegalityTypes.BASICSNOWLAND
            ){
            setCard2(card.image_uris.normal ?? card.image_uris.large)
            return card
        }

        await fetch2()
    }

    if(busy) {
        return (
            <Container>
                <div id="Loading">
                    <img src={ImgButton}/>
                </div>
            </Container>
        )    
    }

    return(
        <Container>
            <img id="First" src={card} />
            <img id="Second" src={card2} />
            <div>
                <button type="button" onClick={execute}>
                    <img src={ImgButton}/>
                </button>
            </div> 
        </Container>
    )
} 