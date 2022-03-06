<template>
  <bar-chart :chartData="chartData" />
</template>

<script>
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { convertData } from "./charts";

Chart.register(...registerables);

export default {
  components: { BarChart },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const chartData = convertData(props.data);

    return { chartData };
  },
};
</script>
