import { useState } from "react";
import api from "../../services/api";
import { Container } from "./style";

export enum LegalityGames {
    LEGAL = "legal",
    NOT_LEGAL = "not_legal"
}

export enum LegalityTypes {
    SORCERY = "Sorcery",
    INSTANT = "Instant",
    LAND = "Land",
}

export function PlayButton() {

    const [card, setCard] = useState();
    const [card2, setCard2] = useState();

    const fetch = async () => {
        const response = await api.get("/cards/random")
        const card = response.data
        const types = card.type_line.split(' — ')

        if(card.legalities.historic === LegalityGames.LEGAL 
            && types[0] !== LegalityTypes.SORCERY 
            && types[0] !== LegalityTypes.LAND 
            && types[0] !== LegalityTypes.INSTANT ) {
            setCard(card.image_uris.normal)
            fetch2()
            return card
        }

        fetch()
        console.log("Fetching another card")
    }
    
    const fetch2 = async () => {
        const response = await api.get("/cards/random")
        const card = response.data
        const types = card.type_line.split(' — ')

        if(card.legalities.historic === LegalityGames.LEGAL 
            && types[0] !== LegalityTypes.SORCERY 
            && types[0] !== LegalityTypes.LAND 
            && types[0] !== LegalityTypes.INSTANT ) {
            setCard2(card.image_uris.normal)
            return card
        }

        fetch2()
        console.log("Fetching another card")
    }

    
    
    
    return(
        <Container>
            <img id="primeira" src={card} />
            <img id="segunda" src={card2} />
            <div>
                <button type="button" onClick={fetch}>
                    Play
                </button>
            </div> 
        </Container>
    )
} 