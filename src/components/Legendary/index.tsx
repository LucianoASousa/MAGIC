import { useState } from "react";
import api from "../../services/api";
import { Container } from "./style";
import ImgButton from "../../assets/imgs/button.png";

export enum LegalityGames {
    LEGAL = "legal",
    NOT_LEGAL = "not_legal"
}

export enum LegalityTypes {
    LEGENDARYCREATURE = "Legendary Creature",
    LEGENDARYPLANESWALKER = "Legendary Planeswalker",
    LEGENDARYARTIFACT = "Legendary Artifact",
}

export function Legendary() {

    const [card, setCard] = useState();
    const [card2, setCard2] = useState();
    const [busy, setBusy] = useState(false);

    const execute = async () => {
        setBusy(true)
        await Promise.all([fetch(), fetch2()])
        setBusy(false)
    }


    const fetch = async () => {

        const response = await api.get("/cards/random",{
            params: {
              q: 'legal:historic',
            }
        })

        const card = response.data
        const types = card.type_line.split(' — ')

        if(    types[0] == LegalityTypes.LEGENDARYPLANESWALKER
            || types[0] == LegalityTypes.LEGENDARYCREATURE
            || types[0] == LegalityTypes.LEGENDARYARTIFACT
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

        if(    types[0] == LegalityTypes.LEGENDARYPLANESWALKER
            || types[0] == LegalityTypes.LEGENDARYCREATURE
            || types[0] == LegalityTypes.LEGENDARYARTIFACT
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
                    <img src={ImgButton} />
                </button>
            </div> 
        </Container>
    )
} 