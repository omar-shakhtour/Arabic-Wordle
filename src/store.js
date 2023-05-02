import { writable } from "svelte/store"
import json from "./components/words.json";

export function createMatrix(){
    const matrix = [
        ['','',''],
        ['','',''],
        ['','',''],
        ['','',''],
        ['','','']
    ];

    return matrix;
}

/** Use writable from Svelte to make matrix, and export it so it's available in other components */
export const board = writable(createMatrix());

const wordsList = json.jsonList.map((item) => ({
    word: item.word,
    translate: item.translate,
}));

const randomNum = Math.floor(Math.random() * wordsList.length);

export const wordle = writable(wordsList[randomNum].word);
export const wordle_translate = writable(wordsList[randomNum].translate);
export const guess = writable("");
export const colors = writable(createMatrix());
export const levelFailed = writable(false);

export const userInput = writable({
    char: 0,
    playerGuess: 0,
});