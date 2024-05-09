<template>
    <div>
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <p>{{ user.surname }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            user: Object
        }
    }
</script>

<style lang="scss" scoped>

</style>