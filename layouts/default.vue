<template>
  <div class="layout">
    <AppHeader />
    <div class="main-content">
      <AppSidebar />
      <div class="page-content">
        <slot />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  display: flex;
  flex: 1;
}
.page-content {
  flex: 1;
  padding: 2rem;
}
</style>
