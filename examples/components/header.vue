<template>
    <div class="header-component__wrapper">
        <img class="header-component__logo" src="./../assets/images/logo.svg" alt="logo">
        <img class="header-component__lang" src="./../assets/images/langCN.svg" alt="lang">
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    .header-component__wrapper {
        background-color: white;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        display: flex;
        .header-component__logo{
            cursor: pointer;
            width: 146px;
        }
        .header-component__lang{
            cursor: pointer;
            width: 44px;
        }
    }
</style>