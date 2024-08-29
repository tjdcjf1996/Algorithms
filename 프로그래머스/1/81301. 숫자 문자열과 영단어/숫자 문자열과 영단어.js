function solution(s) {
  let numToWord = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0',
  };

  for (let [word, num] of Object.entries(numToWord)) {
    s = s.replace(RegExp(word, 'g'), num);
  }
  
  return parseInt(s);
}