<template>
    <div :class="[`${classPrefix}`]"
         @mouseenter="handlerMouseenter"
         @mouseleave="handlerMouseleave">
        <transition :name="transition">
            <div :class="[`${classPrefix}__popper`]"
                 ref="popper"
                 :style="popperStyle"
                 @mouseenter="handlerPopperMouseenter"
                 @mouseleave="handlerPopperMouseleave"
                 v-show="!disabled && (visible || always)">
                <div :class="[`${classPrefix}__content`]">
                    <div :class="[`${classPrefix}__arrow`]" v-if="!this.backgroundColor"></div>
                    <div :class="[`${classPrefix}__inner`]" :style="expandStyle">
                        <slot name="content">{{content}}</slot>
                    </div>
                </div>
            </div>
        </transition>
        <div :class="[`${classPrefix}__target`]"
             ref="reference">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Config from 'main/config/config'
    import Popper from 'main/mixins/popper'

    export default {
        name: 'Tooltip',
        mixins: [Popper],
        props: {
            placement: {
                type: String,
                default: 'bottom'
            },
            transition: {
                type: String,
                default: 'fade'
            },
            content: String,
            backgroundColor: String,
            textColor: String,
            value: Boolean,
            disabled: Boolean,
            maxWidth: [String, Number],
            always: Boolean,
            // popper距离target的偏移
            offset: {
                type: Number,
                default: 10
            },
            renderHtml: {
                type: [HTMLElement, Boolean],
                default: function () {
                    return false
                }
            }
        },
        data() {
            return {
                classPrefix: Config.classPrefix + '-tooltip',
                hoverTimer: null,
                popperHover: false,
                targetHover: false
            }
        },
        computed: {
            expandStyle() {
                const style = {
                    'background-color': this.backgroundColor,
                    color: this.textColor
                };
                if (this.maxWidth !== undefined) {
                    const maxWidth = parseFloat(this.maxWidth) + 'px';
                    return { 'max-width': maxWidth, ...style }
                }
                return style
            },
            popperStyle() {
                if (this.placement.includes('bottom') || this.placement.includes('top')) {
                    return {
                        'padding-top': this.offset + 'px',
                        'padding-bottom': this.offset + 'px'
                    }
                }
                if (this.placement.includes('left') || this.placement.includes('right')) {
                    return {
                        'padding-left': this.offset + 'px',
                        'padding-right': this.offset + 'px'
                    }
                }
                return {}
            }
        },
        mounted() {
            this.renderToHtml();
            if (this.always) {
                this.updatePopper();
            }
        },
        beforeDestroy() {
            this.renderHtml && typeof this.renderHtml !== 'boolean' && this.renderHtml.removeChild(this.$refs.popper);
        },
        methods: {
            handlerMouseenter() {
                if (this.disabled) return;
                this.targetHover = true;
                if (this.hoverTimer) clearTimeout(this.hoverTimer);
                this.hoverTimer = setTimeout(() => {
                    this.visible = true;
                }, 100);
            },

            handlerMouseleave() {
                if (this.disabled) return;
                this.targetHover = false;
                if (this.hoverTimer) {
                    clearTimeout(this.hoverTimer);
                    this.hoverTimer = setTimeout(() => {
                        this.visible = this.popperHover;
                    }, 100);
                }
            },

            handlerPopperMouseenter() {
                if (this.disabled) return;
                this.popperHover = true;
                if (this.hoverTimer) clearTimeout(this.hoverTimer);
                this.hoverTimer = setTimeout(() => {
                    this.visible = true;
                }, 100);
            },

            handlerPopperMouseleave() {
                if (this.disabled) return;
                this.popperHover = false;
                if (this.hoverTimer) {
                    clearTimeout(this.hoverTimer);
                    this.hoverTimer = setTimeout(() => {
                        this.visible = this.targetHover;
                    }, 100);
                }
            },

            renderToHtml() {
                if ((typeof this.renderHtml === 'boolean' && this.renderHtml === false) || !this.renderHtml) return;
                if ((typeof this.renderHtml === 'boolean' && this.renderHtml === true)) {
                    document.body.appendChild(this.$refs.popper);
                } else {
                    this.renderHtml.appendChild(this.$refs.popper);
                }
            }
        }
    }
</script>
