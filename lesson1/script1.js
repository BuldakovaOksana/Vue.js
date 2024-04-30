// Установить расширение
// a. Vue VSCode Snippets
// b. Vue Language Features (Volar)
// 2. Создать новый файл index.html, добавить структуру
// 3. Подключить vue к проекту
// 4. Вывести на экран Hello Vue

// const app = new Vue({
//   el: "#app",
//   data: {
//     message: "Vue",
//   },
// });

// const app = new Vue({
//   el: "#app",
//   data: {
//     count: 0,
//     buttons: [
//       { id: 1, text: "Купить", inCart: false },
//       { id: 2, text: "Купить", inCart: false },
//       { id: 3, text: "Купить", inCart: false },
//       { id: 4, text: "Купить", inCart: false },
//     ],
//   },
//   methods: {
//     buyItem(button) {
//       if (!button.inCart) {
//         this.count++;
//         button.inCart = true;
//         button.text = "Товар в корзине";
//       }
//     },
//   },
// });

// new Vue({
//   el: "#app",
//   data: {
//     count: 0,
//     buttons: [
//       { id: 1, text: "Купить", inCart: false },
//       { id: 2, text: "Купить", inCart: false },
//       { id: 3, text: "Купить", inCart: false },
//       { id: 4, text: "Купить", inCart: false },
//     ],
//   },
//   methods: {
//     buyItem(button) {
//         if (!button.inCart) {
//           this.count++;
//           button.inCart = true;
//           button.text = "Товар в корзине";
//         } else {
//           this.count--;
//           button.inCart = false;
//           button.text = "Купить";
//         }
  
//     },
//   },
// });


// new Vue({
//   el:"#app",
//   data: {
//     isAllowed: false
//   },
//   methods: {
//     isOlder() {
//       this.isAllowed = true;
//     },
//     isYounger() {
//       this.isAllowed = false;
//     }
//   },
// })

// const app = new Vue({
//     el: "#app",
//     data: {
//         isAllowed: false
//     },
//     methods: {
//         isOlder() {
//             this.isAllowed = true;
//         },
//         isYounger() {
//             this.isAllowed = false;
//         }
//     },
//   });

// new Vue({
//   el: "#app",
//   data: {
//     isShown: false,
//   },
//   methods: {
//     toggleContent() {
//       this.isShown = !this.isShown;
//     },
//   },
// });

new Vue({
  el: "#app",
  data: {
    number: null,
  },
  methods: {
    generateRandomNum() {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      this.number = randomNumber;
    },
  },
});
