import { writable } from "svelte/store"

export function createGrid(){
    const grid = [
        ['','',''],
        ['','',''],
        ['','',''],
        ['','',''],
        ['','','']
    ];

    /** Use the code below for dynamic grid to easily change
     * for (let i = 0; i<6; i++){
        grid.push([]);
        for( let x = 0; x < 5; x++) grid[i][x] = "";
    }
    **/

    return grid;
}

export const GAME_WORD = writable("باب");
export const guess = writable("");
export const colors = writable(createGrid());
export const gameOver = writable(false);

export const gameInfo = writable({
    char: 0,
    attempt: 0,
});

/** Use writable from Svelte to make grid, and export it so it's available in other components */
export const board = writable(createGrid());