import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";
import { Task } from "../Models/Task.js"

class TasksService {
    constructor() {
        console.log('Task Service is here');
    }

    async getTasks() {
        const res = await sandboxApi.get('ethan/todos')
        const tasks = res.data.map(t => new Task(t))
        ProxyState.tasks = tasks
    }

    async createTask(taskData) {
        console.log('creating task', taskData)
        const res = await sandboxApi.post('ethan/todos', taskData)
        console.log(res.data)
        const task = new Task(res.data)
        ProxyState.tasks = [...ProxyState.tasks, task]
        console.log('Task added')

    }

    async completedTask(id) {
        const task = ProxyState.tasks.find(t => t.id == id)
        task.completed = !task.completed
        console.log('completed')
        const res = await sandboxApi.put('ethan/todos/' + task.id, task)
        ProxyState.tasks = ProxyState.tasks
    }
    async deleteTask(id) {
        console.log('delete', id)
        await sandboxApi.delete('ethan/todos/' + id)
        console.log('sandbox')
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)

    }
}

export const tasksService = new TasksService()