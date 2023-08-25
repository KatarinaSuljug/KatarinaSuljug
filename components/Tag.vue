<script setup lang='ts'>
const props = defineProps<{
    text: string
}>()

</script>

<template>
    <span class="tag">{{ text }}</span>
</template>

<style scoped>
.tag {
    background-color: #2E2E2E;
    color: #fff;
    padding: 5px 10px;
    border-radius: 20px;
    margin-inline-end: 5px;
}
</style>
