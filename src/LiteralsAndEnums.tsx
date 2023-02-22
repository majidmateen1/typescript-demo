import React from "react";

//Literal Type
// you just constain your code to specific input
function LiteralsAndEnums() {
  const flipCoin = (): "Head" | "Tail" =>
    Math.random() < 0.5 ? "Head" : "Tail";
  console.log("flipCoin", flipCoin());

  //somthing pre defined and fixed set of values  or predefined sets used such as in SDK's

  //IT DOES NOT CROSS YOUR CODE BOUNDRY

  enum Suit {
    Hearts = "Hearts",
    Spades = "Spades",
    Diamonds = "Diamonds",
    Clubs = "Clubs",
  }

  console.log("Suit", Suit.Clubs);
  return <div>LiteralsAndEnums</div>;
}

export default LiteralsAndEnums;
