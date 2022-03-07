import constants from "@/state/constants";

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

const generatePanel = (name) => {
  return {
    name,
    data: makeRandomData(),
  };
};

export const generatePanelsList = () => {
  const list = {};
  for (let i = 1; i < 6; i++) {
    list[i] = generatePanel(`Панель${i}`);
    list[i].id = i;
  }

  return list;
};

export const generateRndSettings = () => {
  const types = Object.keys(constants.panels.types);
  const typeId = Math.floor(Math.random() * types.length);
  return {
    type: types[typeId],
  };
};
