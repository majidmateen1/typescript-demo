import React from "react";

function AnyAndUnknown() {
  //Any type
  // any turn off the type checker
  const logger = (something: any): void => {
    console.log(something.toUpperCase());
  };
  logger("hello typescript");

  //Unknown type
  // in unknown we have type safety
  //should use unknown instead of any type
  const logger2 = (something: unknown): void => {
    if (something === "string") {
      console.log(something.toUpperCase());
    } else {
      console.log(something);
    }
  };

  logger2("hello typescript");

  // const logger2 = (something: unknown): void => {
  //   console.log(something.toUpperCase());
  // };

  return <div>AnyAndUnknown</div>;
}

export default AnyAndUnknown;
