import { fetchById, fetchAll, fetchHelp, fetchCredits, fetchAbout } from './pokeStaticApi';

test('should fetch credits', () => {
  expect(fetchCredits()).not.toBe(null);
});

test('should fetch about', () => {
  expect(fetchAbout()).not.toBe(null);
});

test('should fetch help', () => {
  expect(fetchHelp()).not.toBe(null);
});

test('should fetch all pokemons', () => {
  expect(fetchAll()).not.toBe(null);
});

test('should fetch pokemon by id', () => {
  expect(fetchById(1)).toEqual({
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.71 m",
    "weight": "6.9 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.69,
    "avg_spawns": 69,
    "spawn_time": "20:00",
    "multipliers": [
      1.58
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "next_evolution": [
      {
        "num": "002",
        "name": "Ivysaur"
      },
      {
        "num": "003",
        "name": "Venusaur"
      }
    ]
  });
});