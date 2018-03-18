import data from './data.json';

export const fetchHelp = () => data.help;

export const fetchAbout = () => data.about;

export const fetchCredits = () => data.credits;

export const fetchById = id => data.pokemon.find(pokemon => pokemon.id == id)

export const fetchAll = () => data.pokemon;
