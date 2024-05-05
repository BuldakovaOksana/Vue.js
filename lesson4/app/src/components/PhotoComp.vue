<template>
    <div>
        <img  :src="bigImg" width="500" alt="">
        <div class="galery">
            <img @click="selectImg(cat)" class="cat" v-for="cat in cats" :key="index" :src="cat" alt="cat">
        </div>
    </div>
</template>

<script>
    import img from "@/assets/img/cat3.jpg"
    export default {
        data() {
            return {
                bigImg: '',
                cats: {
                    cat1: require("@/assets/img/cat1.jpg"),
                    cat2: require("@/assets/img/cat2.jpg"),
                    cat3: img,
                    
                }
            }
        },
        methods: {
            selectImg(cat) {
                this.bigImg = cat
            }
        },
    }
</script>

<style lang="scss" scoped>
    .cat {
        width: 150px;
    }
</style>