<script setup>
import { ref } from "vue";

import ConnectWallet from "./ConnectWallet.vue";

defineProps({
  msg: String,
});
const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <!-- <button type="button" @click="count++">Open Connect Modal</button> -->
    <ConnectWallet />
    <p>Using Web3Modal on Conflux eSpace Dapp</p>
  </div>

  <p class="read-the-docs">
    Click on the WalletConnect and Conflux logos to learn more
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
