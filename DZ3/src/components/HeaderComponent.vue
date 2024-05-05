<template>

  <header class="header center">
    <a href="#" class="header__logo">
      <img src="@/assets/img/Logo.png" alt="logo" />
      <p>Interno</p>
    </a>
    <nav class="header__nav">
      <a href="#" class="header__nav__link">Home</a>
      <a href="#" class="header__nav__link">Project</a>
      <a href="#" class="header__nav__link">Blog</a>
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
  color: #292F36;
  font-family: "DM Serif Display";
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
  color: #4D5053;
  font-family: "Jost";
  font-size: 20px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0%;
  text-align: center;
  display: block;
}
</style>