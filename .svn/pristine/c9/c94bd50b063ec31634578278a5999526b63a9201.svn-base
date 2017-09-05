<template>
    <router-link v-if="padded" :to="to" class="cell" :class="{'cell-padded':padded}">
        <slot></slot>
    </router-link>
    <div v-else-if="box" class="cell">
        <figure>
            <slot name='left'></slot>
            <figcaption>
                <slot></slot>
            </figcaption>
        </figure>
    </div>
    <router-link v-else :to="to" class="cell">
        <figure>
            <slot name='left'></slot>
            <figcaption>
                <slot></slot>
            </figcaption>
        </figure>
    </router-link>
</template>
<script>
import '../../../static/css/components/cell.css';
export default {
    props: {
        to: [String, Object],
        padded: Boolean,
        box: Boolean
    }
}

</script>

