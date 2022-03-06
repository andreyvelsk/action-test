<template>
  <table class="table">
    <tr v-for="(item, index) in data" :key="index">
      <th>
        {{ item.seriesName }}
      </th>
      <td>
        {{ item.value }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
