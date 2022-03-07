import { computed, reactive } from "vue";
import constants from "./constants";

const state = reactive({
  constants,
  entities: {
    panels: {
      current: {},
      list: {},
    },
    settings: {
      current: {},
      list: {},
    },
  },
});

const useState = () => {
  // computed
  const getConstants = computed(() => state.constants);

  // methods
  const loadList = (entity, payload) => {
    if (state.entities[entity]) {
      state.entities[entity].list = payload;
    }
  };
  const loadSingle = (entity, payload) => {
    if (state.entities[entity] && state.entities[entity].list) {
      const { id } = payload;
      state.entities[entity].list[id] = payload;
    }
  };
  const loadCurrent = (entity, payload) => {
    if (state.entities[entity]) {
      state.entities[entity].current = payload;
    }
  };
  const updateCurrent = (entity, payload) => {
    if (state.entities[entity]) {
      const { key, value } = payload;
      state.entities[entity].current[key] = value;
    }
  };

  const getList = (entity) => {
    if (state.entities[entity]) {
      return state.entities[entity].list;
    }

    return null;
  };
  const getCurrent = (entity) => {
    if (state.entities[entity]) {
      return state.entities[entity].current;
    }

    return null;
  };

  return {
    getConstants,
    getList,
    getCurrent,
    loadList,
    loadSingle,
    loadCurrent,
    updateCurrent,
  };
};

export default useState;
