<template>
  <div class="form-group">
    <label v-if="label">{{ label }}</label>
    <div class="select">
      <select
        class="form-control"
        :name="name"
        @change="(evt) => update(evt.target.value)"
      >
        <option
          v-for="(item, index) in itemsList"
          :key="index"
          :value="index"
          :selected="value == index"
        >
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import useState from "@/state/index";
export default {
  props: {
    store: {
      type: String,
    },
    name: {
      type: String,
    },
    label: {
      type: String,
      default: null,
    },
    itemsList: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { updateCurrent, getCurrent } = useState();

    return {
      updateCurrent,
      getCurrent,
    };
  },
  computed: {
    current() {
      return this.getCurrent(this.store);
    },
    value() {
      return this.current[this.name];
    },
  },
  methods: {
    update(value) {
      this.updateCurrent(this.store, {
        key: this.name,
        value,
      });
    },
  },
};
</script>
