<template>
  <div class="item__box">
    <div v-for="project in projects" :key="project.id" class="item">
      <img class="item__img" :src="require('../../../assets/img/' + project.image)" alt="item img">
      <div class="item__content">
        <div class="item__content__info">
          <h3 class="item__content__info-title">{{ project.title }}</h3>
          <p class="item__content__info-text">{{ project.text }}</p>
        </div>
        <a href="#" class="item__content__next">
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

        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    projects: Object
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
    max-width: 585px;
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
    }
  }
}
</style>