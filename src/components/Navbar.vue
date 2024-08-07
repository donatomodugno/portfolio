<script>
export default {
    props:['links'],
    emits:['update:activePage'],
}
</script>

<template>
    <div class="nav">
        <span v-for="p in links" class="nav-link" @click="$emit('update:activePage',p)">{{p}}</span>
    </div>
</template>