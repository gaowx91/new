<template>
    <header class="header" :class="{'is-fixed':fixed,'is-child':child}">
        <slot name="home"></slot>
        <slot name="care"></slot>
        <slot name="selfpage"></slot>
        <slot name="collect"></slot>
        <slot name="editprofile-header"></slot>
        <slot name="setup-header"></slot>
        <slot name="detail-header"></slot>
        <slot name="search"></slot>
        <slot name="con"></slot>
        <slot></slot>
    </header>
</template>
<script>
import '../../../static/css/components/header.css';
export default {
    props: {
        fixed: Boolean,
        child: Boolean
    }
}

</script>

