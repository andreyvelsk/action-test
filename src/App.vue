<template>
  <nav class="header">
    <router-link :to="{ name: 'main' }" class="header-item">
      Главная
    </router-link>
    <router-link :to="{ name: 'settings' }" class="header-item">
      Настройки
    </router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/scss/main.scss";
</style>
