// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

//FIXME

console.log(calcAge(1991));

const temperatures = [-3, -2, -1, 1, 2, 4, 17, 15, 14, 9, 5];

const calcTemptAmplitude = function (temps) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  return max - min;
};

calcTempAmplitude([3, 7, 4]);
const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //
    value: Number(prompt('Degrees celcius: ')),
  };

  console.log(measurement.value);
  console.table(measurement);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
*/

const printForecast = function (temps) {
  let forecast = '...';
  for (let i = 0; i < temps.length; i++) {
    forecast += temps[i] + ' celcius in ' + (i + 1) + ' days...';
  }
  return forecast;
};

console.log(printForecast([17, 21, 34]));
