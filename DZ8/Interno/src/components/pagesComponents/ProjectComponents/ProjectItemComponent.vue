<template>
  <div class="item__box">
    <div v-for="project in paginatedProducts" :key="project.id" v-on:dblclick="addLike(project)" class="item">
      <div class="item__img">
        <img class="item__img__img" :src="require('../../../assets/img/' + project.image)" alt="item img">
        <svg :class="[project.like ? 'item__img__svg' : 'item__img__nosvg']" width="35.000000" height="34.000000"
          viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
            Created with Pixso.
          </desc>
          <defs>
            <filter id="filter_993_156_dd" x="-0.813477" y="-0.568542" width="35.626953" height="34.361877"
              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
              <feOffset dx="0" dy="4" />
              <feGaussianBlur stdDeviation="1.33333" />
              <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect_dropShadow_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow_1" result="shape" />
            </filter>
          </defs>
          <g filter="url(#filter_993_156_dd)">
            <path id="Star 3"
              d="M18.9 0.8L20.79 6.6C21.06 7.43 21.83 7.98 22.69 7.98L28.8 7.98C30.75 7.98 31.55 10.47 29.98 11.6L25.06 15.15C24.35 15.66 24.05 16.57 24.32 17.4L26.21 23.16C26.81 25 24.71 26.53 23.14 25.4L18.17 21.81C17.47 21.31 16.52 21.31 15.82 21.81L10.85 25.4C9.28 26.53 7.18 25 7.78 23.16L9.67 17.4C9.94 16.57 9.64 15.66 8.93 15.15L4.02 11.6C2.44 10.47 3.24 7.98 5.19 7.98L11.3 7.98C12.16 7.98 12.93 7.43 13.2 6.6L15.09 0.8C15.7 -1.03 18.29 -1.03 18.9 0.8Z"
              fill="#FFA928" fill-opacity="1.000000" fill-rule="nonzero" />
          </g>
        </svg>
      </div>
      <div class="item__content">
        <div class="item__content__info">
          <h3 class="item__content__info-title">{{ project.title }}</h3>
          <p class="item__content__info-text">{{ project.text }}</p>
        </div>
        <router-link to="/ProjectDetails" href="#" class="item__content__next">
          <svg width="70.000000" height="70.000000" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
              Created with Pixso.
            </desc>
            <defs />
            <circle id="Ellipse" cx="35.000000" cy="35.000000" r="35.000000" fill="#F4F0EC" fill-opacity="1.000000" />
            <path id="Vector" d="M32 44L40 35L32 26" stroke="#292F36" stroke-opacity="1.000000" stroke-width="2.000000"
              stroke-linejoin="round" stroke-linecap="round" />
          </svg>

        </router-link>
      </div>
    </div>

  </div>
</template>
<script>
export default {

  props: {
    projects: Object,
    itemPerPage: Number,

  },
  methods: {
    addLike(item) {
      console.log(item.like);
      item.like = !item.like
      console.log(item.like);
    },
    getCurrentPageNumber() {
      const pageNumberParam = parseInt(this.$route.params.pageNumber)
      return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
    },
  },
  computed: {
    paginatedProducts() {
      const pageNumber = this.getCurrentPageNumber();
      const startIndex = (pageNumber - 1) * this.itemPerPage;
      const endIndex = startIndex + this.itemPerPage;
      return this.projects.slice(startIndex, endIndex);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.item__box {
  margin-top: 61px;
  column-count: 2;
  gap: 30px;

}

.item {
  page-break-inside: avoid;
  break-inside: avoid;
  margin-bottom: 35px;
  max-width: 585px;

  &__img {
    position: relative;

    &__img {
      max-width: 585px;
    }

    &__svg {
      display: block;
      position: absolute;
      right: 1px;
      top: 5px;
    }

    &__nosvg {
      display: none
    }

  }


  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    &__info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    &__info-title {
      color: $colorTitles;
      font-family: $fontTitles;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 2%;
      text-align: left;
    }

    &__info-text {
      color: $colorText;
      font-family: $fontText;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 1%;
      text-align: left;
    }

    &__next {
      display: block;

      &:hover circle {
        fill: #CDA274;
        fill-opacity: 0.2
      }
    }
  }
}
</style>