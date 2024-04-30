// Часть 2. Задание Vue

// Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).


const app = {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "Телевизор",
                    price: 1000,
                },
                {
                    id: 2,
                    name: "Телефон",
                    price: 7000,
                },
                {
                    id: 3,
                
                    name: "Компьютер",
                    price: 3000,
                },
                {
                    id: 4,
                    name: "Ноутбук",
                    price: 9000,
                },
                {
                    id: 5,
                    name: "Планшет",
                    price: 5000,
                }
            ],
        }
    },
    methods: {
        sortDescending() {
            return this.products.sort((a, b) => b.price - a.price);
        },
        sortAscending() {
            return this.products.sort((a, b) => a.price - b.price);
        },
    },
}
Vue.createApp(app).mount("#app")