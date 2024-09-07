<template>
  <NavbarView />
  <UserSignView />
  <router-view />
</template>

<script setup>
import NavbarView from "./components/NavbarView.vue";
import UserSignView from "./components/UserSignView.vue";
</script>

<style lang="scss" scoped></style>
