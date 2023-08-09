module.exports = function toReadable (number) {
    const numbers1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numbers2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbers3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let array = [];
   
      let hundreds = Math.floor(number/100);
      let tens = Math.floor((number % 100)/10);
      let units = number % 10;
   
      array.push(hundreds, tens, units);
      console.log(array);
   
   if (hundreds === 0 && tens === 0) {//1,2 ,,,
     return numbers1[units];
   } else if (hundreds === 0 && tens === 1) {//для 10 - 19
     return numbers2[units];
   } else if (hundreds === 0 && tens > 1 && units >= 1) {//для 21-99
      return`${numbers3[tens - 2]} ${numbers1[units]}`;
    } else if (hundreds === 0 && tens > 1 && units === 0) {//для 20, 30, 40 - 90
      return`${numbers3[tens - 2]}`;
   } else if (hundreds === 1 && tens === 0 && units === 0) {
    return'one hundred'; //100
} else if (hundreds > 1 && tens === 0 && units === 0) {
    return `${numbers1[hundreds]} hundred`; //200 - 900
     
     
     
        } else if (hundreds >= 1 && tens === 1 && units === 0) {
   return `${numbers1[hundreds]} hundred ${numbers2[0]}`; //110,210
    } else if (hundreds >= 1 && tens >= 1 && units === 0) {
     return`${numbers1[hundreds]} hundred ${numbers3[tens - 2]}`; //190, 280 ...  
   } else if (number.length === 3 && number % 10 === 0) { 
     return`${numbers1[hundreds]} hundred ${numbers3[tens - 2]}`;
     
       } else if (array[1] === 1) {
    return`${numbers1[hundreds]} hundred ${numbers2[units]}`; //119
      } else if (array[1] > 1 && array[2] > 0) {
       return `${numbers1[hundreds]} hundred ${numbers3[tens -2]} ${numbers1[units]}`; //320
      } else if (array[1] === 0 && array[2] >= 1) {
        return`${numbers1[hundreds]} hundred ${numbers1[units]}`; //105
      }
}