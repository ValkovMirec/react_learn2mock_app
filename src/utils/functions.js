import Chance from "../../node_modules/chance";
import { interestsArray } from "../data/generatorDataArrays";
import { mappedAvatarNames } from "../data/generatorDataArrays";

const chance = new Chance();

console.log(
  "mappedAvatarNames",
  mappedAvatarNames[chance.integer({ min: 1, max: 99 })]
);

export function completedAt() {
  const month = chance.integer({ min: 0, max: 11 });
  //
  let day;
  //
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      // 31-day month
      day = chance.integer({ min: 1, max: 31 });
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      // 30-day month
      day = chance.integer({ min: 1, max: 30 });
      break;
    default:
      // february
      day = chance.integer({ min: 1, max: 29 });
  }

  //

  return new Date(2020, month, day);
}

function isCompleted(a) {
  const presentDate = new Date().getTime() / 1000;
  const comparingDate = new Date(a).getTime / 1000;

  if (comparingDate < presentDate) {
    return true;
  } else if (comparingDate > presentDate) {
    return false;
  }
}

//function for generating todo data with for cycle and pushing them into an array for rendering

export function generateTodo(a) {
  const todos = [];
  //
  for (let i = 0; i <= a; i++) {
    const todo = {
      id: chance.integer({ min: 0 }),
      title: chance.sentence({ words: 5 }),
      description: chance.sentence(),
      completedAt: completedAt(),
      completed: new Date(completedAt).getTime() / 1000 < new Date(),
    };

    todos.push(todo);
  }

  return todos;
}

//function for generating user data with for cycle and pushing them into an array for rendering

export function generateUser(a) {
  const users = [];

  //
  for (let i = 1; i <= a; i++) {
    const randomInterest =
      interestsArray[chance.integer({ min: 0, max: interestsArray.length })];

    const randomAvatar = mappedAvatarNames[chance.integer({ min: 0, max: 99 })];

    //

    const user = {
      name: chance.name(),
      age: chance.integer({ min: 18, max: 65 }),
      interests: randomInterest,
      avatar: `https://robohash.org/${randomAvatar}.png?size=150x150&set=set1`,
    };

    users.push(user);
  }

  return users;
}

//

console.log("randominterest", interestsArray);
