<script>
export default {
    props:['path'],
}
</script>

<template>
    <div id="breadcrumb">
        <span v-for="(page,i) in path">
            <span v-if="i==0"><b>{{page}}</b></span>
            <span v-else> > <b>{{page}}</b></span>
        </span>
    </div>
</template>