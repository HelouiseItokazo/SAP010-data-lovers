export const filterData = (namePokemon, pokemons) => {

  return pokemons.filter(pokemon => pokemon.name.includes(namePokemon));

}//endFilterData


const sorted = (orderBy, pokemons, property) => {

  if (orderBy === 'asc' || orderBy === 'a-z') {

    pokemons.sort((a, b) => { if (a[property] < b[property]) return -1 });

  }//endIf

  if (orderBy === 'desc' || orderBy === 'z-a') {

    pokemons.sort((a, b) => { if (a[property] > b[property]) return -1 });

  }//endIf

}//endSorted

export const sortData = (pokemons, sortBy, orderBy) => {

  const pokemonsSorted = pokemons.filter(pokemon => pokemon.type.includes(sortBy));

  console.log(pokemonsSorted);

  const alphabeticalOrder = 'a-z' || 'z-a';
  const sortByPokedexNumber = 'asc' || 'desc';

  if (orderBy === alphabeticalOrder) {
    sorted(orderBy, pokemonsSorted, 'name');
  }

  if (orderBy === sortByPokedexNumber) {
    sorted(orderBy, pokemonsSorted, 'num');
  }

  return pokemonsSorted;

}//endSortData


export const computeStats = {

  calculatePokemonTypesInPercentages: (pokemons) => {

    const totalNumberOfPokemons = pokemons.length;

    const count = {};

    for (const pokemon in pokemons) {

      pokemons[pokemon].type.forEach(type => {
        count[type] = (count[type] || 0) + 1;
      });

    }//endFor

    for (const type in count) {
      count[type] = ((count[type] / totalNumberOfPokemons) * 100).toFixed(2);
    }//endFor

    return count;

  },//endCalculatePokemonTypesInPercentages

  findTheBiggestPokemonSizes: (pokemons, property) => {

    let sizePokemons = [];

    const sizes = pokemons.map(pokemon => {
      return parseFloat(pokemon.size[property]);
    })

    const max = Math.max(...sizes);

    sizePokemons = pokemons.filter(pokemon => pokemon.size[property].includes(max));

    return sizePokemons;

  }//endFindBiggestPokemonSizes

}//endComputStats


/*
if (Object.keys(data.pokemon[pokemon].evolution).filter((key) => key.includes('next-evolution')).length !== 0) {

        const idNextEvolution = data.pokemon[pokemon].evolution['next-evolution'][0].num;

        for (const evolution in data.pokemon) {

          if (data.pokemon[evolution].num.includes(idNextEvolution)) {

            pokemons.push(data.pokemon[evolution]);

          }//endIf

        }//endFor

      }//endIf

*/






