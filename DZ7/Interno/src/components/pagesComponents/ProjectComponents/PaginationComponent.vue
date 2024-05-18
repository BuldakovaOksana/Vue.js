<template>
  <div class="pagination">
    <a href="#" class="pagination__link">01</a>
    <a href="#" class="pagination__link">02</a>
    <a href="#" class="pagination__link">03</a>
    <a href="#" class="pagination__link">></a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.pagination {
  margin-top: 61px;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  gap: 20px;

  &__link {
    display: block;

    width: 52px;
    height: 52px;
    color: $colorText;
    font-family: $fontText;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    text-transform: capitalize;
    box-sizing: border-box;
    border: 1px solid rgb(205, 162, 116);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
  }

  &__link:first-child {
    background: rgb(244, 240, 236);
    border: none;
  }
}
</style>