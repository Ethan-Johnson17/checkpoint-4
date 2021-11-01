import { quotesService } from "../Services/QuotesService.js";
import { ProxyState } from "../AppState.js"


function _drawQuote() {
    const quote = ProxyState.quote
    let template =
        `<span class="reveal"><p class="mb-0">'${quote.content}'</p>
        <p class="hide mt-0">-${quote.author}</p></span>`
    document.getElementById('quote').innerHTML = template
}



export class QuotesController {
    constructor() {
        this.getQuote()
        ProxyState.on('quote', _drawQuote)

    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error("[Weather Error]", error)
        }
    }
}