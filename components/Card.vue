<script setup lang='ts'>
const props = defineProps<{
    title: string
}>()
</script>

<template>
    <div class="card">
        <slot/>
        <h3>{{ title }}</h3>
    </div>
</template>

<style scoped>
.card {
    background-color: #C1C7FD;
    color: #2e2e2e;
    border-radius: 20px;
    padding: 20px;
}
</style>
