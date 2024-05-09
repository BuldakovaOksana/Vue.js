<template>
  <!-- <AuthenticationComponent :isAuth="false" />
  <UserListComponent />  -->
  <MortgageCalculatorComponent />
</template>

<script>

// import AuthenticationComponent from "./components/AuthenticationComponent.vue";
// import UserListComponent from "./components/UserListComponent.vue";
import MortgageCalculatorComponent from "./components/MortgageCalculatorComponent.vue";

export default {
  name: 'App',
  components: {
    // AuthenticationComponent,
    // UserListComponent,
    MortgageCalculatorComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
