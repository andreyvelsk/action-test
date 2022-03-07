<template>
  <h2>
    {{ data.name }}
  </h2>
  <component :is="componentsName[type]" :data="data.data" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import constants from "@/state/constants";

export default {
  components: {
    NumberPanel: defineAsyncComponent(() => import("./NumberPanel.vue")),
    TablePanel: defineAsyncComponent(() => import("./TablePanel.vue")),
    LinePanel: defineAsyncComponent(() => import("./charts/LineChart.vue")),
    BarPanel: defineAsyncComponent(() => import("./charts/BarChart.vue")),
    PiePanel: defineAsyncComponent(() => import("./charts/PieChart.vue")),
  },
  props: {
    type: {
      type: String,
      default: "table",
      validator(value) {
        const panelNames = Object.keys(constants.panels.types);
        return panelNames.indexOf(value) !== -1;
      },
    },
    data: {
      type: Object,
      required: true,
      validator(panel) {
        return panel.name && panel.data;
      },
    },
  },
  computed: {
    componentsName() {
      return {
        number: "NumberPanel",
        table: "TablePanel",
        line: "LinePanel",
        bar: "BarPanel",
        pie: "PiePanel",
      };
    },
  },
};
</script>
