<template>
    <div class="page-container page-component">
        <div class="page-component__nav">
            <side-nav :navsData="navsData" base="/component"></side-nav>
        </div>
        <div class="page-component__content">
            <router-view class="content"></router-view>
        </div>
    </div>
</template>

<script>
    import navsData from '../nav.config.json';
    export default {
        name: "components",
        data() {
            return {
                navsData
            };
        },

    }
</script>

<style lang="scss">
.page-component {
    &.page-container{
        padding: 0;
    }
    box-sizing: border-box;
    height: 100%;
    display: flex;
    .page-component__nav {
        flex: 0 0 240px;
        padding-right: 2px;
    }

    .page-component__content {
        padding-right: 2px;
        overflow: auto;
        flex: 1;
        box-sizing: border-box;
    }

    .content {
        padding-top: 50px;
        > {
            h3 {
                margin: 55px 0 20px;
           }

            table {
                border-collapse: collapse;
                width: 100%;
                background-color: #fff;
                font-size: 14px;
                margin-bottom: 45px;
                line-height: 1.5em;

                strong {
                    font-weight: normal;
                }
                td, th {
                    border-bottom: 1px solid #dcdfe6;
                    padding: 15px;
                    max-width: 250px;
                }
                th {
                    text-align: left;
                    white-space: nowrap;
                    color: #909399;
                    font-weight: normal;
                }
                td {
                    color: #606266;
                }
                th:first-child, td:first-child {
                    padding-left: 10px;
                }
            }
        }
    }
}

</style>