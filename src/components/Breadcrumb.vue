<script>
export default {
    props:['path'],
}
</script>

<template>
    <div id="breadcrumb">
        <span v-for="(page,i) in path">
            <span v-if="path.length==1"><b>{{page}}</b></span>
            <span v-else-if="i==0">{{page}}</span>
            <span v-else-if="i==path.length-1"> > <b>{{page}}</b></span>
            <span v-else> > <a @click="console.log('ciao')">{{page}}</a></span>
        </span>
    </div>
</template>