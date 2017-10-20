<template>
    <input :type="typeToggle?'text':types" :id="id" :value="valueResult" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" :maxlength="maxlength" :minlength="minlength" :autocomplete="autoComplete" :autofocus="autofocus" @focus="handleToggleFocus" @blur="handleToggleBlur" ref="input"  >
</template>
<script>
export default {
    props: {
        placeholder: String,
        id: String,
        types: {
            type: String,
            default: 'text'
        },
        // value:{},
        focusValue:Boolean,
        typeToggle: Boolean,
        required: false,
        disabled: Boolean,
        readonly: Boolean,
        maxlength: Number,
        minlength: Number,
        autoComplete: {
            type: String,
            default: 'off'
        },
        autofocus: Boolean,
    },
    data() {
        return {
            valueResult: this.value,
        }
    },
    methods: {
        handleToggleFocus() {
            var _this = this;
            this.$emit('handleToggleFocus')
            _this.valueResult = _this.$refs.input.value;
        },
        handleToggleBlur() {
            var _this = this;
            _this.valueResult = _this.$refs.input.value;
            this.$emit('handleToggleBlur');
        }
    }
}

</script>
