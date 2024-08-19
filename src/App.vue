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
                'progetti':{
                    'archivio':{},
                },
                'contatti':{},
            },
        }
    },
}
</script>

<template>
    <div class="row j-center">
        <div class="col j-center" id="container">
            <Header
                :activePage="activePage" @update:activePage="activePage = $event"
                :links="Object.keys(pagesTree)"
                :path="['Archivio','Arc1','Arc2','Arc3','ArcProva']"
            ></Header>
            <Page :activePage="activePage"/>
            <Footer></Footer>
        </div>
    </div>
</template>