<template>
    <div :class="[
            `${classPrefix}`,
            fixed && `${classPrefix}--${fixed}`
         ]"
         :style="styleObj">
        <div :class="[`${classPrefix}__content`]">
            <div :class="[`${classPrefix}__head`]" ref="fixedHeader" v-show="showHeader">
                <table-head :fixed='fixed'
                            :columns="headColumns"
                            :colgroup-columns="bodyColumns"
                            :data="data"
                            :columns-width="columnsWidth"
                            :head-style="headStyle"></table-head>
            </div>
            <div :class="[`${classPrefix}__body`]" ref="fixedBody" :style="fixedBodyWrapStyle">
                <table-body :fixed='fixed'
                            :columns="bodyColumns"
                            :colgroup-columns="bodyColumns"
                            :data="data"
                            :columns-width="columnsWidth"
                            :body-style="bodyStyle"></table-body>
            </div>
        </div>

        <div :class="[`${classPrefix}__right-col`]" :style="fixedRightStyle"
             v-if="fixed === 'right' && $parent.showVerticalScrollBar"></div>
    </div>
</template>

<script>
    import Config from 'main/config/config'
    import TableHead from './table-head.vue'
    import TableBody from './table-body.vue'
    import { fixedIds } from './util';
    import { getScrollBarWidth } from 'main/utils/global';
    import { on, off } from 'main/utils/dom';

    export default {
        name: 'TableFixed',
        props: {
            fixed: String,
            headColumns: Array,
            bodyColumns: Array,
            colgroupColumns: Array,
            data: Array,
            columnsWidth: Object,
            headStyle: Object,
            bodyStyle: Object,
            bodyWrapStyle: Object,
            showHeader: Boolean
        },
        data() {
            return {
                classPrefix: Config.classPrefix + '-table-fixed',
                headerHeight: 0
            }
        },
        computed: {
            styleObj() {
                const style = {};
                let width = 0;
                const fixedId = fixedIds(this.bodyColumns, this.fixed);
                Object.keys(this.columnsWidth).forEach(key => {
                    if (fixedId.includes(key)) {
                        width += this.columnsWidth[key].width
                    }
                });
                style.width = width + 'px';
                if (this.fixed === 'right' && this.$parent.showVerticalScrollBar) {
                    style.right = this.$parent.scrollBarWidth + 'px';
                }
                return style;
            },
            fixedBodyWrapStyle() {
                let style = {};
                if (this.bodyWrapStyle && this.bodyWrapStyle.height) {
                    let height = 0;
                    if (this.$parent.showHorizontalScrollBar) {
                        height = getScrollBarWidth();
                    }
                    style = {
                        height: parseInt(this.bodyWrapStyle.height) - height + 'px'
                    }
                }
                return style
            },
            fixedRightStyle() {
                return {
                    width: this.$parent.scrollBarWidth + 'px',
                    height: this.headerHeight - 1 + 'px',
                    right: -this.$parent.scrollBarWidth + 'px'
                };
            }
        },
        components: {
            TableHead,
            TableBody
        },
        mounted() {
            on(this.$refs.fixedBody, 'mousewheel', this.mouseScroll);
            on(this.$refs.fixedBody, 'DOMMouseScroll', this.mouseScroll);
        },
        destroyed() {
            off(this.$refs.fixedBody, 'mousewheel', this.mouseScroll);
            off(this.$refs.fixedBody, 'DOMMouseScroll', this.mouseScroll);
        },
        methods: {
            mouseScroll(event) {
                let deltaY = event.deltaY;
                if (!deltaY && event.detail) {
                    deltaY = event.detail * 40;
                }
                if (!deltaY && event.wheelDeltaY) {
                    deltaY = -event.wheelDeltaY;
                }
                if (!deltaY && event.wheelDelta) {
                    deltaY = -event.wheelDelta;
                }
                if (!deltaY) return;
                const body = this.$parent.$refs.body;
                const currentScrollTop = body.scrollTop;
                if (deltaY < 0 && currentScrollTop !== 0) {
                    event.preventDefault();
                }
                if (deltaY > 0 && body.scrollHeight - body.clientHeight > currentScrollTop) {
                    event.preventDefault();
                }
                // body.scrollTop += deltaY;
                let step = 0;
                const timeId = setInterval(() => {
                    step += 5;
                    if (deltaY > 0) {
                        body.scrollTop += 2;
                    } else {
                        body.scrollTop -= 2;
                    }
                    if (step >= Math.abs(deltaY)) {
                        clearInterval(timeId);
                    }
                }, 5);
            }
        },
        watch: {
            headColumns: {
                handler() {
                    this.headerHeight = this.$refs.fixedHeader && this.$refs.fixedHeader.offsetHeight;
                },
                deep: true,
                immediate: true
            }
        }
    }
</script>
