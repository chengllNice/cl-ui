<template>
    <div class="dev-image">
        <m-image class="dev-image-iview-el" fit="fill" :src="src" :preview-list="srcList"></m-image>
        <m-image class="dev-image-iview-el" fit="contain" :src="src"></m-image>
        <m-image class="dev-image-iview-el" fit="cover" :src="src"></m-image>
        <m-image class="dev-image-iview-el" fit="none" :src="src"></m-image>
        <m-image class="dev-image-iview-el" fit="scale-down" :src="src"></m-image>
        <m-image class="dev-image-iview-el" fit="fill" :src="src1"></m-image>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                src1: '',
                // src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                src: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2091711702,2468700162&fm=111&gp=0.jpg',
                srcList: [
                    'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg',
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg'
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dev-image {
        .dev-image-iview-el {
            width: 100px;
            height: 100px;
            /*border: 1px solid red;*/
        }
    }
</style>
