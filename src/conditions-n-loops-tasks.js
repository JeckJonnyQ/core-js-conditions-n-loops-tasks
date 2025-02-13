/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maxNumber = a;
  if (b > maxNumber) {
    maxNumber = b;
  }
  if (c > maxNumber) {
    maxNumber = c;
  }
  return maxNumber;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }

  const dx = Math.abs(queen.x - king.x);
  const dy = Math.abs(queen.y - king.y);
  if (dx === dy) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }

  if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumerals = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    11: 'XI',
    12: 'XII',
    13: 'XIII',
    14: 'XIV',
    15: 'XV',
    16: 'XVI',
    17: 'XVII',
    18: 'XVIII',
    19: 'XIX',
    20: 'XX',
    21: 'XXI',
    22: 'XXII',
    23: 'XXIII',
    24: 'XXIV',
    25: 'XXV',
    26: 'XXVI',
    27: 'XXVII',
    28: 'XXVIII',
    29: 'XXIX',
    30: 'XXX',
    31: 'XXXI',
    32: 'XXXII',
    33: 'XXXIII',
    34: 'XXXIV',
    35: 'XXXV',
    36: 'XXXVI',
    37: 'XXXVII',
    38: 'XXXVIII',
    39: 'XXXIX',
  };

  let result = '';
  let number = num;
  while (number > 0) {
    if (number >= 10) {
      result += romanNumerals[Math.floor(number / 10) * 10];
      number %= 10;
    } else {
      result += romanNumerals[number];
      number = 0;
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const string = `${numberStr}`;
  let res = '';

  for (let i = 0; i < string.length; i += 1) {
    const space = i === string.length - 1 ? '' : ' ';
    switch (string[i]) {
      case '0':
        res += `zero${space}`;
        break;
      case '1':
        res += `one${space}`;
        break;
      case '2':
        res += `two${space}`;
        break;
      case '3':
        res += `three${space}`;
        break;
      case '4':
        res += `four${space}`;
        break;
      case '5':
        res += `five${space}`;
        break;
      case '6':
        res += `six${space}`;
        break;
      case '7':
        res += `seven${space}`;
        break;
      case '8':
        res += `eight${space}`;
        break;
      case '9':
        res += `nine${space}`;
        break;
      case '-':
        res += `minus${space}`;
        break;
      case '.':
        res += `point${space}`;
        break;
      case ',':
        res += `point${space}`;
        break;
      default:
        break;
    }
  }

  return res;
}
/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;
  while (n > 0) {
    const lastDigit = n % 10;
    if (lastDigit === digit) {
      return true;
    }
    n = Math.floor(n / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  let counter = 1;
  let startRow = 0;
  let endRow = size - 1;
  let startCol = 0;
  let endCol = size - 1;

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col += 1) {
      matrix[startRow][col] = counter;
      counter += 1;
    }
    startRow += 1;

    for (let row = startRow; row <= endRow; row += 1) {
      matrix[row][endCol] = counter;
      counter += 1;
    }
    endCol -= 1;

    for (let col = endCol; col >= startCol; col -= 1) {
      matrix[endRow][col] = counter;
      counter += 1;
    }
    endRow -= 1;

    for (let row = endRow; row >= startRow; row -= 1) {
      matrix[row][startCol] = counter;
      counter += 1;
    }
    startCol += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const rotatedMatrix = matrix;

  for (let i = 0; i < n; i += 1) {
    for (let j = i; j < n; j += 1) {
      const swapElem = rotatedMatrix[i][j];
      rotatedMatrix[i][j] = rotatedMatrix[j][i];
      rotatedMatrix[j][i] = swapElem;
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < Math.floor(n / 2); j += 1) {
      const swapElem = rotatedMatrix[i][j];
      rotatedMatrix[i][j] = rotatedMatrix[i][n - j - 1];
      rotatedMatrix[i][n - j - 1] = swapElem;
    }
  }
  return rotatedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const newArr = arr;

  function quickSort(startIndex, endIndex) {
    if (startIndex < endIndex) {
      const divider = newArr[endIndex];
      let i = startIndex - 1;
      for (let j = startIndex; j < endIndex; j += 1) {
        if (newArr[j] <= divider) {
          i += 1;
          const temp = newArr[i];
          newArr[i] = newArr[j];
          newArr[j] = temp;
        }
      }

      const saveSwap = newArr[i + 1];
      newArr[i + 1] = newArr[endIndex];
      newArr[endIndex] = saveSwap;

      const dividerIndex = i + 1;
      quickSort(startIndex, dividerIndex - 1);
      quickSort(dividerIndex + 1, endIndex);
    }
  }

  const n = newArr.length;
  quickSort(0, n - 1);
  return newArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */

function shuffleChar(str, iterations) {
  let newStr = str;
  let iterLeft = iterations;

  while (iterLeft) {
    let oddPart = '';
    let evenPart = '';

    for (let i = 0; i < newStr.length; i += 1) {
      if (i % 2) {
        oddPart += newStr[i];
      } else {
        evenPart += newStr[i];
      }
    }
    newStr = `${evenPart}${oddPart}`;
    iterLeft -= 1;

    if (newStr === str) iterLeft = iterations % (iterations - iterLeft);
  }

  return newStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const array = [];
  let num = number;

  while (num > 0) {
    array.unshift(num % 10);
    num = Math.floor(num / 10);
  }

  let index = -1;
  const len = array.length;

  for (let i = len - 2; i >= 0; i -= 1) {
    if (array[i] < array[i + 1]) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    return number;
  }

  let swapIndex = -1;

  for (let i = len - 1; i >= 0; i -= 1) {
    if (array[i] > array[index]) {
      swapIndex = i;
      break;
    }
  }

  [array[index], array[swapIndex]] = [array[swapIndex], array[index]];

  const rightPart = array.splice(index + 1);
  rightPart.sort((a, b) => a - b);

  let newNumber = 0;

  for (let i = 0; i < array.length; i += 1) {
    newNumber = newNumber * 10 + array[i];
  }

  for (let i = 0; i < rightPart.length; i += 1) {
    newNumber = newNumber * 10 + rightPart[i];
  }

  return newNumber;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
