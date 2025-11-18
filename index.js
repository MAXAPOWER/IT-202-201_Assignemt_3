function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var weightFloat = parseFloat(weight);
  var feet = document.getElementById("feet").value;
  var feetInt = parseInt(feet);
  var inches = document.getElementById("inches").value;
  var inchesInt = parseInt(inches);
  var calculatedHeight = (feetInt * 12) + inchesInt;
  var calculatedBMI = (weightFloat / (calculatedHeight ** 2)) * 703;
  var solution = "With a weight of " + weightFloat + " pounds and height of " + feetInt + " feet, " + inchesInt + " inches, the BMI is " + calculatedBMI + " pounds per inches squared.";
  document.getElementById("calculateBMI").innerHTML = solution;
};

//calculateBMI();
