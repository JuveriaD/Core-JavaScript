let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];
console.log(animals);

let swimmers = animals.slice(0, 3);
console.log(swimmers);

let mammals = animals.slice(2, 4);
console.log(mammals);

//One option:
// starts at index 4 ends before index 6
// let reptiles = animals.slice(4, 6);

// Another option:
// starts from index 4 all the way to the end
let reptiles = animals.slice(4);
console.log(reptiles);

// negative value counts from back
// let quadruped = animals.slice(-3,-1);
let quadruped = animals.slice(-3);
console.log(quadruped);
