<template>
  <section class="lastPost center">
    <h2 class="lastPost__title">Latest Post</h2>
    <div class="lastPost__content">
      <img src="@/assets/img/LatestPost.png" alt="Latest Post" />
      <div class="lastPost__content__text">
        <h3 class="lastPost__content__text-title">
          Low Cost Latest Invented Interior <br>Designing Ideas
        </h3>
        <p class="lastPost__content__text-text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam <br>eu sem vitae turpis
          dignissim maximus.posuere in.Contrary to popular belief.
          <br /><br />
          Lorem Ipsum is not simply random text. It has <br>roots in a piece of
          classica.
        </p>
        <div class="lastPost__content__text-data">
          <p class="lastPost__content__text-data-date">
            26 December,2022
          </p>
          <router-link to="/BlogDetails" class="lastPost__content__text-data-next" href="#">
            <svg width="52.000000" height="52.000000" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>Created with Pixso.</desc>
              <defs />
              <circle id="Ellipse" cx="26.000000" cy="25.500000" r="26.000000" fill="#F4F0EC" fill-opacity="1.000000" />
              <path id="Vector" d="M23.77 32.18L29.71 25.49L23.77 18.81" stroke="#292F36" stroke-opacity="1.000000"
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

}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.lastPost {
  margin-top: 200px;

  &__title {
    margin-bottom: 27px;
    color: $colorTitles;
    font-family: $fontTitles;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
  }

  &__content {
    box-sizing: border-box;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    padding: 22px;
    display: flex;
    align-items: center;
    gap: 65px;

    &__text {
      max-width: 489px;
    }

    &__text-title {
      margin-bottom: 22px;
      color: $colorTitles;
      font-family: $fontTitles;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 2%;
      text-align: left;
    }

    &__text-text {
      margin-bottom: 41px;
      color: $colorText;
      font-family: $fontText;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 1%;
      text-align: left;
    }

    &__text-data {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__text-data-date {
      color: $colorText;
      font-family: $fontText;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 1%;
      text-align: left;
      text-transform: capitalize;
    }

    &__text-data-next {
      display: block;

      &:hover circle {
        fill: #CDA274;
        fill-opacity: 0.2
      }
    }
  }
}
</style>