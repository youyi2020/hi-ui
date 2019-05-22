<template>
    <div class="app-container">
        <div class="app-component__header">
            <main-header></main-header>
        </div>
        <div class="app-component__view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style lang="scss" >
    @import 'assets/styles/common.scss';
    .app-container{
        width: 1140px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        .app-component__header{
            flex: 0 0 80px;
        }
        .app-component__view{
            overflow: hidden;
            flex: 1;
        }
    }
</style>