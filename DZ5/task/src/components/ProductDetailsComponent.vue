<template>
    <!-- Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

    Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).

    Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".

    В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.

    Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock". -->
    <div v-for="product in products" :key="product.id">
        <h1>{{ product.name }}</h1>
        <h2>{{ formattedPrice(product.price) }}</h2>
        <h3>{{ product.available ? 'Available' : 'Out of stock' }}</h3>
        <br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            price: '',
            products: [
                {
                    id: 1,
                    name: 'Socks',
                    price: 5.99,
                    available: true
                },
                {
                    id: 2,
                    name: 'T-Shirt',
                    price: 10.99,
                    available: true
                },
                {
                    id: 3,
                    name: 'Jacket',
                    price: 20.99,
                    available: false
                },
                {
                    id: 4,
                    name: 'Shoes',
                    price: 15.99,
                    available: true
                }
            ]
        }
    },
    computed: {
        formattedPrice() {
            return price => `$${price}`
        }
    }
}
</script>

<style lang="scss" scoped></style>