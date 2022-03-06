const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const makeRandomData = () => {
  const result = [];
  months.forEach((month) => {
    result.push({
      seriesName: month,
      value: Math.random().toFixed(2),
    });
  });

  return result;
};

export default makeRandomData();
