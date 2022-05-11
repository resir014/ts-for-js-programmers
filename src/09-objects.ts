type ObjectWithStringKey = Record<string, any>;

const outside = 'hello';

const obj: ObjectWithStringKey = {
  [outside]: 'string',
};

obj[outside];
