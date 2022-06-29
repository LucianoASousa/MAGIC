import { useState } from "react";
import api from "../../services/api";
import { Container } from "./style";

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


    const fetch = async () => {
        setBusy(true);

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
            setCard(card.image_uris.normal ?? card.image_uris.png)
            fetch2()

            return card
        }

        fetch()
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
            setCard2(card.image_uris.normal ?? card.image_uris.png)

            setBusy(false);
            return card
        }

        fetch2()
    }

        if(busy) {
            return (
                <Container>
                    <div id="Loading">
                        <span className="icon"></span>
                    </div>
                </Container>
            )    
        }

    return(
        <Container>
            <img id="First" src={card} />
            <img id="Second" src={card2} />
            <div>
                <button type="button" onClick={fetch}>
                    <img src="src/assets/imgs/button.png" />
                </button>
            </div> 
        </Container>
    )
} 