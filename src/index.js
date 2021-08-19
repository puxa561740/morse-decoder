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
};

function decode(expr) {
    let arr = expr.match(/.{1,10}/g);
    let arr2 = arr.map(a => {
      if(a[0] === '*') {
        return ' '
      }
      return a.match(/.{1,2}/g).map(a => {
        if(a === '10') {
          return '.'
        }
        if(a === '11') {
          return '-'
        }
        
      }).filter( a => a != undefined ).join('');
    })
    return arr2.map(a => {
      if(MORSE_TABLE[a]){
        return MORSE_TABLE[a]
      }
      return a
    }).join('')
}

module.exports = {
    decode
}