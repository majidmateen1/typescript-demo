import React from "react";

function UnderstandingTypes() {
  const greeting: string = "Hello TypeScript";

  //   const b:number = greeting + 1;
  //   console.log("greeting", greeting);

  const addTwoNumbers = (a: number, b: number): number => a + b;
  console.log("addTwoNumbers", addTwoNumbers(5, 5));

  const getuserById = (id: string): { id: string; name: string } => ({
    id: "id",
    name: "majid",
  });

  console.log("getuserById", getuserById("5"));

  //basically shape of data
  interface User {
    id: string;
    name: string;
    age: number;
  }

  const getuserByIdWithInterFaceType = (id: string): User => ({
    id: "id",
    name: "majid",
    age: 11,
  });

  console.log(
    "getuserByIdWithInterFaceType",
    getuserByIdWithInterFaceType("5")
  );

  return <div>UnderstandingTypes</div>;
}

export default UnderstandingTypes;
