<template>
    <section class="ProjectsComponent center">
        <CategoriesComponent @is-active="isActive" />
        <ProjectItemComponent :addLike="addLike" :projects="projects" />
        <PaginationComponent />
    </section>
</template>

<script>
import CategoriesComponent from './CategoriesComponent.vue';
import ProjectItemComponent from './ProjectItemComponent.vue';
import PaginationComponent from './PaginationComponent.vue';

export default {
    components: {
        CategoriesComponent,
        ProjectItemComponent,
        PaginationComponent
    },
    data() {
        return {
            projects: [],

            projectsBedroom: [
                {
                    id: 0,
                    image: "projectImage1.jpeg",
                    title: "Minimal Bedroom",
                    text: "Decor / Artchitecture",
                    like: false
                },
                {
                    id: 1,
                    image: "projectImage2.jpeg",
                    title: "Classic Minimal Bedroom",
                    text: "Decor / Artchitecture",
                    like: false
                },
                {
                    id: 2,
                    image: "projectImage3.jpeg",
                    title: "Minimal Bedroom table",
                    text: "Decor / Artchitecture",
                    like: false
                },
                {
                    id: 3,
                    image: "projectImage4.jpeg",
                    title: "Modern Medroom",
                    text: "Decor / Artchitecture",
                    like: false
                },
                {
                    id: 4,
                    image: "projectImage5.jpeg",
                    title: "Minimal Bedroom",
                    text: "Decor / Artchitecture",
                    like: false
                },
                {
                    id: 5,
                    image: "projectImage6.jpeg",
                    title: "Modern Medroom",
                    text: "Decor / Artchitecture",
                    like: false
                },
                {
                    id: 6,
                    image: "projectImage7.jpeg",
                    title: "System Table",
                    text: "Decor / Artchitecture",
                    like: false
                },
                {
                    id: 7,
                    image: "projectImage8.jpeg",
                    title: "Modern Medroom",
                    text: "Decor / Artchitecture",
                    like: false
                },
            ],
            projectsKitchan: [
                {
                    id: 0,
                    image: "projectImage9.png",
                    title: "Modern Medroom",
                    text: "Decor / Artchitecture",
                    like: false
                }
            ],
            projectsLivingArea: [
                {
                    id: 0,
                    image: "projectImage10.jpeg",
                    title: "Modern Medroom",
                    text: "Decor / Artchitecture",
                    like: false
                }
            ]

        }


    },
    methods: {
        isActive(id) {

            switch (id) {
                case 0:
                    this.projects = this.projectsBathroom
                    break;
                case 1:
                    this.projects = this.projectsBedroom
                    break;
                case 2:
                    this.projects = this.projectsKitchan
                    break;
                case 3:
                    this.projects = this.projectsLivingArea
                    break;
                default:
                    break;
            }

        },



    },
    created() {
        this.projects = this.projectsBedroom;
    }

}
</script>

<style lang="scss" scoped>
.ProjectsComponent {
    margin-top: 200px;
}
</style>