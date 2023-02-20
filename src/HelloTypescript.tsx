import React from "react";

function HelloTypescript() {
  const greeting: string = "Hello TypeScript";
  console.log("greeting", greeting);

  const numbers: number = 123;
  console.log("numbers", numbers);

  return <div>HelloTypescript</div>;
}

export default HelloTypescript;
