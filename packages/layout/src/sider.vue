<template>
    <div :class="[
             `${classPrefix}`,
            hideTrigger && `${classPrefix}--hideTrigger`,
            collapsed ? `${classPrefix}--close` : `${classPrefix}--open`,
         ]"
         ref="sider"
         :style="sliderStyle">
        <div :class="[`${classPrefix}__zero-trigger`]" v-if="computedShowZeroTrigger" @click="triggerClick">
            <Icon type="arrow-right"></Icon>
        </div>
        <div :class="[`${classPrefix}__header`]" ref="header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div :class="[`${classPrefix}__content`]" :style="contentStyle">
            <scroll size="small" :scroll-option="scrollOption">
                <slot></slot>
            </scroll>
        </div>
        <div :class="[`${classPrefix}__trigger`]" ref="trigger" v-if="!hideTrigger" @click="triggerClick">
            <slot name="trigger">
                <Icon type="left" :class="[`${classPrefix}__trigger-icon`]"></Icon>
            </slot>
        </div>
    </div>
</template>

<script>
    import Config from 'main/config/config'
    import Icon from 'packages/icon'
    import Scroll from 'packages/scroll'
    import elementResizeDetectorMaker from 'element-resize-detector';

    export default {
        name: 'Sider',
        props: {
            value: Boolean, // 展开收起
            width: {
                type: [Number, String],
                default: 240
            },
            height: [Number, String],
            collapsedWidth: {
                type: [Number, String],
                default: 80
            },
            hideTrigger: Boolean,
            showZeroTrigger: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                classPrefix: Config.classPrefix + '-sider',
                componentName: 'Sider',
                observer: null,
                contentStyle: {},
                collapsed: this.value || false,
                scrollOption: {
                    scrollPanel: {
                        scrollingX: false
                    }
                }
            }
        },
        computed: {
            sliderStyle() {
                let width = parseFloat(this.width);
                if (this.collapsed) {
                    width = parseFloat(this.collapsedWidth);
                }
                return {
                    width: width + 'px'
                };
            },
            computedShowZeroTrigger() {
                return this.showZeroTrigger && parseFloat(this.collapsedWidth) === 0 && this.collapsed
            }
        },
        components: {
            Icon,
            Scroll
        },
        mounted() {
            this.observer = elementResizeDetectorMaker();
            this.observer.listenTo(this.$refs.sider, this.setContentStyle);
        },
        beforeDestroy() {
            this.observer && this.observer.removeListener(this.$refs.sider, this.setContentStyle);
        },
        methods: {
            triggerClick() {
                this.collapsed = !this.collapsed;
                this.$emit('input', this.collapsed)
            },
            setContentStyle() {
                const height = parseFloat(this.height) || this.$el.offsetHeight;
                const headerHeight = this.$refs.header ? this.$refs.header.offsetHeight : 0;
                const triggerHeight = this.$refs.trigger ? this.$refs.trigger.offsetHeight : 0;
                this.contentStyle = {
                    height: (height - headerHeight - triggerHeight) + 'px'
                };
            }
        },
        watch: {
            value(newVal) {
                this.collapsed = newVal;
                this.$emit('collapse', newVal);
            }
        }
    }
</script>
