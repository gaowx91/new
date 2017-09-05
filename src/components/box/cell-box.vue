<template>
    <div class="cell-box" :class="{'cell-box-padded':padded}">
        <slot name='header'></slot>
        <slot></slot>
    </div>
</template>
<script>
import '../../../static/css/components/cell-box.css';
export default {
    props: {
        padded: Boolean
    }
}

</script>

