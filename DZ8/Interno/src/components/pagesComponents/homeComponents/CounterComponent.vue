<template>
  <div class="counter center">
    <div v-for="(item, index) in counterItem" :key="index" class="counter__item">
      <h2 class="counter__item__title">{{ item.title }}</h2>
      <p class="counter__item__text">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counterItem: [
        {
          title: '12',
          text: 'Years Of Experiance'
        },
        {
          title: '85',
          text: 'Success Project'
        },
        {
          title: '15',
          text: 'Active Project'
        },
        {
          title: '95',
          text: 'Happy CUstomers'
        }
      ]
    }
  },

}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.counter {
  background: rgb(244, 240, 236);
  margin-top: 95px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &__item {
    border-right: 1px solid #cda274;
    padding-right: 77px;
    margin-top: 151px;
    margin-bottom: 151px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    &:last-child {
      border-right: none;
      padding-right: 0;
    }

    &__title {
      color: rgb(205, 162, 116);
      font-family: $fontTitles;
      font-size: 85px;
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
  }
}
</style>