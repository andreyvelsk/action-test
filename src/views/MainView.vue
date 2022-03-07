<template>
  <div>
    <h1>Главная</h1>
  </div>
  <panel-component
    v-for="(panel, index) in getList('panels')"
    :key="index"
    :type="getPanelType(panel.id)"
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
    getPanelType(id) {
      const settings = this.getList("settings");
      return settings[id].type;
    },
  },
};
</script>
