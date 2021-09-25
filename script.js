const numberToArray = (number) => {
  let resultArray = new Array(8);
  for (let i = 1; i <= 8; i++) {
    resultArray[8-i] = number % 10;
    number = Math.floor(number / 10);
  }

  return resultArray
}

const oddPairsCheck = (oddNumbersArray) => {
  let resultArray = [];
  let oddSequence = false;
  let oddSequenceEnd = false;
  for (let i = 0; i < 8; i++) {
    if (oddNumbersArray[i] === 0) {
      oddSequence = false;
      oddSequenceEnd = false;
    } 
    else {
      if (!oddSequence) {
        oddSequence = true;
      } 
      else {
        if (!oddSequenceEnd) {
          resultArray.push(1);
          oddSequenceEnd = i;
        }
        else {
          oddSequenceEnd++
        }
      }
    }
  }

  return (resultArray.length > 1) ? true : false ;
}

const oddEvenSumCheck = (numbersStartArray, oddNumbersArray) => {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < 8; i++) {
    if (oddNumbersArray[i]) {
      oddSum += numbersStartArray[i]
    }
    else {
      evenSum += numbersStartArray[i]
    }
  }

  return (evenSum > oddSum) ? 100 : 0 
}

const getOddSequenceAddresses = (oddNumbersArray) => {
  let resultArray = [];
  let accumulateArray = [];

  for (let i = 0; i < 8; i++) {
    if (oddNumbersArray[i] === 0) {
      if (accumulateArray.length > 1) {
        resultArray.push(accumulateArray);
        accumulateArray = [];
      } else {
        accumulateArray = [];
      }
    }
    else {
      accumulateArray.push(i);
    }

    if (i === 7) {
      if (accumulateArray.length > 1) {
        resultArray.push(accumulateArray);
      }
    }
  }

  return resultArray

}

const onePairAscendingCheck = (a, b) => a < b ;

const twoPairsAscendingCheck = (numbersStartArray, oddNumbersArray) => {
  let result2000 = false;
  let addressesArray = getOddSequenceAddresses(oddNumbersArray);

  if ( addressesArray.length === 3 ) {
    result2000 =
      ( onePairAscendingCheck(numbersStartArray[addressesArray[0][0]], numbersStartArray[addressesArray[0][1]]) && 
        onePairAscendingCheck(numbersStartArray[addressesArray[1][0]], numbersStartArray[addressesArray[1][1]]) ) ||
      ( onePairAscendingCheck(numbersStartArray[addressesArray[0][0]], numbersStartArray[addressesArray[0][1]]) && 
        onePairAscendingCheck(numbersStartArray[addressesArray[2][0]], numbersStartArray[addressesArray[2][1]]) ) ||
      ( onePairAscendingCheck(numbersStartArray[addressesArray[1][0]], numbersStartArray[addressesArray[1][1]]) && 
        onePairAscendingCheck(numbersStartArray[addressesArray[2][0]], numbersStartArray[addressesArray[2][1]]) )
  } else

  if ( addressesArray[0].length > 2 && addressesArray[1].length > 2 ) {
    if ( onePairAscendingCheck(numbersStartArray[addressesArray[0][0]], numbersStartArray[addressesArray[0][1]]) ) {
      result2000 =
      ( onePairAscendingCheck(numbersStartArray[addressesArray[0][0]], numbersStartArray[addressesArray[0][1]]) && 
        onePairAscendingCheck(numbersStartArray[addressesArray[1][0]], numbersStartArray[addressesArray[1][1]]) )
    } else 
    if ( onePairAscendingCheck(numbersStartArray[addressesArray[0][addressesArray[0].length-2]], numbersStartArray[addressesArray[0][addressesArray[0].length-1]]) ) {
      result2000 =
      ( onePairAscendingCheck(numbersStartArray[addressesArray[0][addressesArray[0].length-2]], numbersStartArray[addressesArray[0][addressesArray[0].length-1]]) && 
        onePairAscendingCheck(numbersStartArray[addressesArray[1][addressesArray[0].length-2]], numbersStartArray[addressesArray[1][addressesArray[0].length-1]]) )
    }
  } else

  if ( addressesArray[0].length > 2 && addressesArray[1].length === 2 ) {
    if ( onePairAscendingCheck(numbersStartArray[addressesArray[0][0]], numbersStartArray[addressesArray[0][1]]) ) {
      result2000 =
      ( onePairAscendingCheck(numbersStartArray[addressesArray[0][0]], numbersStartArray[addressesArray[0][1]]) && 
        onePairAscendingCheck(numbersStartArray[addressesArray[1][0]], numbersStartArray[addressesArray[1][1]]) )
    } else 
    if ( onePairAscendingCheck(numbersStartArray[addressesArray[0][addressesArray[0].length-2]], numbersStartArray[addressesArray[0][addressesArray[0].length-1]]) ) {
      result2000 =
      ( onePairAscendingCheck(numbersStartArray[addressesArray[0][addressesArray[0].length-2]], numbersStartArray[addressesArray[0][addressesArray[0].length-1]]) && 
        onePairAscendingCheck(numbersStartArray[addressesArray[1][0]], numbersStartArray[addressesArray[1][1]]) )
    }
  } else 

  if ( addressesArray[0].length === 2 && addressesArray[1].length > 2 ) {
    if ( onePairAscendingCheck(numbersStartArray[addressesArray[1][0]], numbersStartArray[addressesArray[1][1]]) ) {
      result2000 =
      ( onePairAscendingCheck(numbersStartArray[addressesArray[0][0]], numbersStartArray[addressesArray[0][1]]) && 
        onePairAscendingCheck(numbersStartArray[addressesArray[1][0]], numbersStartArray[addressesArray[1][1]]) )
    } else 
    if ( onePairAscendingCheck(numbersStartArray[addressesArray[1][addressesArray[1].length-2]], numbersStartArray[addressesArray[1][addressesArray[1].length-1]]) ) {
      result2000 =
      ( onePairAscendingCheck(numbersStartArray[addressesArray[1][addressesArray[1].length-2]], numbersStartArray[addressesArray[1][addressesArray[1].length-1]]) && 
        onePairAscendingCheck(numbersStartArray[addressesArray[0][0]], numbersStartArray[addressesArray[0][1]]) )
    }
  } else

  if ( addressesArray[0].length === 2 && addressesArray[1].length === 2 ) {
    result2000 = 
      ( onePairAscendingCheck(numbersStartArray[addressesArray[0][0]], numbersStartArray[addressesArray[0][1]]) && 
        onePairAscendingCheck(numbersStartArray[addressesArray[1][0]], numbersStartArray[addressesArray[1][1]]) )
  }  

  return result2000 ? 2000 : 1000
}

const promo = (promoNumber) => {
  let promoCodeNumbers = numberToArray(promoNumber);
  let promoCodeOddNumbers = promoCodeNumbers.map( number => number % 2 );
  if (!oddPairsCheck(promoCodeOddNumbers)) {
    return oddEvenSumCheck(promoCodeNumbers, promoCodeOddNumbers)
  }
  return twoPairsAscendingCheck(promoCodeNumbers, promoCodeOddNumbers)
}

console.log(promo(13534798));