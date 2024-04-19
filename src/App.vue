<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import "./web3ModalSetup";
</script>

<template>
  <div>
    <a href="https://walletconnect.com" target="_blank">
      <img
        src="./assets/wallet-connect-logo.svg"
        class="logo"
        alt="WalletConnect Logo"
      />
    </a>
    <a href="https://confluxnetwork.org/" target="_blank">
      <img
        src="./assets/conflux-logo.svg"
        class="logo vue"
        alt="WalletConnect Logo"
      />
    </a>
  </div>
  <HelloWorld msg="WalletConnect + Conflux" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
