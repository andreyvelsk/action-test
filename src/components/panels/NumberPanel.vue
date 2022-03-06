<template>
  <div class="panel-number">
    <div class="panel-number-title">
      {{ showData.seriesName }}
    </div>
    <div class="panel-number-value">
      {{ showData.value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    showData() {
      return this.data[0];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
.panel-number {
  background-color: $info;
  text-align: center;
  padding: 2.5rem;
  border-radius: 0.25rem;
  &-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  &-value {
    font-size: 4rem;
  }
}
</style>
