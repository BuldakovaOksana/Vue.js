<template>
  <section class="blogBanner center">
    <div class="blogBanner__content">
      <h1 class="blogBanner__content__title">Our Project</h1>
      <p class="blogBanner__content__text">Home / Project</p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.blogBanner {
  margin-top: 45px;
  background-image: url("@/assets/img/projectBanner.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 356px;

  &__content {
    border-radius: 37px 37px 0px 0px;
    background: rgb(255, 255, 255);
    width: 503px;
    height: 178px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
      color: $colorTitles;
      font-family: $fontTitles;
      font-size: 50px;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0%;
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
  }
}
</style>