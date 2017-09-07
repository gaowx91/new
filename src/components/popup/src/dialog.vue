<template>
    <div class="dialog" @touchmove.prevent v-show="modal">
        <transition name="dialog-bounce">
            <div class="dialog-content" v-show="modal" :style="{zIndex:countIndex,position:'fixed'}">
                <div class="dialog-header">
                    <slot name="header">
                        <span class="dialog-title">{{tit}}</span>
                    </slot>
                    <i :class="cancelClass" @click="cancel"></i>
                </div>
                <div class="dialog-body">
                    <slot></slot>
                </div>
                <div class="dialog-footer">
                    <slot name='bottom'>
                        <mt-button :type="okClass" size="large" @click="ok">{{okText}}</mt-button>
                    </slot>
                </div>
            </div>
        </transition>
        <div class="v-modal" :style="{zIndex:count+1}" v-show="modal" @click="clickMask" @touchmove.prevent></div>
    </div>
</template>
<script>
import vInputGroup from '@/components/inputgroup'
var oDiv = document.createElement('div');
oDiv.setAttribute("class", "v-modal");
require("#/css/components/dialog.css");
export default {
    name: 'dialog',
    props: {
        modal: {
            type: Boolean,
          default: false
        },
        tit: {
            type: String,
            default: ''
        },
        okClass: {
            type: String,
            default: 'primary'
        },
        cancelClass: {
            type: String,
            default: 'icon icon-remove-sign text-danger'
        },
        okText: {
            type: String,
            default: '確認'
        },
        dialogObj: {
          type: Object,
          default: () => {}
        }
    },
    computed: {
        countIndex: {
            set: function(value) {
                this.count = value;
            },
            get: function() {
                return this.count + 2
            }
        }
    },

    methods: {
        cancel() {
            this.$emit('cancel');
        },
        ok() {
            this.$emit('ok');
        },
        clickMask() {
            this.cancel();
        }
    },
    watch: {
        'modal' (value) {
            if (value) {
                this.show = value;
            } else {
                setTimeout(function() {
                    this.show = value;
                }, 500);
            }
            this.count = this.count + 1;
        }
    },
    data() {
        return {
            count: 2000,
            show: this.modal
        };
    },
    components: {
        vInputGroup
    }
};
</script>
