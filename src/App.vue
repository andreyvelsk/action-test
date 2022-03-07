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

<script>
import useState from "@/state/index";
import { generatePanelsList, generateRndSettings } from "@/modules/mock";
export default {
  setup() {
    const { loadList } = useState();

    //generate initial mock data
    const panelsList = generatePanelsList();
    loadList("panels", panelsList);

    const settingsList = {};
    Object.keys(panelsList).forEach((id) => {
      const setting = generateRndSettings();
      setting.id = id;
      settingsList[id] = setting;
    });
    loadList("settings", settingsList);
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
