const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

//
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// Aqui aplicamos destructure a los parametros de todaysWeather.
// Hay que separar destructuring y anotaciones
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

// Si no se hace tendran tipo 'any'
const logWeather1 = ({ date, weather }): void => {
  console.log(date);
  console.log(weather);
};

logWeather1(todaysWeather);
