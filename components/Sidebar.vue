<template>
  <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo flex justify-content-around">
      <!-- <img src="../public/profile.png" alt="" />
      <Link href="/">
        <ApplicationLogo class="w-auto h-75 fill-current text-gray-500" />
      </Link> -->
    </div>
    <div class="menu-inner-shadow"></div>
    <ul class="menu-inner py-1">
      <li class="menu-item mb-5">
        <div
          class="profile-section flex flex-col items-center py-6 text-center"
        >
          <a
            href="javascript:void(0);"
            @click="toggleMenu()"
            class="d-block d-xl-none menu-link ms-auto w-px-20"
          >
            <i class="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
          <img
            src="../public/profile.png"
            class="rounded-pill shadow-lg border-4 border-primary w-24 h-24 mb-3"
            alt="Profile"
          />
          <h4 class="text-xl font-bold text-primary mb-1">Saleem-Ur-Rehman</h4>
          <h5 class="text-base text-gray-600 font-medium">
            Senior PHP Developer
          </h5>
          <div class="mt-3 flex gap-2">
            <a
              href="https://pk.linkedin.com/in/itssaleembinzia"
              data-toggle="tooltip" data-placement="top" title="https://pk.linkedin.com/in/itssaleembinzia"
              target="_blank"
              class="text-blue-600 mx-2 hover:text-blue-800"
            >
              <i class="bx bxl-linkedin text-2xl"></i>
            </a>

            <a
              href="mailto:realsaleem.khi@gmail.com"
               data-toggle="tooltip" data-placement="top" title="realsaleem.khi@gmail.com"
              class="text-red-500 mx-2 hover:text-red-700"
            >
              <i class="bx bx-envelope text-2xl"></i>
            </a>
            <a
              href="tel:03110220891"
              data-toggle="tooltip" data-placement="top" title="03110220891"
              class="text-red-500 mx-2 hover:text-red-700"
            >
              <i class="bx bx-phone text-2xl"></i>
            </a>
          </div>
        </div>
      </li>
      <li class="menu-item m-0">
        <NuxtLink class="ps-4 mb-2 menu py-3 bg-lightest" to="/"
          >Introduction</NuxtLink
        >
      </li>
      <li class="menu-item m-0">
        <NuxtLink class="ps-4 mb-2 menu py-3 bg-lightest" to="/education"
          >Education</NuxtLink
        >
      </li>
      <li class="menu-item m-0">
        <NuxtLink class="ps-4 mb-2 menu py-3 bg-lightest" to="/projects"
          >Projects</NuxtLink
        >
      </li>
      <li class="menu-item m-0">
        <NuxtLink class="ps-4 mb-2 menu py-3 bg-lightest" to="/certification"
          >Certification
        </NuxtLink>
      </li>
    </ul>
  </aside>
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
.menu-sub {
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.menu-item.open .menu-sub {
  max-height: 500px;
}

.menu-sub[style*="display: none"] {
  display: none !important;
}
</style>
