export class Task {
    constructor(data) {
        this.desc = data.description || ''
        this.completed = data.completed || false
        this.id = data.id || ''
    }

    get Template() {
        return `

        <div class="col-md-12">${this.desc}
            </div>
        `
    }

    get Checkbox() {
        if (!this.desc) {
            return ''
        }

        return `
        <input type="checkbox" ${this.completed ? 'checked' : ''} name="completed" id="completed" onclick="app.tasksController.completedTask()">
      <label for="completed">Completed</label>
        `
    }
}