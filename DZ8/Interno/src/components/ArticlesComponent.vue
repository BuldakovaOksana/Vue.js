<template>
  <div class="articls">
    <div v-for="item in paginatedProducts " :key="item.id" class="articls__item">
      <div class="articls__item-imgContener">
        <img :src="require('../assets/img/' + item.img)" alt="article" />
        <p class="articls__item-tag">{{ item.textImg }}</p>
      </div>
      <div class="articls__item-content">
        <h3 v-html="item.title" class="articls__item-title"></h3>
        <div class="articls__item-data">
          <p class="articls__item-data-data">{{ item.data }}</p>
          <router-link to="/BlogDetails" class="articls__item-data-next">
            <svg width="52.000000" height="52.000000" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                Created with Pixso.
              </desc>
              <defs />
              <circle id="Ellipse 4" cx="25.500000" cy="25.266968" r="26.000000" fill="#F4F0EC"
                fill-opacity="1.000000" />
              <path id="Vector" d="M23.27 31.95L29.21 25.26L23.27 18.58" stroke="#292F36" stroke-opacity="1.000000"
                stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, } from 'vuex';
export default {
  props: ['itemPerPage'],
  computed: {
    ...mapState(["articls"]),

    paginatedProducts() {
      const pageNumber = this.getCurrentPageNumber();
      const startIndex = (pageNumber - 1) * this.itemPerPage;
      const endIndex = startIndex + this.itemPerPage;
      return this.articls.slice(startIndex, endIndex);
    },

  },
  methods: {
    getCurrentPageNumber() {
      const pageNumberParam = parseInt(this.$route.params.pageNumber)
      return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.articls {
  display: flex;
  flex-wrap: wrap;
  column-gap: 23px;
  row-gap: 30px;

  &__item {
    padding: 21px;
    box-sizing: border-box;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);

    &:hover {
      background: #f4f0ec;
    }

    &:hover circle {
      fill: white;
    }
  }

  &__item-imgContener {
    position: relative;
    border-radius: 45px 45px 0px 0px;

  }

  &__item-imgContener img {

    border-radius: 45px 45px 0px 0px;

  }

  &__item-tag {
    position: absolute;
    top: 228px;
    left: 20px;
    border-radius: 8px 8px 8px 0px;
    background: rgb(255, 255, 255);
    padding: 8px 10px;
    color: $colorText;
    font-family: $fontText;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
    text-transform: capitalize;
  }

  &__item-content {

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__item-title {
    max-width: 305px;
    margin-bottom: 20px;
    color: $colorTitles;
    font-family: $fontTitles;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
  }

  &__item-data {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item-data-data {
    color: $colorText;
    font-family: $fontText;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
    text-transform: capitalize;
  }

  &__item-data-next:hover circle {
    fill: #CDA274;
    fill-opacity: 0.1
  }
}
</style>