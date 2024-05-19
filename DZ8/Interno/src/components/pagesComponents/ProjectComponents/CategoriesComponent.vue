<template>
    <div class="button__box">
        <div class="buttons">
            <button class="buttons__button"
                :class="[button.active ? 'buttons__button__active' : 'buttons__button__noActive']"
                v-for="button in categories" :key="button.id" @click="isActive(button.id)">
                {{ button.name }}
            </button>
        </div>

    </div>
</template>

<script>
export default {
    emits: ['is-Active'],
    data() {
        return {
            categories: [
                {
                    id: 0,
                    name: 'Bathroom',
                    active: false,
                },
                {
                    id: 1,
                    name: 'Bed Room',
                    active: true,
                },
                {
                    id: 2,
                    name: 'Kitchen',
                    active: false,
                },
                {
                    id: 3,
                    name: 'Living Area',
                    active: false,
                }
            ]
        }
    },
    methods: {
        isActive(id) {
            this.categories.forEach(element => {
                element.active = false
            });
            this.categories.find(element => element.id === id).active = true;
            this.$emit('is-Active', id)
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.button__box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.buttons {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border: 1px solid rgb(205, 162, 116);
    border-radius: 18px;
    width: 888px;

    &__button {
        border-radius: 18px;
        background: none;
        padding: 26px 66px;
        border: none;
        color: $colorText;
        font-family: $fontText;
        font-size: 18px;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: center;

        &__active {
            color: rgb(255, 255, 255);
            background: rgb(205, 162, 116);
        }
    }
}
</style>