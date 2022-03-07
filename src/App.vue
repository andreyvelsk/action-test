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
import { generatePanelsList, generateSettingsList } from "@/modules/mock";
export default {
  setup() {
    const { loadList, getList } = useState();

    //generate initial mock data
    const panelsList = generatePanelsList();
    loadList("panels", panelsList);

    const savedSettings = localStorage.getItem("settings");
    let settingsList = {};
    if (savedSettings) {
      try {
        settingsList = JSON.parse(savedSettings);
      } catch (e) {
        settingsList = generateSettingsList(panelsList);
      }
    } else {
      settingsList = generateSettingsList(panelsList);
    }
    loadList("settings", settingsList);

    return {
      getList,
    };
  },
  computed: {
    settingsList() {
      return this.getList("settings");
    },
  },
  watch: {
    settingsList: {
      immediate: true,
      deep: true,
      handler(value) {
        localStorage.setItem("settings", JSON.stringify(value));
      },
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
