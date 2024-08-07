<script setup>
import Navbar from './Navbar.vue'
import Breadcrumb from './Breadcrumb.vue'
</script>
<script>
export default {
    props:['links','activePage'],
    emits:['update:activePage'],
    data() {
        return {
        }
    },
}
</script>

<template>
    <div id="brand" class="row j-center">
        <img id="avatar" src="/avatar.jpg"/>
        <div>
            <h1 class="mb-0">Donato Modugno</h1>
            <h3 class="m-0">&nbsp;Software developer</h3>
        </div>
    </div>
    <Navbar :links="links" :activePage="activePage" @update:activePage="$emit('update:activePage',$event)"/>
    <!-- <Breadcrumb :path="links"/> -->
</template>