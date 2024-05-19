<template>
    <section class="blog center">
        <div class="blogDetails">
            <div v-for="item in filterActive" :key="item.id" class="blogDetails__contentClic">
                <h2 class="blogDetails__contentClic__title">{{ item.title }}</h2>
                <img class="blogDetails__contentClic__img" :src="require('@/assets/img/' + item.img)" alt="content img">
                <div class="blogDetails__contentClic__data">
                    <p class="blogDetails__contentClic__data-data">26 December,2022</p>
                    <p class="blogDetails__contentClic__data-nav">Interior / Home / Decore</p>
                </div>
                <p class="blogDetails__contentClic__text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable.<br><br>

                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary.
                </p>
            </div>
            <div class="blogDetails__quotes">
                <p class="blogDetails__quotes__quote">
                    <svg width="73.000000" height="55.000000" viewBox="0 0 73 55" fill="none"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path id="“"
                            d="M65.24 1.42Q62.03 -0.4 57.79 -0.4Q53.66 -0.4 50.57 1.39Q48.87 2.37 47.49 3.89Q46.25 5.26 45.41 6.83Q43.58 10.22 43.58 14.59Q43.58 18 45.78 21.67Q47.49 24.55 49.93 26.52Q50.63 27.08 51.4 27.58L57.01 31.77Q56.84 32.19 56.66 32.59Q54.27 37.94 50.27 42.57Q45.98 47.59 41 50.82L43 54.19Q54.03 48.58 62.19 40.19Q63.06 39.3 63.9 38.37Q68.16 33.67 70.34 28.14Q72.59 22.42 72.59 15.81Q72.59 9.39 69.52 5.24Q69.04 4.59 68.49 3.99Q67.02 2.42 65.24 1.42ZM24.03 1.42Q20.82 -0.4 16.58 -0.4Q12.45 -0.4 9.36 1.39Q7.66 2.37 6.28 3.89Q5.04 5.26 4.2 6.83Q2.37 10.22 2.37 14.59Q2.37 18 4.57 21.67Q6.28 24.55 8.72 26.52Q9.42 27.08 10.19 27.58L15.8 31.77Q15.63 32.19 15.45 32.59Q13.05 37.94 9.06 42.57Q4.77 47.59 -0.21 50.82L1.79 54.19Q12.82 48.58 20.97 40.19Q21.85 39.3 22.69 38.37Q26.95 33.67 29.13 28.14Q31.38 22.42 31.38 15.81Q31.38 9.39 28.31 5.24Q27.83 4.59 27.28 3.99Q25.81 2.42 24.03 1.42Z"
                            fill="#CDA274" fill-opacity="1.000000" fill-rule="evenodd" />
                    </svg>

                </p>
                <p class="blogDetails__quotes__text">The details are not the details.
                    <br>They make the design.
                </p>
            </div>
            <div v-for="item in filtrAthere" :key="item.id" class="blogDetails__content">
                <h2 class="blogDetails__content__title">{{ item.title }}</h2>
                <p class="blogDetails__content__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered.</p>
                <div v-for="item in pointsNum" :key="item.id" class="blogDetails__content__points">
                    <p class="blogDetails__content__points-num">{{ item }}</p>
                    <p class="blogDetails__content__points-text">
                        Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered.
                    </p>
                </div>
                <img class="blogDetails__content__img" :src="require('@/assets/img/' + item.img)" alt="content">
                <p class="blogDetails__content__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered.</p>
            </div>
        </div>
        <div class="tegs">
            <h4 class="tegs__title">Tags</h4>
            <div class="tegs__buttons">
                <button @click="filterArticles(item)" v-for="item in tegs" :key="item.title" class="tegs__buttons__item"
                    :class="{ 'tegs__buttons__item__noActive': !item.active, 'tegs__buttons__item__active': item.active }">
                    {{ item.title }}
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {

        return {

            filterActive: [
                {
                    id: 0,
                    title: 'Let’s Get Solution for Building Construction Work',
                    img: "article_1.jpg",
                    tag: "Kitchen",
                },
            ],
            filtrAthere: [
                {
                    id: 4,
                    title: 'Design sprints are great',
                    img: "article_1_1.jpg",
                    tag: "Kitchen Planning",
                },
            ],
            teg: "",
            item: "",
            contentsArticles: [
                {
                    id: 0,
                    title: 'Let’s Get Solution for Building Construction Work',
                    img: "article_1.jpg",
                    tag: "Kitchen",
                },
                {
                    id: 1,
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    img: "image_2.jpg",
                    tag: "Bedroom",
                },
                {
                    id: 2,
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    img: "image_3.jpg",
                    tag: "Building",
                },
                {
                    id: 3,
                    title: 'Best For Any Office & Business Interior Solution',
                    img: "image_4.jpg",
                    tag: "Architecture",
                },
                {
                    id: 4,
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    img: "article_1_1.jpg",
                    tag: "Kitchen Planning",
                },
                {
                    id: 5,
                    title: 'Best For Any Office & Business Interior Solution',
                    img: "image_2.jpg",
                    tag: "Bedroom",
                }
            ],
            tegs: [
                {
                    id: 0,
                    title: 'Kitchen'
                },
                {
                    id: 1,
                    title: 'Bedroom'
                },
                {
                    id: 2,
                    title: 'Building'
                },
                {
                    id: 3,
                    title: 'Architecture'
                },
                {
                    id: 4,
                    title: 'Kitchen Planning'
                },
                {
                    id: 5,
                    title: 'Bedroom'
                }
            ],
            pointsNum: [1, 2, 3],

        }
    },
    methods: {
        filterArticles(item) {
            this.tegs.forEach(i => i.active = false);

            item.active = !item.active

            this.teg = item.title
            this.filterActive = this.contentsArticles.filter(item => item.tag === this.teg)
            this.filtrAthere = this.contentsArticles.filter(item => item.tag !== this.teg)
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.blog {
    display: flex;
    margin-top: 200px;
    gap: 57px;
}

.blogDetails {
    max-width: 800px;
    margin-bottom: 96px;

    &__contentClic {
        &__title {
            max-width: 684px;
            color: $colorTitles;
            font-family: $fontTitles;
            font-size: 50px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
        }

        &__img {
            margin-top: 11px;
            border-radius: 50px;
        }

        &__data {
            margin-top: 46px;
            padding-right: 70px;
            color: $colorText;
            font-family: $fontText;
            font-size: 16px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
            text-transform: capitalize;
            justify-content: space-between;
            display: flex;
            align-items: center;
            gap: 409px;
        }

        &__text {
            margin-top: 48px;
            max-width: 780px;
            color: $colorText;
            font-family: $fontText;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
        }
    }

    &__quotes {
        max-width: 799px;
        margin-top: 35px;
        padding: 53px 0px;
        border-radius: 50px;
        background: rgb(244, 240, 236);
        display: flex;
        flex-direction: column;
        align-items: center;

        &__quote {
            padding-top: 30px;
            margin-bottom: 10px;
        }

        &__text {
            color: rgb(205, 162, 116);
            font-family: $fontTitles;
            font-style: italic;
            font-size: 25px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: center;
        }
    }

    &__content {
        margin-top: 27px;

        &__title {
            margin-bottom: 20px;
            color: $colorTitles;
            font-family: $fontTitles;
            font-size: 50px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
        }

        &__text {
            color: $colorText;
            font-family: $fontText;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
        }

        &__points {
            margin-top: 24px;
            margin-bottom: 32px;
            display: flex;
            align-items: flex-start;
            gap: 14px;
        }

        &__points-num {
            color: rgb(205, 162, 116);
            font-family: $fontTitles;
            font-size: 20px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
        }

        &__points-text {
            max-width: 713px;
            color: $colorText;
            font-family: $fontText;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
        }

        &__img {
            border-radius: 50px;
            margin-bottom: 35px;
        }
    }
}

.tegs {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &__title {
        color: $colorTitles;
        font-family: $fontTitles;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: left;
    }

    &__buttons {
        display: flex;
        row-gap: 11px;
        column-gap: 10px;
        flex-wrap: wrap;

        &__item {
            padding: 9px 30px;
            border-radius: 10px;
            border: none;
            font-family: $fontText;
            font-size: 18px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: center;

            &__active {
                background: rgb(41, 47, 54);
                color: rgb(255, 255, 255);
            }

            &__noActive {
                background: rgb(244, 240, 236);
                color: $colorText;
            }
        }
    }
}
</style>