import { ProxyState } from "../AppState.js"

function _draw() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById('clock').innerHTML = `<p class="text-light text-big text-shadow">${time}</p>`

}

function interval() {
    setInterval(_draw, 1000)
}

export class ClockController {
    constructor() {
        ProxyState.on('image', _draw)

        interval()
    }
}