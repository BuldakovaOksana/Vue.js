<template>
  <!-- <HomePage />
  <BlogPage/>
  <BlogDetailsPage />
  <ProjectPage/> -->
    <ProjectDetailsPage />
</template>

<script>



// import HomePage from './pages/HomePage.vue';
// import BlogPage from './pages/BlogPage.vue';
// import BlogDetailsPage from './pages/BlogDetailsPage.vue';
// import ProjectPage from './pages/ProjectPage.vue';
import ProjectDetailsPage from './pages/ProjectDetailsPage.vue';
export default {

  components: {
    // HomePage, 
    // BlogPage,
    // BlogDetailsPage,
    // ProjectPage,
    ProjectDetailsPage,

  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>