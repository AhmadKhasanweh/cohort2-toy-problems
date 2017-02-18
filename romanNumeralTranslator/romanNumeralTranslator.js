
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
	romanNumeral = romanNumeral.split('');
	
	if(romanNumeral.length === 1){
		return DIGIT_VALUES[romanNumeral[0]];
	}

	var temp = DIGIT_VALUES[romanNumeral[0]];
	
	if(temp >= DIGIT_VALUES[romanNumeral[1]]){
	  romanNumeral = romanNumeral.splice(1).join('');
      return temp+translateRomanNumeral1(romanNumeral);
    }else if(temp < DIGIT_VALUES[romanNumeral[1]]){
      romanNumeral = romanNumeral.splice(1).join('');
      return translateRomanNumeral1(romanNumeral)-temp;
    }else{
    	return null;
    }

}