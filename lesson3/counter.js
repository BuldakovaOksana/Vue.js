// Задание 1 (тайминг 20 минут)
// 1. Создание простого счетчика: Создайте компонент
// счетчика, который имеет кнопку "+" и кнопку "-", и
// отображает текущее значение счетчика. При нажатии на
// кнопки счетчик должен увеличиваться или уменьшаться
// соответственно.

const counter = {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increnent() {
            this.counter++
        },
        decrement() {
            this.counter--
        }
    },
    template: `
    <div>
        <button @click="increnent"> + </button>
        <button @click="decrement"> - </button>
        <span> {{counter}} </span>
    </div>
    `
}

