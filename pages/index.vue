<script setup lang='ts'>
const tags = ref(['vue', 'nuxt', "javascript"])
</script>

<template>
    <main>
        <Hero/>
        <Card title="About">
            <Tag v-for="(tag, index) in tags" :key="index"  :text="tag"/>
        </Card>
    </main>

</template>

<style scoped>
main {
    height: 100%;
}
</style>