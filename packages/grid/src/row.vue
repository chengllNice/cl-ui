<template>
    <div :class="rowClass" :style="rowStyle">
        <slot></slot>
        <!--<div style="clear: both;"></div>-->
    </div>
</template>

<script>
    import Config from 'main/config/config'
    import { findComponentDirectChildrens } from 'main/utils/tool';
    import Emitter from 'main/mixins/emitter'

    export default {
        name: 'Row',
        mixins: [Emitter],
        props: {
            type: {
                type: String,
                validator(value) {
                    return ['flex'].includes(value)
                }
            },
            align: {
                type: String,
                validator(value) {
                    return ['top', 'middle', 'bottom'].includes(value)
                }
            },
            justify: {
                type: String,
                validator(value) {
                    return ['start', 'end', 'center', 'space-around', 'space-between'].includes(value)
                }
            },
            gutter: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                classPrefix: Config.classPrefix + '-row',
                componentName: 'Row'
            }
        },
        computed: {
            rowClass() {
                const classList = [
                    `${this.classPrefix}`,
                    {
                        [`${this.classPrefix}--${this.type}`]: this.type,
                        [`${this.classPrefix}--flex-${this.align}`]: this.align,
                        [`${this.classPrefix}--flex-${this.justify}`]: this.justify
                    }
                ];
                if ((this.align || this.justify) && !this.type) {
                    classList.push(`${this.classPrefix}--flex`)
                }
                return classList;
            },
            rowStyle() {
                let style = {};
                if (this.gutter) {
                    style = {
                        marginLeft: -(this.gutter / 2) + 'px',
                        marginRight: -(this.gutter / 2) + 'px'
                    }
                }
                return style;
            }
        },
        mounted() {
            this.$on('on-update-span', () => {
                this.initNoSetColChildrenSpan();// 设置没有设置span的col
            })
        },
        methods: {
            initNoSetColChildrenSpan() {
                const colChildren = findComponentDirectChildrens(this, 'Col');
                let allSpan = 0;// 所有span之和
                const noSpanComponents = [];// 没有设置span的元素（不包括设置为0的）
                let noSpanComponentsNum = 0;
                colChildren.forEach(item => {
                    if (item.currentSpan !== -1) allSpan += parseFloat(item.currentSpan);
                    else noSpanComponents.push(item);
                });
                noSpanComponentsNum = noSpanComponents.length;

                // 还有剩余空间可分配
                const freeSpace = 24 - parseFloat(allSpan);// 剩余空间量
                if (freeSpace >= 1) {
                    const average = Math.floor(freeSpace / noSpanComponentsNum);
                    const _average = Math.floor(freeSpace % noSpanComponentsNum);// 求余数，把余数的剩余量全部给最后一个元素
                    // 如果剩余空间按平均分配不足，则全局分配给第一个元素
                    if (average < 1) {
                        noSpanComponents[0].currentSpan = freeSpace;
                    } else {
                        noSpanComponents.forEach((item, index) => {
                            if (index === noSpanComponentsNum - 1 && _average >= 1) {
                                item.currentSpan = average + _average;
                            } else {
                                item.currentSpan = average;
                            }
                        })
                    }
                }
            }
        }
    }
</script>
