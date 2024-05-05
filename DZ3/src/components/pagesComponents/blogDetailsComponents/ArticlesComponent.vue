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
                <p class="blogDetails__quotes__quote">"</p>
                <p class="blogDetails__quotes__text">The details are not the <br>details.
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
        padding: 20px 227px;
        border-radius: 50px;
        background: rgb(244, 240, 236);
        display: flex;
        flex-direction: column;
        align-items: center;

        &__quote {
            width: 120px;
            height: 120px;
            color: rgb(205, 162, 116);
            font-family: $fontTitles;
            font-style: italic;
            font-size: 200px;
            font-weight: 400;
            line-height: 110%;
            letter-spacing: 4px;
            text-align: start;
        }

        &__text {
            color: rgb(205, 162, 116);
            font-family: $fontTitles;
            font-style: italic;
            font-size: 25px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
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