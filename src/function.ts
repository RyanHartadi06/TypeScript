function perkalian(val1 : number, val2: number) : number {
  return val1 * val2;
}

const result = perkalian(2, 5);

// default params
const fullName = (first : string, last: string  = "Hartadi") : string => {
  return first + " " + last;
}

console.log(fullName("Ryan"));

// optional params

const hello = (first : string, last? : string) : string => {
  return first + " " + last;
}

console.log(hello("Ryan"));