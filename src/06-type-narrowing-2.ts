type Fish = { swim: () => void };
type Bird = { fly: () => void };

type FishBirdHybrid = Fish & Bird;

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim();
  }

  return animal.fly();
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const animal = { fly: () => {} };

isFish(animal);
