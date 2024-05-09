<template>
        <!-- Создайте компонент "Аутентификация" (Authentication),
    который будет отображать форму входа или сообщение об
    успешной аутентификации в зависимости от переданного
    пропса isAuthenticated. Используйте директиву v-if для
    условного отображения разных элементов в шаблоне
    компонента -->
    <form v-if="isAuth">
        <input type="text" placeholder="login">
        <input type="password" placeholder="password">
        <button type="submit">Войти</button>
    </form>
    <div v-else>
    <h1>Вы зарегестрированы!</h1>
    </div>
</template>

<script>
export default {
    props: {
        isAuth: Boolean
    }
}
</script>

<style lang="scss" scoped></style>