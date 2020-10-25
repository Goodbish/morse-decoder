const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    "**********":" "
};

function decode (nums) {
    let result = morze(MORSE_TABLE);
    let decoded = [];
    let numsArr = nums.split('');
    let subarray = []; //массив в который будет выведен результат.
    for (let i = 0; i < Math.ceil(numsArr.length/10); i++){
        subarray[i] = numsArr.slice((i*10), (i*10) + 10);
        subarray[i] = subarray[i].join('');
    }
    for (let i = 0; i < subarray.length; i++) {
      for (let key in result) {
        if (subarray[i] == key) {
          decoded[i] = result[key]
        }
      }
    }
    decoded = decoded.join('');
    return decoded
  }

module.exports = {
    decode, morze
}

function morze(alphabet) {
    let result = {};
    for (let key in alphabet) {
      let zeros = '0000000000';
      zeros = zeros.split('');
      let arr = key.split('');
      for (let i = 0; i< key.length; i++) {
        switch (key[i]) {
          case '-': arr[i] = '11';
            break;
          case '.': arr[i] = '10';
            break;
        }
      }
      arr = arr.join('');
      // arr = arr.join(',');
      zeros.splice(zeros.length - arr.length, arr.length, arr);
      if (zeros.length > 1) {
         zeros = zeros.join('');
      }
      result[zeros] = alphabet[key];
    }
    return result
  }
