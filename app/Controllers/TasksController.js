import { tasksService } from "../Services/TasksService.js"
import { ProxyState } from "../AppState.js";

function _drawTasks() {
    const tasks = ProxyState.tasks
    let template = ''
    let completedTasks = tasks.filter(t => t.completed).length
    tasks.forEach(t => template +=
        `<div class="col-md-12"><input type="checkbox" ${t.completed ? 'checked' : ''} name="completed" id="completed" onclick="app.tasksController.completedTask('${t.id}')">
      ${t.desc} <span onclick="app.tasksController.deleteTask('${t.id}')" class="mdi mdi-delete selectable"></span></div>`)
    template = `<p>${completedTasks} / ${tasks.length}</p>` + template
    document.getElementById('task-list').innerHTML = template
}

function toast(message, type, time = 2000) {
    // @ts-ignore
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: time,
        timerProgressBar: true
    })

    Toast.fire({
        icon: type,
        title: message
    })
}

export class TasksController {
    constructor() {
        this.getTasks()
        ProxyState.on('tasks', _drawTasks)
    }
    async getTasks() {
        try {
            await tasksService.getTasks()
        } catch (error) {
            toast(error.message, 'error')
            console.error("[Sandbox API Error]", error)
        }
    }

    async createTask(desc) {
        try {
            window.event.preventDefault()
            const form = window.event.target
            let taskData = {
                // @ts-ignore
                description: form.description.value,

            }
            await tasksService.createTask(taskData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            toast(error.message, 'error')
            console.error("[Sandbox API Error]", error)
        }
    }

    async completedTask(id) {
        try {
            await tasksService.completedTask(id)
        } catch (error) {
            console.error("[Sandbox API Error]", error.message)
        }
    }

    async deleteTask(id) {
        try {
            let dtl = confirm('You are about to delete a task list! Are you sure?')
            if (dtl == true) {
                await tasksService.deleteTask(id)
            } else {
                ''
            }
        } catch (error) {
            console.error("[Sandbox API Error]", error.message)
        }
    }
}