import React from "react";

function InterFacesAndTypes() {
  // InterFaces can only be object types
  interface IUser {
    id: string;
    name: string;
  }

  type User = {
    id: string;
    name: string;
  };

  const user1: IUser = {
    id: "1",
    name: "Kakarot",
  };

  const user2: User = {
    id: "2",
    name: "Itachi",
  };
  console.log([user1, user2]);

  /*
  Which one should be used?
  - Standard data types use Interfaces
  - Use Type for Union and Intersections
  - Key Differences
    - Interfaces are guaranteed to be 'named' in error message, whereas type aliases are not
    - Interfaces can not be used to remain primitives or literal types
    - Type aliases can not participate in declaration merging but interfaces can
*/

  // Unions
  type Suit = "CLUBS" | "DIAMONDS" | "HEARTS" | "SPADES";
  const cards: Suit = "HEARTS";
  console.log("cards", cards);

  // Intersections
  interface Timestamps {
    createdAt: Date;
    updatedAt: Date;
  }

  type PersistedUser = User & Timestamps;
  const persisted: PersistedUser = {
    id: "1",
    name: "Kakarot",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log("persisted", persisted);

  interface MergeUser {
    id: string;
    name: string;
  }

  interface MergeUser {
    age: number;
  }

  const NewUser: MergeUser = {
    id: "1",
    name: "Kakarot",
    age: 20,
  };

  console.log("NewUser", NewUser);

  const UserCreatedEvent = {
    eventType: "USER_CREATED",
    parameters: {
      id: 1,
      name: "Itachi",
      email: "Itachi@uchiha.com",
    },
  };

  const UserDeletedEvent = {
    eventType: "USER_DELETED",
    parameters: {
      id: 1,
    },
  };

  interface UserEvent {
    eventType: "USER_CREATED" | "USER_DELETED";
    parameters: {
      id: number;
      name?: string;
      email?: string;
    };
  }

  const handledEvent = (event: UserEvent) => {
    if (event.eventType === "USER_CREATED") {
      console.log("event.parameters.name", event.parameters.name);
      return;
    }
    if (event.eventType === "USER_DELETED") {
      console.log("event.parameters.name", event.parameters.id);
      console.log("event.parameters.name", event.parameters.name);
      // console.log("event.parameters.name", event.parameters.name.toLocaleLowerCase());
      return;
    }
  };

  interface UserCreatedEvent {
    eventType: "USER_CREATED";
    parameters: {
      id: number;
      name: string;
      email: string;
    };
  }

  interface UserDeletedEvent {
    eventType: "USER_DELETED";
    parameters: {
      id: number;
    };
  }

  type BetterUserEvent = UserCreatedEvent | UserDeletedEvent;

  const handledUserEvent = (event: BetterUserEvent) => {
    if (event.eventType === "USER_CREATED") {
      console.log("event.parameters.name", event.parameters.name);
      return;
    }
    if (event.eventType === "USER_DELETED") {
      console.log("event.parameters.name", event.parameters.id);
      // console.log("event.parameters.name", event.parameters.name);
      return;
    }
  };

  return <div>InterFaces And Types or Union And Intersection</div>;
}

export default InterFacesAndTypes;
