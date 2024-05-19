<template>
    <div class="ProjectDetails center">
        <div class="ProjectDetails__content">
            <h2 class="ProjectDetails__content__title">Minimal Look Bedrooms</h2>
            <p class="ProjectDetails__content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
                vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices
                gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum
                vel lectus bibendum commodo. <br><br> In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet
                tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras
                erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae
                iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>
        </div>
    </div>
</template>
<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";

.ProjectDetails {
    margin-top: 200px;
    display: flex;
    justify-content: center;

    &__content {
        max-width: 658px;

        &__title {
            color: $colorTitles;
            font-family: $fontTitles;
            font-size: 50px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
        }

        &__text {
            margin-top: 11px;
            color: $colorText;
            font-family: $fontText;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
        }
    }


}
</style>