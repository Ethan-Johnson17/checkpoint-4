import { imagesService } from "../Services/ImagesService.js";
import { ProxyState } from "../AppState.js"


function _drawImg() {
    document.getElementById('img').style.backgroundImage = `url('${ProxyState.image}')`
}



export class ImagesController {
    constructor() {
        this.getImage()
        ProxyState.on('image', _drawImg)

    }

    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            console.error("[Image Error]", error)
        }
    }
}