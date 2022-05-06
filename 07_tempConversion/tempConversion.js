const ftoc = function(temp) {
  // [°C] = ([°F] - 32) * (5 / 9)
  return Math.round((temp - 32) * (5/9) * 10) / 10;
};

const ctof = function(temp) {
  // [°F] = [°C] * (5/9) + 32
  return Math.round(((temp * (9/5) + 32)) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
