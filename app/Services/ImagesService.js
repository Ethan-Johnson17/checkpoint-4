import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";



class ImagesService {

    async getImage() {
        const res = await sandboxApi.get('images/')
        ProxyState.image = res.data.largeImgUrl
    }
}

export const imagesService = new ImagesService()