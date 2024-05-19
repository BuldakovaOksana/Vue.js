<template>
    <div class="carousel">
        <Carousel :items-to-show="1" :wrap-around="false">
            <Slide v-for="item in slider" :key="item.id">
                <div class="carousel__item">
                    <img class="carousel__item__img"
                        v-bind:class="{ zoom__activ: item.flag, zoom__noactiv: !item.flag }"
                        :src="require('../../../assets/img/' + item.img)" alt="article" />
                    <button @click="zoomClick(item)" class="zoom" :class="{ nozoom: item.flag }">
                        <svg width="37.000000" height="37.000000" viewBox="0 0 37 37" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Vector"
                                d="M36.43 33.28L28.04 24.89C30.06 22.21 31.15 18.93 31.15 15.57C31.15 6.98 24.16 0 15.57 0C6.98 0 -6.11e-5 6.98 -6.11e-5 15.57C-6.11e-5 24.16 6.98 31.15 15.57 31.15C18.93 31.15 22.21 30.06 24.89 28.04L33.28 36.43C33.71 36.81 34.26 37.01 34.83 36.99C35.4 36.98 35.94 36.74 36.34 36.34C36.74 35.94 36.98 35.4 36.99 34.83C37.01 34.26 36.81 33.71 36.43 33.28ZM4.45 15.57C4.45 13.37 5.1 11.22 6.32 9.39C7.54 7.56 9.28 6.13 11.31 5.29C13.35 4.45 15.58 4.23 17.74 4.66C19.9 5.09 21.88 6.15 23.44 7.7C24.99 9.26 26.05 11.24 26.48 13.4C26.91 15.56 26.69 17.8 25.85 19.83C25.01 21.86 23.58 23.6 21.75 24.82C19.92 26.04 17.77 26.7 15.57 26.7C12.62 26.69 9.79 25.52 7.71 23.43C5.62 21.35 4.45 18.52 4.45 15.57Z"
                                fill="#CDA274" fill-opacity="1.000000" fill-rule="nonzero" />
                        </svg>

                    </button>
                </div>
            </Slide>

            <template #addons>
                <Pagination />
            </template>
        </Carousel>

    </div>
</template>

<script>

import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({

    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data() {

        return {

            slider: [
                {
                    id: 0,
                    img: 'carousel1.jpeg',
                    flag: false,
                },
                {
                    id: 1,
                    img: 'carousel2.jpeg',
                    flag: false,
                },
                {
                    id: 2,
                    img: 'carousel3.jpeg',
                    flag: false,
                }
            ]
        }
    },
    methods: {
        zoomClick(item) {

            item.flag = !item.flag;
        }
    }
})
</script>
<style lang="scss">
:root {
    --vc-pgn-border-radius: 30px;
    --vc-pgn-height: 15px;
    --vc-pgn-width: 15px;
}

.carousel {
    margin-top: 100px;
    margin-bottom: 200px;

    &__item {
        position: relative;

        &__img {
            width: 1201px;
            height: 799px;
            border-radius: 70px;
        }
    }
}

.zoom {
    position: absolute;
    top: 318px;
    left: 535px;
    width: 132px;
    height: 132px;
    border-radius: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(255, 255, 255);
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.25);
    border: none;

    &__activ {
        transform: scale(1.2);
        transition: all 0.3s ease-in-out;
    }

    &__noactiv {
        transform: none;
        transition: all 0.3s ease-in-out;
    }

}

.nozoom {
    opacity: 0.2;
}
</style>