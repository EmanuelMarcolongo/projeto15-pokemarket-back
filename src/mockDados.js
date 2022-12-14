const pokeProducts = [
    { name: "Bulbasaur",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    id: "1",
    evolution: "1",
    type: "Grass",
    type2: "Poison",
    value: 50.00}, 

    { name: "Ivysaur",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    id: "2",
    evolution: "2",
    type: "Grass",
    type2: "Poison",
    value: 150.00}, 
    { name: "Venusaur",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    id: "3",
    evolution: "3",
    type: "Grass",
    type2: "Poison",
    value: 500.00}, 

    { name: "Charmander",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    id: "4",
    evolution: "1",
    type: "Fire",
    value: 70.00}, 

    { name: "Charmeleon",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    id: "5",
    evolution: "2",
    type: "Fire",
    value: 200.00}, 

    { name: "Charizard",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    id: "6",
    evolution: "3",
    type: "Fire",
    value: 700.00},

    { name: "Squirtle",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    id: "7",
    evolution: "1",
    type: "Water",
    value: 50.00},

    { name: "Wartortle",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    id: "8",
    evolution: "2",
    type: "Water",
    value: 150.00},

    { name: "Blastoise",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    id: "9",
    evolution: "3",
    type: "Water",
    value: 500.00},

    { name: "Caterpie",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    id: "10",
    evolution: "1",
    type: "Bug",
    value: 20.00},

    { name: "Metapod",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    id: "11",
    evolution: "2",
    type: "Bug",
    value: 40.00},

    { name: "Butterfree",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    id: "12",
    evolution: "3",
    type: "Bug",
    type2: "Flying",
    value: 120.00},

    { name: "Weedle",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    id: "13",
    evolution: "1",
    type: "Bug",
    type2: "Poison",
    value: 20.00},

    { name: "Kakuna",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    id: "14",
    evolution: "2",
    type: "Bug",
    type2: "Poison",
    value: 50.00},

    { name: "Beedrill",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    id: "15",
    evolution: "3",
    type: "Bug",
    type2: "Poison",
    value: 150.00},

    { name: "Pidjey",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    id: "16",
    evolution: "1",
    type: "Normal",
    type2: "Flying",
    value: 40.00},

    { name: "Pidgeotto",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    id: "17",
    evolution: "2",
    type: "Normal",
    type2: "Flying",
    value: 80.00},

    { name: "Pidgeot",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    id: "18",
    evolution: "3",
    type: "Normal",
    type2: "Flying",
    value: 170.00},

    { name: "Rattata",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    id: "19",
    evolution: "1",
    type: "Normal",
    value: 20.00},

    { name: "Raticate",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
    id: "20",
    evolution: "2",
    type: "Normal",
    value: 70.00},

    { name: "Spearow",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    id: "21",
    evolution: "1",
    type: "Normal",
    type2: "Flying",
    value: 35.00},

    { name: "Fearow",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
    id: "22",
    evolution: "2",
    type: "Normal",
    type2: "Flying",
    value: 90.00},

    { name: "Ekans",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    id: "23",
    evolution: "1",
    type: "Poison",
    value: 50.00},
    { name: "Arbok",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    id: "24",
    evolution: "2",
    type: "Poison",
    value: 120.00},

    { name: "Pikachu",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    id: "25",
    evolution: "1",
    type: "Electric",
    value: 70.00},

    { name: "Raichu",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    id: "26",
    evolution: "2",
    type: "Electric",
    value: 200.00},

    { name: "Sandshrew",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
    id: "27",
    evolution: "1",
    type: "Ground",
    value: 50.00},

    { name: "Sandslash",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    id: "28",
    evolution: "2",
    type: "Ground",
    value: 110.00},

    { name: "Nidoran-f",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
    id: "29",
    evolution: "1",
    type: "Poison",
    value: 40.00},

    { name: "Nidorina",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
    id: "30",
    evolution: "2",
    type: "Poison",
    value: 80.00},

    { name: "Nidoqueen",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
    id: "31",
    evolution: "3",
    type: "Poison",
    value: 250.00},

    { name: "Nidoran-m",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
    id: "32",
    evolution: "1",
    type: "Poison",
    value: 40.00},

    { name: "Nidorino",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
    id: "33",
    evolution: "2",
    type: "Poison",
    value: 80.00},

    { name: "Nidoking",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
    id: "34",
    evolution: "3",
    type: "Poison",
    value: 210.00},

    { name: "Clefairy",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
    id: "35",
    evolution: "1",
    type: "Fairy",
    value: 45.00},

    { name: "Clefable",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
    id: "36",
    evolution: "2",
    type: "Fairy",
    value: 97.00},

    { name: "Vulpix",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    id: "37",
    evolution: "1",
    type: "Fire",
    value: 45.00},

    { name: "Ninetales",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    id: "38",
    evolution: "2",
    type: "Fire",
    value: 170.00},

    { name: "Jigglypuff",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    id: "39",
    evolution: "1",
    type: "Normal",
    type2: "Fairy",
    value: 40.00},

    { name: "Wigglytuff",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
    id: "40",
    evolution: "2",
    type: "Normal",
    type2: "Fairy",
    value: 90.00},
]