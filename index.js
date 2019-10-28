// Code your solutions in this file


function writeCards(someArr, word) {
    let thanks = []
    for (let countup = 0; countup < someArr.length; countup++) {
        thanks.push(`Thank you, ${someArr[countup]}, for the wonderful ${word} gift!`);
      }
      return thanks;
}

function countDown(someNum){
    for (let i =someNum; i>=0; i--){
        console.log(i);
    }
}
