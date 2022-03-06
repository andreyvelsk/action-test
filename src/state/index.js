import { computed, reactive } from "vue";
import mockData from "@/modules/mock";
import constants from "./constants";

const state = reactive({
  constants,
  current: {
    data: mockData,
  },
});

const useState = () => {
  // computed
  const getCurrent = computed(() => state.current);
  const getConstants = computed(() => state.constants);

  return {
    getCurrent,
    getConstants,
  };
};

export default useState;
