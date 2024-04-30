const app = {
  data() {
    br = '<br />';
    return {
      articls: [
        {
          img: "blog_image_1.jpeg",
          textImg: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction <br>Work",
          data: "26 December,2022",
        },
        {
          img: "blog_image_2.jpeg",
          textImg: "Living Design",
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          data: "26 December,2022",
        },
        {
          img: "blog_image_3.jpeg",
          textImg: "Interior Design",
          title: "Best For Any Office & Business Interior <br>Solution",
          data: "26 December,2022",
        },
      ],
    };
  },
};
Vue.createApp(app).mount("#app");
