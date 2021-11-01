import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";



class QuotesService {

    async getQuote() {
        const res = await sandboxApi.get('quotes/')
        ProxyState.quote = res.data
    }
}

export const quotesService = new QuotesService()