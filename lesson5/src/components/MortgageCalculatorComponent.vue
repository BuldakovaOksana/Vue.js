<template>
    <!-- Создайте компонент MortgageCalculator с соответствующим шаблоном и скриптом.
    В шаблоне компонента разместите поля ввода для суммы кредита, процентной ставки и срока кредита, а также элементы для отображения ежемесячного платежа и общей суммы выплаты.
    Используйте директиву v-model для связывания введенных пользователем значений с соответствующими свойствами в компоненте.
    Создайте вычисляемое свойство monthlyPayment, которое будет вычислять ежемесячный платеж на основе введенных значений суммы кредита, процентной ставки и срока кредита.
    Создайте вычисляемое свойство totalPayment, которое будет вычислять общую сумму выплаты по кредиту, учитывая ежемесячный платеж и срок кредита.
    Отобразите значения monthlyPayment и totalPayment в соответствующих элементах шаблона. -->
    <div>
        <input type="number" placeholder="Cуммa кредита" v-model="credit">
        <input type="number" placeholder="Процентная ставка" v-model="percent">
        <input type="number" placeholder="Срок кредита" v-model="period">
    </div>
    <p>Ежемесячный платеж {{ monthlyPayment.payByMonth }}</p>
    <p>Общая сумма выплаты {{ monthlyPayment.total }}</p>
</template>

<script>
export default {
    data() {
        return {
            credit: null,
            percent: null,
            period: null,
        }
    },
    computed: {
        monthlyPayment() {
            const principal = parseFloat(this.credit);
            const interestRate = parseFloat(this.percent) / 100 / 12;
            const loanTermMonths = parseFloat(this.period) * 12;

            const numerator = principal * interestRate * Math.pow(1 + interestRate, loanTermMonths);
            const denominator = Math.pow(1 + interestRate, loanTermMonths) - 1;
            const payByMonth = (numerator / denominator).toFixed(2);
            const total = (payByMonth * 12 * this.period).toFixed(2);
            return { payByMonth, total };
        },
        // totalPayment() {
        //     return this.monthlyPayment * this.term * 12;
        // }
    }
}
</script>

<style lang="scss" scoped></style>