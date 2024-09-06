function numberToPower(number, power){
    console.info(Math.log2(1024));

    let result = 1;
    for (let i = 0; i < power; i++)
        result *= number;
    return result;
}

  console.log(numberToPower(4, 2));
  console.log(numberToPower(10, 4));
  console.log(numberToPower(10, 0));