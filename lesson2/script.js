// . Вы разрабатываете страницу для отображения
// информации о товаре. У вас есть объект product, который
// содержит информацию о товаре, включая название, цену
// и URL изображения товара. Вам необходимо отобразить
// эту информацию на странице с использованием v-bind.
// 2. Добавьте кнопку, которая будет изменять цену товара. При
// нажатии на кнопку должна генерироваться скидка на
// товар от 1 до 20% и обновиться цена товара в
// соответствии с значением скидки

// const app = {
//     data() {
//         return {
//             isDisabled: false,
//             product: {
//                 title: "product",
//                 price: 1000,
//                 image: "https://img.freepik.com/free-photo/cute-kitten-sitting-looking-at-camera-surrounded-by-beautiful-flowers-generated-by-artificial-intelligence_25030-63226.jpg?w=1380&t=st=1714407556~exp=1714408156~hmac=b2fa73038dac317ea971936936d66b7b34c154614cb333d99b2102398c6f2113",
//             },
//             discount: null
//         }
//     },
//     methods: {
//         addDiscount() {
//             const discount = Math.floor(Math.random() * 20 +1)
//             this.product.price = this.product.price - (this.product.price * discount / 100)
//             this.isDisabled = true
//         }
//     },

// }

// Вы разрабатываете простое приложение для отображения списка пользователей. У вас есть массив объектов users, где каждый объект представляет одного пользователя с его именем и возрастом. Вам необходимо отобразить каждого пользователя из массива в виде списка на странице.


// const app = {
//     data() {
//         return {
//             users : [
//                 {
//                     id: 1,
//                     name: "John",
//                     age: 25
//                 },
//                 {
//                     id: 2,
//                     name: "Jane",
//                     age: 30
//                 },
//                 {
//                     id: 3,
//                     name: "Peter",
//                     age: 40
//                 },
//                 {
//                     id: 4,
//                     name: "Mary",
//                     age: 28
//                 }
//             ]
//         }
//     }
// }


// 1. Вы разрабатываете приложение для создания списка
// покупок. У вас есть массив объектов items, где каждый
// объект представляет товар с его названием и
// количеством. Вам необходимо отобразить список товаров,
// предоставить возможность изменять количество каждого
// товара и отмечать товары, которые уже куплены.


// const app = {
//     data() {
//         return {
//             items: [
//                 {
//                     id: 1,
//                     name: "milk",
//                     count: 1,
//                 },
//                 {
//                     id: 2,
//                     name: "bread",
//                     count: 2,
//                 },
//                 {
//                     id: 3,
//                     name: "cheese",
//                     count: 3,
//                 },
//                 {
//                     id: 4,
//                     name: "meat",
//                     count: 4,
//                 },
//                 {
//                     id: 5,
//                     name: "eggs",
//                     count: 5,
//                 }
//             ],
//         }
//     },
// }

// Вы разрабатываете приложение для управления списком контактов.
// У вас есть форма с полями "Имя", "Фамилия" и "Email", где
// пользователь может вводить информацию о новом контакте. После
// добавления контакта он должен отображаться в списке контактов.
// Требуется связать форму с данными и отображать список контактов
// на странице.

const app = {
    data() {
        return {
            fistname: '',
            lastname: '',
            email: '',
            contacts: [

            ],
        }
    },
    methods: {
        addContacts() {
            const contact = {
                id: this.contacts.length + 1,
                fistname: this.fistname,
                lastname: this.lastname,
                email: this.email,
            }
            this.contacts.push(contact)
            this.fistname = ''
            this.lastname = ''
            this.email = ''
        },
        deleteContact(id) {
            this.contacts = this.contacts.filter((contact) => contact.id !== id)
        }
    },
}
Vue.createApp(app).mount("#app")