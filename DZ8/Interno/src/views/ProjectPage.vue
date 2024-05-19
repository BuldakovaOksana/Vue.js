<template>
    <HeaderComponent />
    <BannerComponent />
    <ProjectsComponent />
    <FooterComponent />
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import BannerComponent from '../components/pagesComponents/ProjectComponents/BannerComponent.vue';
import ProjectsComponent from '../components/pagesComponents/ProjectComponents/ProjectsComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    components: {
        HeaderComponent,
        BannerComponent,
        ProjectsComponent,
        FooterComponent,
    }
}
</script>

<style lang="scss" scoped></style>