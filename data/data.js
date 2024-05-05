const fs = require("fs").promises;

const DATA_PATH = './data/films.json';

const readData = async (url = DATA_PATH) => {
  try {
    const data = await fs.readFile(url, "utf-8");
    const json = JSON.parse(data);
    return json;
  } catch (error) {
    console.log(error);
  }
};

const writeData = async (data, url = DATA_PATH) => {
  const json = JSON.stringify(data);
  await fs.writeFile(url, json);
};

module.exports = { readData, writeData };
