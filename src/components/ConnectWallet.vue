<template>
  <div>
    <button @click="modal.open()">Open Connect Modal</button>
  </div>
</template>

<script setup>
import { useWeb3Modal } from "@web3modal/wagmi/vue";
// 4. Use modal composable
const modal = useWeb3Modal();
</script>

<style lang="scss" scoped>
</style>