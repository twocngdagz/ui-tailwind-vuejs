<template>
    <transition @enter="enter" @after-enter="clearHeight" @leave="leave" @after-leave="clearHeight" name="collapse">
        <div :id="id || null" :class="classObject" v-show="show">
            <slot></slot>
        </div>
    </transition>
</template>

<style scoped>
    .collapse-enter-active, .collapse-leave-active {
        transition: all .35s ease;
        overflow: hidden;
    }
</style>

<script>
    export default {
        name: "collapse",
        data() {
            return {
                show: this.visible
            };
        },
        computed: {
            classObject() {
                return {
                    'list-group': this.isNav,
                    show: this.show
                };
            }
        },
        model: {
            prop: 'visible',
            event: 'input'
        },
        watch: {
            visible(newVal) {
                if (newVal !== this.show) {
                    this.show = newVal;
                    this.emitState();
                }
            },
        },
        props: {
            isNav: {
                type: Boolean,
                default: false
            },
            id: {
                type: String,
                required: true
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            toggle(source) {
                this.show = !this.show;
                this.emitState(source);
            },
            enter(el) {
                el.style.height = 'auto';
                const realHeight = getComputedStyle(el).height;
                el.style.height = '0px';
                /* eslint-disable no-unused-expressions */
                el.offsetHeight; // Force repaint
                el.style.height = realHeight;
            },
            leave(el) {
                el.style.height = 'auto';
                const realHeight = getComputedStyle(el).height;
                el.style.height = realHeight;
                /* eslint-disable no-unused-expressions */
                el.offsetHeight; // Force repaint
                el.style.height = '0px';
            },
            clearHeight(el) {
                el.style.height = null;
            },
            emitState(source) {
                this.$root.$emit('collapse::toggle::state', this.id, this.show, source);
            }
        },
        created() {
            this.$root.$on('collapse::toggle', (target, source) => {
                if (target !== this.id) {
                    return;
                }
                this.toggle(source);
            });
        },
        mounted() {
            this.emitState();
        }
    };
</script>
