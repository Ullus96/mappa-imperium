<template>
	<nav-block></nav-block>
	<router-view></router-view>
	<footer-block></footer-block>
</template>

<style></style>
<script>
import NavBlock from './components/NavBlock.vue';
import FooterBlock from './components/FooterBlock.vue';
export default {
	components: { NavBlock, FooterBlock },
};
</script>
, FooterBlock
