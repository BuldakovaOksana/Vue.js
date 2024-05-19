<template>
  <header class="header center">
    <router-link to="/" class="header__logo">
      <img src="@/assets/img/Logo.png" alt="logo" />
      <p>Interno</p>
    </router-link>
    <nav class="header__nav">
      <router-link class="header__nav__link" to="/">Home</router-link>
      <router-link class="header__nav__link" to="/Project">Project</router-link>
      <router-link class="header__nav__link" to="/Blog">Blog</router-link>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.header {
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  color: $colorTitles;
  font-family: $fontTitles;
  font-size: 40px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0%;
  text-align: left;
}

.header__nav {

  display: flex;
  gap: 48px;
  align-items: center;
}

.header__nav__link {
  color: $colorText;
  font-family: $fontText;
  font-size: 20px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0%;
  text-align: center;
  display: block;

  &:hover {
    color: #292F36;
    text-shadow: 0.5px 0.5px #c2c4c7;
  }
}
</style>