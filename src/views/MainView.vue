<template>
  <h1>Главная</h1>
  <panel-component
    v-for="(panel, index) in getList('panels')"
    :key="index"
    :type="getPanelSettings(panel.id).type"
    :size="getPanelSettings(panel.id).size"
    :position="getPanelSettings(panel.id).position"
    :data="panel"
  />
</template>

<script>
import useState from "@/state/index";
import PanelComponent from "@/components/panels/PanelComponent.vue";

export default {
  components: {
    PanelComponent,
  },
  setup() {
    const { getList } = useState();

    return {
      getList,
    };
  },
  methods: {
    getPanelSettings(id) {
      const settings = this.getList("settings");
      return settings[id];
    },
  },
};
</script>
