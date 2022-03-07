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

const getRndElement = (constant) => {
  const arr = Object.keys(constants.panels[constant]);
  const id = Math.floor(Math.random() * arr.length);

  return arr[id];
};

const generateRndSettings = () => {
  return {
    type: getRndElement("type"),
    size: getRndElement("size"),
    position: getRndElement("position"),
  };
};

export const generateSettingsList = (panelsList) => {
  const settingsList = {};
  Object.keys(panelsList).forEach((id) => {
    const setting = generateRndSettings();
    setting.id = id;
    settingsList[id] = setting;
  });

  return settingsList;
};
