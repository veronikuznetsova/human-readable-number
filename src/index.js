module.exports = function toReadable (number) {
  number = String(number);
  let rezult = '';
  let array = [];
  array = Array.from(number).reverse();
  
  if (number === '0') return 'zero';

  switch (array[2]) {
          case '1': rezult = `one hundred `;       break;
          case '2': rezult = `two hundred `;       break;
          case '3': rezult = `three hundred `;     break;
          case '4': rezult = `four hundred `;      break;
          case '5': rezult = `five hundred `;      break;
          case '6': rezult = `six hundred `;       break;
          case '7': rezult = `seven hundred `;     break;
          case '8': rezult = `eight hundred `;     break;
          case '9': rezult = `nine hundred `;      break;
  default: break;
  }

  switch (array[1]) {
      case '1' :
        switch (array[0]) {
          case '0': rezult = `${rezult}ten`;      return rezult;
          case '1': rezult = `${rezult}eleven`;   return rezult;
          case '2': rezult = `${rezult}twelve`;   return rezult;
          case '3': rezult = `${rezult}thirteen`; return rezult;
          case '4': rezult = `${rezult}fourteen`; return rezult;
          case '5': rezult = `${rezult}fifteen`;  return rezult;
          case '6': rezult = `${rezult}sixteen`;  return rezult;
          case '7': rezult = `${rezult}seventeen`;return rezult;
          case '8': rezult = `${rezult}eighteen`; return rezult;
          case '9': rezult = `${rezult}nineteen`; return rezult;
        }
      case '2': rezult = `${rezult}twenty `;        break;
      case '3': rezult = `${rezult}thirty `;        break;
      case '4': rezult = `${rezult}forty `;         break;
      case '5': rezult = `${rezult}fifty `;         break;
      case '6': rezult = `${rezult}sixty `;         break;
      case '7': rezult = `${rezult}seventy `;       break;
      case '8': rezult = `${rezult}eighty `;        break;
      case '9': rezult = `${rezult}ninety `;        break;
  default: break;
  }

  switch (array[0]) {
          case '1': rezult = `${rezult}one`;       break;
          case '2': rezult = `${rezult}two`;       break;
          case '3': rezult = `${rezult}three`;     break;
          case '4': rezult = `${rezult}four`;      break;
          case '5': rezult = `${rezult}five`;      break;
          case '6': rezult = `${rezult}six`;       break;
          case '7': rezult = `${rezult}seven`;     break;
          case '8': rezult = `${rezult}eight`;     break;
          case '9': rezult = `${rezult}nine`;      break;
  default: break;
  }

return (rezult.trimEnd())
}