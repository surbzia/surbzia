<template>
  <div>
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container d-flex">
        <Sidebar />
        <div class="layout-page">
          <Header />
          <div class="content-wrapper">
            <div class="flex-grow-1">
              <NuxtPage />
            </div>
            <div class="content-backdrop fade"></div>
          </div>
        </div>
      </div>
      <div class="layout-overlay layout-menu-toggle"></div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
</script>
<style>
@import "../public/assets/css/core.css";
@import "../public/assets/css/demo.css";
@import "../public/assets/css/theme-default.css";
@import "../public/assets/fonts/boxicons.css";
</style>
