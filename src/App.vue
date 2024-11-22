<template>
    <router-view />
</template>
<script setup>
import autofit from 'autofit.js';
import useScalePage from '@/hooks/useScalePage';
autofit.init({
    designHeight: 1080,
    designWidth: 1920,
    renderDom: '#app',
    resize: true
});
// let options = {
//   targetX: 1920,
//   targetY: 1080,
//   targetRatio: 16 / 9
// }
// useScalePage(options)
</script>
<style scoped></style>
