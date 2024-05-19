<template>
    <section class="project center">
        <h2 class="project__title">Follow Our Projects</h2>
        <p class="project__text">
            It is a long established fact that a reader will be distracted by the of
            readable content of page lookings at its layouts points.
        </p>
        <div class="project__contener">
            <div v-for="item in projectItems" :key="item.id" class="project__item">
                <img :src="require('@/assets/img/' + item.img)" alt="project1" />
                <div class="project__item__content">
                    <div class="project__item__content-contener">
                        <h3 class="project__item__content-title">{{ item.title }}</h3>
                        <p class="project__item__content-text">{{ item.text }}</p>
                    </div>
                    <router-link to="/Project">
                        <svg class="project__item__content-img"  width="70.000000" height="70.000000" viewBox="0 0 70 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <circle id="Ellipse 4" cx="35.000000" cy="35.000000" r="35.000000"
                                transform="rotate(-180 35 35)" fill="#F4F0EC" fill-opacity="1.000000" />
                            <path id="Vector" d="M32 44L40 35L32 26" stroke="#292F36" stroke-opacity="1.000000"
                                stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projectItems: [
                {
                    id: 0,
                    img: "project1.png",
                    title: "Modern Kitchan",
                    text: "Decor / Artchitecture",
                },
                {
                    id: 1,
                    img: "project2.png",
                    title: "Modern Kitchan",
                    text: "Decor / Artchitecture",
                },
                {
                    id: 2,
                    img: "project3.png",
                    title: "Modern Kitchan",
                    text: "Decor / Artchitecture",
                },
                {
                    id: 3,
                    img: "project4.png",
                    title: "Modern Kitchan",
                    text: "Decor / Artchitecture",
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.project {
    margin-top: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
        margin-bottom: 8px;
        color: $colorTitles;
        font-family: $fontTitles;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: center;
    }

    &__text {
        color: $colorText;
        font-family: $fontText;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: center;
        margin-bottom: 93px;
        max-width: 737px;
    }

    &__contener {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 56px;
    }

    &__item {
        &__content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 24px;
        }

        &__content-title {
            color: $colorTitles;
            font-family: $fontTitles;
            font-size: 25px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
        }

        &__content-text {
            margin-top: 4px;
            color: $colorText;
            font-family: $fontText;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
        }

        &__content-img:hover circle{
            fill:#CDA274;
            fill-opacity: 0.3
        }

    }
}
</style>