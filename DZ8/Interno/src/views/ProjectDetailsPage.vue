<template>
  <HeaderComponent />
  <BannerComponent />
  <ProjectDetailsComponents />
  <CarouselComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import BannerComponent from '../components/pagesComponents/ProjectDetailsComponents/BannerComponent.vue';
import ProjectDetailsComponents from '../components/pagesComponents/ProjectDetailsComponents/ProjectDetailsComponents.vue';
import CarouselComponent from '../components/pagesComponents/ProjectDetailsComponents/CarouselComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ProjectDetailsComponents,
    CarouselComponent
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";
</style>