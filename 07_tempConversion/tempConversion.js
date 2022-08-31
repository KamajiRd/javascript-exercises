const ftoc = function(tempeture) {

  if (!Number.isInteger(tempeture)) return "ERROR";

  let operation = parseInt(tempeture) - 32;
  let rawResult = operation * 5/9;
  let roundedResult = Math.round(rawResult * 10) / 10;
  

  return roundedResult

};

const ctof = function(tempeture) {

  // if (!Number.isInteger(tempeture)) return "ERROR";

  let operation = parseInt(tempeture) * 1.8;
  let rawResult = operation + 32 ;
  let roundedResult = Math.round(rawResult * 10) / 10;
  

  return roundedResult


};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
