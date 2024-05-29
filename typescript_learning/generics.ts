// When to use generics

interface IAnimal {
  name: string;
}

interface IHuman {
  firstName: string;
  lastName: string;
}

export const getDisplayName = <TItem extends IAnimal | IHuman>(
  item: TItem,
): TItem extends IHuman ? { name: string } : { name: string } => {
  if ("name" in item) {
    return { name: item.name };
  } else {
    return { name: item.firstName + " " + item.lastName };
  }
};

class Animal implements IAnimal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Human implements IHuman {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let item1 = new Human("amit", "kumar");

let item2 = new Animal("dog");

let n_one = getDisplayName(item1);

let n_two = getDisplayName(item2);

console.log(n_one);
console.log(n_two);
