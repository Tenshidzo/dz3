const reverseNumber = num => {
    const reversedNum = parseInt(num.toString().split("").reverse().join(""), 10);
    console.log(reversedNum);
  };
  reverseNumber(1234);