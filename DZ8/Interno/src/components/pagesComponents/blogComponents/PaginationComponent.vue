<template>
  <div v-if="totolPages > 1" class="pagination">
    <router-link class="pagination__link" :class="{ pagination__linkActive: pageNumber == getCurrentPageNumber }"
      v-for="pageNumber in totolPages" :key="pageNumber" :to="createPageLink(pageNumber)">{{ pageNumber }}
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  computed: {
    ...mapGetters(["totolPages"]),
    getCurrentPageNumber() {
      const pageNumberParam = parseInt(this.$route.params.pageNumber)
      return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
    },

  },
  methods: {
    createPageLink(pageNumber) {
      return `/Blog/${pageNumber}`
    },

  }
}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.pagination {
  margin-top: 51px;
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