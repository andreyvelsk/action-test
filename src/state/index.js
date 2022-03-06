import { computed, reactive } from "vue";
import mockData from "@/modules/mock";

const state = reactive({
  current: {
    data: mockData,
  },
});

const useState = () => {
  // computed
  const getCurrent = computed(() => state.current);

  return {
    getCurrent,
  };
};

export default useState;
