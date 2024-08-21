const numberToEnglish = [
  "Zero", "One", "Two", "Three", "Four", "Five",
  "Six", "Seven", "Eight", "Nine", "Ten"
];

const paragraph = number => {
  let paragraph = ''
  const nIfFall = number - 1;
  const last = nIfFall <= 0;
  const ifFallText = last ? 'If that' : 'And if'
  const afterFallText = last ? 'no' : numberToEnglish[nIfFall];
  const bottleLexicalNumber = number => number == 1 ? 'bottle' : 'bottles';

  const firstsLines = `${numberToEnglish[number]} green ${bottleLexicalNumber(number)} hanging on the wall,\n`
  const thirdLine = `${ifFallText} one green bottle should accidentally fall,\n`
  const fourthLine = `There'll be ${afterFallText.toLowerCase()} green ${bottleLexicalNumber(nIfFall)} hanging on the wall.`;

  let lineText = '';
  for (let line = 0; line < 4; line++) {
    switch (line) {
      case 0:
      case 1:
        lineText = firstsLines;
        break;
      case 2:
        lineText = thirdLine;
        break;
      case 3:
        lineText = fourthLine

    }
    paragraph += lineText;
  }

  return paragraph + '\n'
}

const tenGreenBottles = n => {
  let lyric = '';
  for (let i = n; i > 0; i--) {
    lyric += paragraph(i);
    if(i > 1) lyric += '\n'
  }
  return lyric;
}

console.log(tenGreenBottles(2));