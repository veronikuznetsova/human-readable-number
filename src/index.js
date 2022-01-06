var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

module.exports = function toReadable (number) {
    if (number == 0) return "zero";
    else return toReadable_millions(number);
}

function toReadable_millions(number) {
  if (number >= 1000000) {
    return toReadable_millions(Math.floor(number/ 1000000)) + " million " + toReadable_thousands(number % 1000000);
  } else {
    return toReadable_thousands(number);
  }
}

function toReadable_thousands(number) {
  if (number>= 1000) {
    return toReadable_hundreds(Math.floor(number / 1000)) + " thousand " + toReadable_hundreds(number % 1000);
  } else {
    return toReadable_hundreds(number);
  }
}

function toReadable_hundreds(number) {
  if (number> 99) {
    return ones[Math.floor(number / 100)] + " hundred " + toReadable_tens(number % 100);
  } else {
    return toReadable_tens(number);
  }
}

function toReadable_tens(number) {
  if (number < 10) return ones[number];
  else if (number >= 10 && number < 20) return teens[number - 10];
  else {
    return tens[Math.floor(number / 10)] + " " + ones[number % 10];
  }
}