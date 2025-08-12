<template>
  <nav
    class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
    id="layout-navbar"
  >
    <div
      class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"
    >
      <a
        class="nav-item nav-link px-0 me-xl-4"
        @click="toggleMenu()"
        href="javascript:void(0)"
      >
        <i class="bx bx-menu bx-sm"></i>
      </a>
    </div>

    <div
      class="navbar-nav-right d-flex align-items-center"
      id="navbar-collapse"
    >
      <ul class="navbar-nav flex-row align-items-center ms-auto">
        <li class="nav-item navbar-dropdown dropdown-user dropdown"></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const toggleMenu = () => {
  const layoutPage = document.querySelector(".layout-page");
  const menu = document.getElementById("layout-menu");
  menu.classList.toggle("layout-menu");
  layoutPage.classList.toggle("d-none");
};
</script>

<style scoped>
.sidebar {
  /* Add styles for your sidebar */
}
</style>
