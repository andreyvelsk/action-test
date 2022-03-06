<template>
  <div>
    <h1>Главная</h1>
  </div>
  <panel-component type="table" :data="panelData" />
  <panel-component type="number" :data="panelData" />
  <panel-component type="line" :data="panelData" />
  <panel-component type="bar" :data="panelData" />
  <panel-component type="pie" :data="panelData" />
</template>

<script>
import useState from "@/state/index";
import PanelComponent from "@/components/panels/PanelComponent.vue";

export default {
  components: {
    PanelComponent,
  },
  setup() {
    const { getCurrent } = useState();

    return {
      getCurrent,
    };
  },
  computed: {
    panelData() {
      return this.getCurrent.data;
    },
  },
};
</script>
