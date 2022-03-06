export const convertData = (propsData) => {
  const labels = [];
  const data = [];
  propsData.forEach((item) => {
    labels.push(item.seriesName);
    data.push(item.value);
  });
  return {
    labels,
    datasets: [
      {
        label: "",
        data,
        backgroundColor: generateChartColors(data.length),
      },
    ],
  };
};

const generateChartColors = (length) => {
  const colors = [];
  for (let i = 0; i < length; i++) {
    colors.push(`rgb(${rndColor()}, ${rndColor()}, ${rndColor()})`);
  }
  return colors;
};

const rndColor = () => {
  return Math.floor(Math.random() * 255);
};
