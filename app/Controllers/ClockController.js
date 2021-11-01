import { ProxyState } from "../AppState.js"

function _draw() {
    let today = new Date();
    let minutes = String(today.getMinutes()).padStart(2, '0')
    let seconds = String(today.getSeconds()).padStart(2, '0')
    let time = today.getHours() + ":" + minutes + ":" + seconds;
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