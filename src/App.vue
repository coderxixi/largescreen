

<template>
  <router-view />
</template>
<script setup>
import useScalePage from "@/hooks/useScalePage"
let options={
  targetX:1920,
  targetY:1080,
  targetRatio:16/9
}
useScalePage(options)
</script>
<style scoped></style>
