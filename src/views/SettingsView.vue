<template>
  <div>
    <h1>Настройки</h1>
    <table class="table table-hover">
      <tr v-for="panel in getPanelsList" :key="panel.id">
        <th>
          <router-link
            :to="{
              name: 'settings.panel',
              params: { id: panel.id },
            }"
          >
            {{ panel.name }}
          </router-link>
        </th>
        <td>
          {{ getPanelType(panel.id) }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import useState from "@/state/index";

export default {
  setup() {
    const { getList } = useState();

    return {
      getList,
    };
  },
  computed: {
    getPanelsList() {
      return this.getList("panels");
    },
    getSettings() {
      return this.getList("settings");
    },
  },
  methods: {
    getPanelType(id) {
      const settings = this.getSettings[id];
      if (settings) return settings.type;
      return "";
    },
  },
};
</script>
