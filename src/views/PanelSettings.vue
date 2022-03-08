<template>
  <h1>Настройки панели</h1>

  <div class="settings-container">
    <select-input
      store="settings"
      name="type"
      :itemsList="getPanelConstant('type')"
      label="Тип панели"
    />
    <select-input
      store="settings"
      name="size"
      :itemsList="getPanelConstant('size')"
      label="Размер панели"
    />
    <select-input
      store="settings"
      name="position"
      :itemsList="getPanelConstant('position')"
      label="Положение панели"
    />
  </div>

  <button @click="saveSettings" class="btn btn-primary mr-1">Сохранить</button>
  <button @click="$router.push({ name: 'settings' })" class="btn btn-danger">
    Назад
  </button>

  <hr />

  <panel-component
    :type="getCurrentSettings.type"
    :data="getCurrentPanel"
    :size="getCurrentSettings.size"
    :position="getCurrentSettings.position"
  />
</template>

<script>
import useState from "@/state/index";
import { useRoute } from "vue-router";
import SelectInput from "@/components/controls/SelectInput.vue";
import PanelComponent from "@/components/panels/PanelComponent.vue";
export default {
  setup() {
    const { getList, loadCurrent, getCurrent, getConstants, loadSingle } =
      useState();

    const settings = getList("settings");
    const panels = getList("panels");
    let currentSettings = {};
    let currentPanel = {};
    const route = useRoute();
    const panelId = route.params.id;
    if (settings[panelId] && panels[panelId]) {
      currentSettings = { ...settings[panelId] };
      currentPanel = { ...panels[panelId] };
    }
    loadCurrent("settings", currentSettings);
    loadCurrent("panels", currentPanel);

    return {
      getCurrent,
      getConstants,
      loadSingle,
    };
  },
  components: {
    SelectInput,
    PanelComponent,
  },
  computed: {
    getCurrentSettings() {
      return this.getCurrent("settings");
    },
    getCurrentPanel() {
      return this.getCurrent("panels");
    },
    panelConstants() {
      return this.getConstants.panels;
    },
  },
  methods: {
    saveSettings() {
      this.loadSingle("settings", this.getCurrentSettings);
      this.$router.push({ name: "settings" });
    },
    getPanelConstant(constant) {
      return this.panelConstants[constant];
    },
  },
};
</script>

<style lang="scss" scoped>
.settings-container {
  display: flex;
  flex-wrap: wrap;
  & > *:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>
