<template>
  <div>
    <h1>Настройки</h1>
    <table class="table table-hover w-100">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Тип</th>
          <th>Размер</th>
          <th>Положение</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="panel in getPanelsList"
          :key="panel.id"
          @click="goToPanelSettings(panel.id)"
        >
          <th>
            {{ panel.name }}
          </th>
          <td>
            {{ getPanelSettingName(panel.id, "type") }}
          </td>
          <td>
            {{ getPanelSettingName(panel.id, "size") }}
          </td>
          <td>
            {{ getPanelSettingName(panel.id, "position") }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import useState from "@/state/index";

export default {
  setup() {
    const { getList, getConstants } = useState();

    return {
      getList,
      getConstants,
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
    getPannelSettings(id) {
      const settings = this.getSettings[id];
      if (settings) return settings;
      return {};
    },
    getPanelSettingName(id, name) {
      const setting = this.getPannelSettings(id)[name];
      return this.getConstants.panels[name][setting];
    },
    goToPanelSettings(id) {
      this.$router.push({ name: "settings.panel", params: { id } });
    },
  },
};
</script>
