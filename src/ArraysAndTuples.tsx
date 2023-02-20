import React from "react";

function ArraysAndTuples() {
  //Arrays
  const names: string[] = ["majid", "ali", "sabih"];
  console.log("names", names);

  const numbers: number[] = [1, 2, 3];
  console.log("numbers", numbers);

  const stringOrNumbers: (string | number)[] = ["majid", 11];
  console.log("stringOrNumbers", stringOrNumbers);

  //Tuples
  const stringAndNumbers: [string, number] = ["majid", 11];
  console.log("stringAndNumbers", stringAndNumbers);

  //wrong

  //    const NumberAndString: [number,string] = ["majid", 11];
  //    console.log("NumberAndString", NumberAndString);

  return <div>ArraysAndTuples</div>;
}

export default ArraysAndTuples;
