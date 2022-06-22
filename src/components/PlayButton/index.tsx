import api from "../../services/api";
import { Container } from "./style";

export enum LegalityType {
    LEGAL = "legal",
    NOT_LEGAL = "not_legal"
}

export function PlayButton() {
    
    const fetch = async () => {
        const response = await api.get("/cards/random")
        const card = response.data
        const types = card.type_line.split(' — ')

        if(card.legalities.historic === LegalityType.LEGAL && types[0] !== 'Sorcery' && 'Instant') {
            console.log(card)
            
            return card
        }

        fetch()
        console.log("Fetching another card")
    }

    
    return(
        <Container>
            <div>
                <button type="button" onClick={fetch}>
                    play
                </button>
            </div>
            
        </Container>
    )
} 