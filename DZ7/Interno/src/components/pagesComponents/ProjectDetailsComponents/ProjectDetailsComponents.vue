<template>
    <div class="ProjectDetails center">
        <div class="ProjectDetails__content">
            <h2 class="ProjectDetails__content__title">{{ title }}</h2>
            <p v-html="text" class="ProjectDetails__content__text"></p>
        </div>
    </div>
    <div class="ProjectDetails__carousel">
        <CarouselComponent />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import CarouselComponent from "./CarouselComponent"
export default {
    computed: {
        ...mapState(["title", "text"])
    },
    components: {
        CarouselComponent
    }
}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.ProjectDetails {
    margin-top: 200px;

    display: flex;
    justify-content: center;

    &__content {
        max-width: 658px;

        &__title {
            color: $colorTitles;
            font-family: $fontTitles;
            font-size: 50px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
        }

        &__text {
            margin-top: 11px;
            color: $colorText;
            font-family: $fontText;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
        }
    }

    &__carousel {
        margin-top: 100px;
        margin-bottom: 200px;
    }
}
</style>