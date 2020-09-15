//functions passed as parametervolador
const pokemons = [
  {
    name: "p1",
    type: "swimmer",
  },
  {
    name: "p2",
    type: "flyier",
  },
];
const flyingPokemons = pokemons.filter(function (pokemon) {
  return pokemon.type === "flyier";
});

console.log(flyingPokemons);

//filter, as map, reduce, some and every are functions of superior order, which means they are functions that receive other functions as parameter.
