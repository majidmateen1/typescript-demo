import React from "react";

function NullvoidAndUndefined() {
  //void type
  const names = (name: string) => void console.log("name :", name);
  names("ali");

  //null type

  const nameAndAge = (name: string, age: number | null) =>
    console.log("name and age :", name, age);

  nameAndAge("ali", null);

  //undefined

  const name = (name?: string | undefined) => console.log("name :", name);

  name();

  return <div>NullvoidAndUndefined</div>;
}

export default NullvoidAndUndefined;
