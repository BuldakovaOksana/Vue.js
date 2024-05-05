// Задание 2 (тайминг 30 минут)
// 1. Создайте компонент списка дел, в котором можно
// добавлять и удалять элементы. Каждый элемент списка
// должен иметь кнопку удаления, при нажатии на которую
// элемент списка будет удаляться.

const tasks = {
    data() {
        return {
            tasks: [],
            title: ""
        }
    },
    methods: {
        addtasks() {
            this.tasks.push({
                id: Date.now(),
                title: this.title
            })
            this.title = ""
        },
        removeTasks(id) {
            this.tasks = this.tasks.filter(item => item.id!== id)
        }
    },
    template: `
    <div>
        <input v-model="title" type="text">
        <button @click="addtasks">Добавить</button>
        <ul>
            <li v-for="task in tasks" :key="task.id">{{task.title}}
            <button @click="removeTasks(task.id)">Удалить</button>
            </li>
            
        </ul>
    </div>
    `
}