<script>
import Home from '../pages/Home.vue'
import Progetti from '../pages/Progetti.vue'
import Contatti from '../pages/Contatti.vue'
export default {
    components:{
        home:Home,
        progetti:Progetti,
        contatti:Contatti,
    },
    props:['activePage'],
}
</script>

<template>
    Pagina {{activePage}}
    <div id="page">
        <component :is="activePage"></component>
    </div>
</template>