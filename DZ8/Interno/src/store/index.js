import { createStore } from "vuex";

export default createStore({
  state: {
    articls: [
      {
        id: 0,
        img: "blog_image_1.jpeg",
        textImg: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction <br>Work",
        data: "26 December,2022",
      },
      {
        id: 1,
        img: "blog_image_2.jpeg",
        textImg: "Living Design",
        title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
        data: "26 December,2022",
      },
      {
        id: 2,
        img: "blog_image_3.jpeg",
        textImg: "Interior Design",
        title: "Best For Any Office & Business Interior <br>Solution",
        data: "26 December,2022",
      },
      {
        id: 3,
        img: "blog_image_4.jpeg",
        textImg: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction <br> Work",
        data: "26 December,2022",
      },
      {
        id: 4,
        img: "blog_image_5.jpeg",
        textImg: "Living Design",
        title: "Low Cost Latest Invented Interior Designing <br> deas.",
        data: "26 December,2022",
      },
      {
        id: 5,
        img: "blog_image_6.jpeg",
        textImg: "Interior Design",
        title: "Best For Any Office & Business Interior <br>Solution",
        data: "26 December,2022",
      },
      {
        id: 6,
        img: "blog_image_6.jpeg",
        textImg: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction <br>Work",
        data: "26 December,2022",
      },
      {
        id: 7,
        img: "blog_image_5.jpeg",
        textImg: "Living Design",
        title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
        data: "26 December,2022",
      },
      {
        id: 8,
        img: "blog_image_4.jpeg",
        textImg: "Interior Design",
        title: "Best For Any Office & Business Interior <br>Solution",
        data: "26 December,2022",
      },
      {
        id: 9,
        img: "blog_image_3.jpeg",
        textImg: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction <br> Work",
        data: "26 December,2022",
      },
      {
        id: 10,
        img: "blog_image_2.jpeg",
        textImg: "Living Design",
        title: "Low Cost Latest Invented Interior Designing <br> deas.",
        data: "26 December,2022",
      },
      {
        id: 11,
        img: "blog_image_1.jpeg",
        textImg: "Interior Design",
        title: "Best For Any Office & Business Interior <br>Solution",
        data: "26 December,2022",
      },
      {
        id: 12,
        img: "blog_image_1.jpeg",
        textImg: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction <br>Work",
        data: "26 December,2022",
      },
      {
        id: 13,
        img: "blog_image_2.jpeg",
        textImg: "Living Design",
        title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
        data: "26 December,2022",
      },
      {
        id: 14,
        img: "blog_image_3.jpeg",
        textImg: "Interior Design",
        title: "Best For Any Office & Business Interior <br>Solution",
        data: "26 December,2022",
      },
      {
        id: 15,
        img: "blog_image_4.jpeg",
        textImg: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction <br> Work",
        data: "26 December,2022",
      },
      {
        id: 16,
        img: "blog_image_5.jpeg",
        textImg: "Living Design",
        title: "Low Cost Latest Invented Interior Designing <br> deas.",
        data: "26 December,2022",
      },
      {
        id: 17,
        img: "blog_image_6.jpeg",
        textImg: "Interior Design",
        title: "Best For Any Office & Business Interior <br>Solution",
        data: "26 December,2022",
      },
    ],
    getArticls: {},
    itemPerPage: 6,
  },

  getters: {
    totolPages(state) {
      return Math.ceil(state.articls.length / state.itemPerPage);
    }, 
  },
});
