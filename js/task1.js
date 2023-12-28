function printNumbersInRange(start, end, isEven) {
    for (let i = start; i <= end; i++) {
      if ((isEven && i % 2 === 0) || (!isEven && i % 2 !== 0)) {
        console.log(i);
      }
    }
  }
printNumbersInRange(20, 38, true);