<template>
  <div>
    <h1>Главная</h1>
  </div>
</template>

<script>
import useState from "@/state/index";

export default {
  setup() {
    const { getCurrent } = useState();

    return {
      getCurrent,
    };
  },
};
</script>
