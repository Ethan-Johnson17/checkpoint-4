import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Task } from "./Models/Task.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Task').Task[]} */
  tasks = []

  completedTasks = []

  image = null

  quote = null

  weather = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
