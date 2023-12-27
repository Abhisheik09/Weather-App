/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-console */

const helpers = (function () {
  const createElement = function (tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  };

  const createElementWithInnerText = function (tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = text;
    return element;
  };

  const addInnerText = function (className, text) {
    const element = document.getElementById(className);
    if (element) {
      element.innerHTML = text;
      return element.innerHTML;
    }
  };

  async function getFahrenheit(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=903507f17d707fecd352d38301efba77&units=imperial`;
      const response = await fetch(url, { mode: 'cors' });
      const cityFahr = await response.json();
      return cityFahr;
    } catch (error) {
      console.error('Error:', error);
      alert('Could not find the location');
    }
  }

  return {
    addInnerText,
    createElement,
    createElementWithInnerText,
    getFahrenheit,
  };
})();

export default helpers;
