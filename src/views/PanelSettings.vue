<template>
  <select-input
    store="settings"
    name="type"
    :itemsList="getPanelTypes"
    label="Тип панели"
  />
  <button @click="saveSettings">Сохранить</button>
</template>

<script>
import useState from "@/state/index";
import { useRoute } from "vue-router";
import SelectInput from "@/components/controls/SelectInput.vue";
export default {
  setup() {
    const { getList, loadCurrent, getCurrent, getConstants, loadSingle } =
      useState();

    const settings = getList("settings");
    let current = {};
    const route = useRoute();
    const panelId = route.params.id;
    if (settings[panelId]) current = settings[panelId];
    loadCurrent("settings", current);

    return {
      getCurrent,
      getConstants,
      loadSingle,
    };
  },
  components: {
    SelectInput,
  },
  computed: {
    getCurrentSettings() {
      return this.getCurrent("settings");
    },
    getPanelTypes() {
      return this.getConstants.panels.types;
    },
  },
  methods: {
    saveSettings() {
      this.loadSingle("settings", this.getCurrentSettings);
      this.$router.push({ name: "settings" });
    },
  },
};
</script>

<style></style>
