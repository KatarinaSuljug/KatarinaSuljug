<script setup lang='ts'>

</script>

<template>
    <div class="hero-wrapper">
        <div class="container">
            <div class="name">Katarina</div>
            <div class="title">Portfolio</div>
            <div class="position">student / frontend developer</div>
        </div>
    </div>
</template>

<style scoped>
.hero-wrapper{
    background: #2e2e2e;
    color: white;
    width:100%;
    height: 100%;
    padding: 40px 30px;
}

.container {
    border: 1px solid grey;
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.name, .position {
    font-size: 32px;
}

.title {
    font-size: 96px;
}
</style>
