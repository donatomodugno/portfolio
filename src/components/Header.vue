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
        <img id="avatar" src="../assets/avatar.jpg"/>
        <h1>Donato Modugno</h1>
    </div>
    <Navbar :links="links" :activePage="activePage" @update:activePage="$emit('update:activePage',$event)"/>
    <!-- <Breadcrumb :path="links"/> -->
</template>