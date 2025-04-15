/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

const pokedex = [
{
  name: 'Treecko',
  dex: 1,
  type: ["Grass"],
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png"
},
{
  name: 'Grovyle',
  dex: 2,
  type: ["Grass"],
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/253.png"
},
{
  name: 'Sceptile',
  dex: 3,
  type: ["Grass"],
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png"
},
{
  name: 'Torchic',
  dex: 4, 
  type: ["Fire"],
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png"
},
{
  name: 'Combusken',
  dex: 5,
  type: ["Fire", "Fighting"],
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/256.png"
},
{
  name: 'Blaziken',
  dex: 6,
  type: ["Fire", "Fighting"],
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png"
},
{
  name: 'Mudkip',
  dex: 7,
  type: ["Water"],
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png"
},
{
  name: 'Marshtomp',
  dex: 8,
  type: ["Water", "Ground"],
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/259.png"
},
{
  name: 'Swampert',
  dex: 9,
  type: ["Water", "Ground"],
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png"
},
{
  name: 'Poochyena',
  dex: 10,
  type: ['Dark'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/261.png'
},
{
  name: 'Mightyena',
  dex: 11,
  type: ['Dark'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/262.png'
},
{
  name: 'Zigzagoon',
  dex: 12,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/263.png'
},
{
  name: 'Linoone',
  dex: 13,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/264.png'
},
{
  name: 'Wurmple',
  dex: 14,
  type: ['Bug'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/265.png'
},
{
  name: 'Silcoon',
  dex: 15,
  type: ['Bug'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/266.png'
},
{
  name: 'Beautifly',
  dex: 16,
  type: ['Bug', 'Flying'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/267.png'
},
{
  name: 'Cascoon',
  dex: 17,
  type: ['Bug'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/268.png'
},
{
  name: 'Dustox',
  dex: 18,
  type: ['Bug', 'Poison'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/269.png'
},
{
  name: 'Lotad',
  dex: 19,
  type: ['Water', 'Grass'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/270.png'
},
{
  name: 'Lombre',
  dex: 20,
  type: ['Water', 'Grass'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/271.png'
},
{
  name: 'Ludicolo',
  dex: 21,
  type: ['Water', 'Grass'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/272.png'
},
{
  name: 'Seedot',
  dex: 22,
  type: ['Grass'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/273.png'
},
{
  name: 'Nuzleaf',
  dex: 23,
  type: ['Grass', 'Dark'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/274.png'
},
{
  name: 'Shiftry',
  dex: 24,
  type: ['Grass', 'Dark'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/275.png'
},
{
  name: 'Taillow',
  dex: 25,
  type: ['Normal', 'Flying'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/276.png'
},
{
  name: 'Swellow',
  dex: 26,
  type: ['Normal', 'Flying'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/277.png'
},
{
  name: 'Wingull',
  dex: 27,
  type: ['Water', 'Flying'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/278.png'
},
{
  name: 'Pelipper',
  dex: 28,
  type: ['Water', 'Flying'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/279.png'
},
{
  name: 'Ralts',
  dex: 29,
  type: ['Psychic', 'Fairy'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/280.png'
},
{
  name: 'Kirlia',
  dex: 30,
  type: ['Psychic', 'Fairy'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/281.png'
},
{
  name: 'Gardevoir',
  dex: 31,
  type: ['Psychic', 'Fairy'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png'
},
{
  name: 'Surskit',
  dex: 32,
  type: ['Bug', 'Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/283.png'
},
{
  name: 'Masquerain',
  dex: 33,
  type: ['Bug', 'Flying'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/284.png'
},
{
  name: 'Shroomish',
  dex: 34,
  type: ['Grass'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/285.png'
},
{
  name: 'Breloom',
  dex: 35,
  type: ['Grass', 'Fighting'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/286.png'
},
{
  name: 'Slakoth',
  dex: 36,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/287.png'
},
{
  name: 'Vigoroth',
  dex: 37,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/288.png'
},
{
  name: 'Slaking',
  dex: 38,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/289.png'
},
{
  name: 'Nincada',
  dex: 39,
  type: ['Bug', 'Ground'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/290.png'
},
{
  name: 'Ninjask',
  dex: 40,
  type: ['Bug', 'Flying'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/291.png'
},
{
  name: 'Shedinja',
  dex: 41,
  type: ['Bug', 'Ghost'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/292.png'
},
{
  name: 'Whismur',
  dex: 42,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/293.png'
},
{
  name: 'Loudred',
  dex: 43,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/294.png'
},
{
  name: 'Exploud',
  dex: 44,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/295.png'
},
{
  name: 'Makuhita',
  dex: 45,
  type: ['Fighting'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/296.png'
},
{
  name: 'Hariyama',
  dex: 46,
  type: ['Fighting'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/297.png'
},
{
  name: 'Azurill',
  dex: 47,
  type: ['Normal', 'Fairy'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/298.png'
},
{
  name: 'Nosepass',
  dex: 48,
  type: ['Rock'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/299.png'
},
{
  name: 'Skitty',
  dex: 49,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/300.png'
},
{
  name: 'Delcatty',
  dex: 50,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/301.png'
},
{
  name: 'Sableye',
  dex: 51,
  type: ['Dark', 'Ghost'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/302.png'
},
{
  name: 'Mawile',
  dex: 52,
  type: ['Steel', 'Fairy'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/303.png'
},
{
  name: 'Aron',
  dex: 53,
  type: ['Steel', 'Rock'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/304.png'
},
{
  name: 'Lairon',
  dex: 54,
  type: ['Steel', 'Rock'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/305.png'
},
{
  name: 'Aggron',
  dex: 55,
  type: ['Steel', 'Rock'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/306.png'
},
{
  name: 'Meditite',
  dex: 56,
  type: ['Fighting', 'Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/307.png'
},
{
  name: 'Medicham',
  dex: 57,
  type: ['Fighting', 'Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/308.png'
},
{
  name: 'Electrike',
  dex: 58,
  type: ['Electric'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/309.png'
},
{
  name: 'Manectric',
  dex: 59,
  type: ['Electric'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/310.png'
},
{
  name: 'Plusle',
  dex: 60,
  type: ['Electric'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/311.png'
},
{
  name: 'Minun',
  dex: 61,
  type: ['Electric'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/312.png'
},
{
  name: 'Volbeat',
  dex: 62,
  type: ['Bug'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/313.png'
},
{
  name: 'Illumise',
  dex: 63,
  type: ['Bug'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/314.png'
},
{
  name: 'Roselia',
  dex: 64,
  type: ['Grass', 'Poison'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/315.png'
},
{
  name: 'Gulpin',
  dex: 65,
  type: ['Poison'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/316.png'
},
{
  name: 'Swalot',
  dex: 66,
  type: ['Poison'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/317.png'
},
{
  name: 'Carvanha',
  dex: 67,
  type: ['Water', 'Dark'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/318.png'
},
{
  name: 'Sharpedo',
  dex: 68,
  type: ['Water', 'Dark'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/319.png'
},
{
  name: 'Wailmer',
  dex: 69,
  type: ['Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/320.png'
},
{
  name: 'Wailord',
  dex: 70,
  type: ['Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/321.png'
},
{
  name: 'Numel',
  dex: 71,
  type: ['Fire', 'Ground'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/322.png'
},
{
  name: 'Camerupt',
  dex: 72,
  type: ['Fire', 'Ground'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/323.png'
},
{
  name: 'Torkoal',
  dex: 73,
  type: ['Fire'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/324.png'
},
{
  name: 'Spoink',
  dex: 74,
  type: ['Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/325.png'
},
{
  name: 'Grumpig',
  dex: 75,
  type: ['Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/326.png'
},
{
  name: 'Spinda',
  dex: 76,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/327.png'
},
{
  name: 'Trapinch',
  dex: 77,
  type: ['Ground'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/328.png'
},
{
  name: 'Vibrava',
  dex: 78,
  type: ['Ground', 'Dragon'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/329.png'
},
{
  name: 'Flygon',
  dex: 79,
  type: ['Ground', 'Dragon'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/330.png'
},
{
  name: 'Cacnea',
  dex: 80,
  type: ['Grass'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/331.png'
},
{
  name: 'Cacturne',
  dex: 81,
  type: ['Grass', 'Dark'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/332.png'
},
{
  name: 'Swablu',
  dex: 82,
  type: ['Normal', 'Flying'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/333.png'
},
{
  name: 'Altaria',
  dex: 83,
  type: ['Dragon', 'Flying'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/334.png'
},
{
  name: 'Zangoose',
  dex: 84,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/335.png'
},
{
  name: 'Seviper',
  dex: 85,
  type: ['Poison'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/336.png'
},
{
  name: 'Lunatone',
  dex: 86,
  type: ['Rock', 'Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/337.png'
},
{
  name: 'Solrock',
  dex: 87,
  type: ['Rock', 'Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/338.png'
},
{
  name: 'Barboach',
  dex: 88,
  type: ['Water', 'Ground'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/339.png'
},
{
  name: 'Whiscash',
  dex: 89,
  type: ['Water', 'Ground'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/340.png'
},
{
  name: 'Corphish',
  dex: 90,
  type: ['Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/341.png'
},
{
  name: 'Crawdaunt',
  dex: 91,
  type: ['Water', 'Dark'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/342.png'
},
{
  name: 'Baltoy',
  dex: 92,
  type: ['Ground', 'Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/343.png'
},
{
  name: 'Claydol',
  dex: 93,
  type: ['Ground', 'Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/344.png'
},
{
  name: 'Lileep',
  dex: 94,
  type: ['Rock', 'Grass'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/345.png'
},
{
  name: 'Cradily',
  dex: 95,
  type: ['Rock', 'Grass'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/346.png'
},
{
  name: 'Anorith',
  dex: 96,
  type: ['Rock', 'Bug'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/347.png'
},
{
  name: 'Armaldo',
  dex: 97,
  type: ['Rock', 'Bug'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/348.png'
},
{
  name: 'Feebas',
  dex: 98,
  type: ['Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/349.png'
},
{
  name: 'Milotic',
  dex: 99,
  type: ['Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/350.png'
},
{
  name: 'Castform',
  dex: 100,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/351.png'
},
{
  name: 'Kecleon',
  dex: 101,
  type: ['Normal'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/352.png'
},
{
  name: 'Shuppet',
  dex: 102,
  type: ['Ghost'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/353.png'
},
{
  name: 'Banette',
  dex: 103,
  type: ['Ghost'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/354.png'
},
{
  name: 'Duskull',
  dex: 104,
  type: ['Ghost'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/355.png'
},
{
  name: 'Dusclops',
  dex: 105,
  type: ['Ghost'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/356.png'
},
{
  name: 'Tropius',
  dex: 106,
  type: ['Grass', 'Flying'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/357.png'
},
{
  name: 'Chimecho',
  dex: 107,
  type: ['Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/358.png'
},
{
  name: 'Absol',
  dex: 108,
  type: ['Dark'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png'
},
{
  name: 'Wynaut',
  dex: 109,
  type: ['Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/360.png'
},
{
  name: 'Snorunt',
  dex: 110,
  type: ['Ice'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/361.png'
},
{
  name: 'Glalie',
  dex: 111,
  type: ['Ice'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/362.png'
},
{
  name: 'Spheal',
  dex: 112,
  type: ['Ice', 'Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/363.png'
},
{
  name: 'Sealeo',
  dex: 113,
  type: ['Ice', 'Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/364.png'
},
{
  name: 'Walrein',
  dex: 114,
  type: ['Ice', 'Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/365.png'
},
{
  name: 'Clamperl',
  dex: 115,
  type: ['Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/366.png'
},
{
  name: 'Huntail',
  dex: 116,
  type: ['Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/367.png'
},
{
  name: 'Gorebyss',
  dex: 117,
  type: ['Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/368.png'
},
{
  name: 'Relicanth',
  dex: 118,
  type: ['Water', 'Rock'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/369.png'
},
{
  name: 'Luvdisc',
  dex: 119,
  type: ['Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/370.png'
},
{
  name: 'Bagon',
  dex: 120,
  type: ['Dragon'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/371.png'
},
{
  name: 'Shelgon',
  dex: 121,
  type: ['Dragon'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/372.png'
},
{
  name: 'Salamence',
  dex: 122,
  type: ['Dragon', 'Flying'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png'
},
{
  name: 'Beldum',
  dex: 123,
  type: ['Steel', 'Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/374.png'
},
{
  name: 'Metang',
  dex: 124,
  type: ['Steel', 'Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/375.png'
},
{
  name: 'Metagross',
  dex: 125,
  type: ['Steel', 'Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png'
},
{
  name: 'Regirock',
  dex: 126,
  type: ['Rock'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/377.png'
},
{
  name: 'Regice',
  dex: 127,
  type: ['Ice'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/378.png'
},
{
  name: 'Registeel',
  dex: 128,
  type: ['Steel'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/379.png'
},
{
  name: 'Latias',
  dex: 129,
  type: ['Dragon', 'Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/380.png'
},
{
  name: 'Latios',
  dex: 130,
  type: ['Dragon', 'Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/381.png'
},
{
  name: 'Kyogre',
  dex: 131,
  type: ['Water'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png'
},
{
  name: 'Groudon',
  dex: 132,
  type: ['Ground'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/383.png'
},
{
  name: 'Rayquaza',
  dex: 133,
  type: ['Dragon', 'Flying'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png'
},
{
  name: 'Jirachi',
  dex: 134,
  type: ['Steel', 'Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/385.png'
},
{
  name: 'Deoxys',
  dex: 135,
  type: ['Psychic'],
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/386.png'
},
];

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < pokedex.length; i++) {
    const pokemon = pokedex[i];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, pokemon); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, pokemon) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = "#" +  pokemon.dex + " " + pokemon.name;

  const cardImage = card.querySelector("img");
  cardImage.src = pokemon.image;
  cardImage.alt = pokemon.name + " Image";

  const types = card.querySelector("p");
  types.textContent = pokemon.type[0];
  if(pokemon.type[1] != undefined)
    types.textContent += " / " + pokemon.type[1];

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", pokemon.name, "- html: ", card);
}

function searchPokemon() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const filtered = pokedex.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(input) ||
    pokemon.type.some(type => type.toLowerCase().includes(input)) ||
    pokemon.dex.toString().includes(input)
  );

  displayFilter(filtered);
}

function displayFilter(filtered) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < filtered.length; i++) {
    const pokemon = filtered[i];

    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, pokemon);
    cardContainer.appendChild(nextCard);
  }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

