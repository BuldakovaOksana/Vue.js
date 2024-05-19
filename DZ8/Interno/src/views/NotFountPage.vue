<template>
    <HeaderComponent />
    <section class="banner">
        <div class="banner__content">
            <h1 class="banner__content__title">404</h1>
            <p class="banner__content__text">We are sorry, but the pageyou requested was not found</p>
            <router-link to="/" href="#" class="banner__content__button">
                Back To Home
                <svg width="18.000000" height="16.000000" viewBox="0 0 18 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <desc>
                        Created with Pixso.
                    </desc>
                    <defs />
                    <path id="Vector" d="M0.85 7.43L14.58 7.29M9.47 0.91L16 7.43L9.34 14.08" stroke="#CDA274"
                        stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" />
                </svg>
            </router-link>
        </div>
        <div class="banner__image">
            <img src="@/assets/img/banner404.jpeg" alt="banner image">
        </div>
    </section>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
    components: {
        HeaderComponent,

    }
}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.banner {
    padding-left: calc(50% - 600px);
    max-width: 1563px;
    display: flex;
    gap: 81px;
    margin-top: 45px;

    &__content {
        margin-top: 275px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &__title {
            width: 569px;
            color: rgb(205, 162, 116);
            font-family: $fontTitles;
            font-size: 250px;
            font-weight: 400;
            line-height: 96%;
            letter-spacing: 0%;
            text-align: left;
        }

        &__text {
            color: $colorTitles;
            font-family: $fontTitles;
            font-size: 35px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
            margin-bottom: 40px;
        }

        &__button {
            display: block;
            padding: 26px 54px;
            border-radius: 18px;
            box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
            background: rgb(41, 47, 54);
            color: rgb(255, 255, 255);
            font-family: $fontText;
            font-size: 18px;
            font-weight: 600;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: center;
        }
    }
}
</style>