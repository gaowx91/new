<template>
    <footer class="footer" :class="{'is-fixed':fixed}">
        <slot name="nav"></slot>
        <slot name="detail"></slot>
    </footer>
</template>
<script>
import '../../../static/css/components/footer.css';
export default {
    props:{
        fixed:Boolean
    }
}
</script>