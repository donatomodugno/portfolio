<script setup>
import Header from './components/Header.vue'
import Page from './components/Page.vue'
import Footer from './components/Footer.vue'
</script>
<script>
export default {
    data() {
        return {
            activePage:'home',
            pagesTree:{
                'home':{},
                'progetti':{},
                'contatti':{},
            },
        }
    },
}
</script>

<template>
    <div class="row j-center">
        <div class="col j-center" id="container">
            <Header v-model:activePage="activePage" :links="Object.keys(pagesTree)"></Header>
            <Page :activePage="activePage"/>
            <Footer></Footer>
        </div>
    </div>
</template>