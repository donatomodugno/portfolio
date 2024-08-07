<script>
import home from '../pages/Home.vue'
import progetti from '../pages/Progetti.vue'
import contatti from '../pages/Contatti.vue'
export default {
    components:{
        home,
        progetti,
        contatti,
    },
    props:['activePage'],
    methods:{
        capitalize(string) {
            return string[0].toUpperCase()+string.slice(1)
        },
    },
}
</script>

<template>
    <b>{{capitalize(activePage)}}</b>
    <div id="page">
        <component :is="activePage"></component>
    </div>
</template>