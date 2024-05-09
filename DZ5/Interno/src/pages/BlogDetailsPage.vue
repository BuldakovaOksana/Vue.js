<template>
    <HeaderComponent />
    <BannerComponent />
    <ArticlesComponent />
    <FooterComponent />
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import BannerComponent from '@/components/pagesComponents/blogDetailsComponents/BannerComponent.vue';
import ArticlesComponent from '@/components/pagesComponents/blogDetailsComponents/ArticlesComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    components: {
        HeaderComponent,
        BannerComponent,
        ArticlesComponent,
        FooterComponent,
    }
}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";
</style>