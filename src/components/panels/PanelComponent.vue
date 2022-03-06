<template>
  <component :is="componentsName[type]" :data="data" />
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
      validator(value) {
        const panelNames = Object.keys(constants.panels);
        return panelNames.indexOf(value) !== -1;
      },
    },
    data: {
      type: Array,
      required: true,
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
