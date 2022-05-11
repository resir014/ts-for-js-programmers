interface Person {
  name: string;
  age: number;
}

function sortByName(a: Person[]) {
  const result = a.slice(10);
  result.sort((x, y) => {
    return x.name.localeCompare(y.name);
  });
  return result;
}

sortByName([{ name: 'Agus', age: 27 }]);
