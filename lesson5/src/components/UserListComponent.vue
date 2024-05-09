<template>
    <!-- Создать компонент UserList, который будет отображать список пользователей из переданного массива. Каждый пользователь должен быть представлен в виде отдельного компонента User, принимающего пропсы с данными о пользователе (например, имя, фамилия, эл. почта)
    Вам необходимо создать компонент ипотечного калькулятора, который позволяет пользователю вводить сумму кредита, процентную ставку и срок кредита. Компонент должен автоматически вычислять ежемесячный платеж и общую сумму выплаты по кредиту. -->
    <UserComponent v-for="user in users" :key="user.id" :user="user"/>
</template>

<script>
import UserComponent from "./UserComponent.vue"
export default {
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: "John",
                    surname: 'Doe',
                    email: 'john@mail.ru',
                },
                {
                    id: 2,
                    name: 'Jane',
                    surname: 'Doen',
                    email: 'jane@mail.ru',
                },
                {
                    id: 3,
                    name: 'Kate',
                    surname: 'Katen',
                    email: 'Kate@mail.ru',
                },
            ]

        }
    },
    components: {
        UserComponent,
    }
}
</script>

<style lang="scss" scoped></style>