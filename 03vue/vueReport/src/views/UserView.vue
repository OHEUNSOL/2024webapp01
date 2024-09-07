<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-md-6">
        <h3>User List</h3>
        <UserListView />
      </div>
      <div class="col-md-6">
        <h3>User Option</h3>
        <UserOptionView />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <MapView />
      </div>
    </div>
  </div>
</template>

<script setup>
import UserListView from "../components/user/UserListView.vue";
import UserOptionView from "../components/user/UserOptionView.vue";
import MapView from "../components/user/MapView.vue";
</script>

<style lang="scss" scoped></style>
