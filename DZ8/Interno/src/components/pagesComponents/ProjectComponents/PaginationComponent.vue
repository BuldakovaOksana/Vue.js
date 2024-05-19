<template>
  <div class="pagination">
    <router-link class="pagination__link" :class="{ pagination__linkActive: pageNumber == getCurrentPageNumber }"
      v-for="pageNumber in totolPages" :key="pageNumber" :to="createPageLink(pageNumber)">{{ pageNumber }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    projects: Object,
    itemPerPage: Number,
  },
  computed: {

    getCurrentPageNumber() {
      const pageNumberParam = parseInt(this.$route.params.pageNumber)
      return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
    },
    
    totolPages() {
      return Math.ceil(this.projects.length / this.itemPerPage);
    },

  },
  methods: {
    createPageLink(pageNumber) {
      return `/Project/${pageNumber}`
    },

  }
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

  &__linkActive {
    background: rgb(244, 240, 236);
    border: none;
  }
}
</style>