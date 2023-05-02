<script>
  import Key from "./Key.svelte";
  import {
    board,
    userInput,
    colors,
    wordle,
    guess,
    levelFailed,
  } from "../store";

  const rows = [
    ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د"],
    ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ذ"],
    ["ENTER", "ئ", "ء", "ؤ", "ر", "ى", "ة", "و", "ز", "ط", "ظ", "DEL"],
  ];

  const delButton = () => {
    if ($userInput.char === 0) return;

    userInput.update((prev) => ({
      char: prev.char - 1,
      playerGuess: prev.playerGuess,
    }));

    board.update((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[$userInput.playerGuess][2 - $userInput.char] = "";
      return newBoard;
    });
  };

  const enterButton = () => {
    let { playerGuess, char } = $userInput;
    if (char !== 3) {
      return;
    } else {
      userInput.set({ playerGuess: playerGuess + 1, char: 0 });

      const previousPlayerGuess = $userInput.playerGuess - 1;
      const newColorsBoard = [...$colors];

      for (let i = 0; i < 3; i++) {
        let char = $board[previousPlayerGuess][i];
        guess.update((prevChars) => prevChars + char);

        if ($wordle[i] === char) {
          newColorsBoard[previousPlayerGuess][i] = "correct";
        } else if ($wordle.includes(char)) {
          newColorsBoard[previousPlayerGuess][i] = "almost";
        } else {
          newColorsBoard[previousPlayerGuess][i] = "incorrect";
        }
      }
      colors.set(newColorsBoard);

      // check if the game is over
      if ($guess === $wordle || previousPlayerGuess === 4) {
        levelFailed.set(true);
      } else {
        guess.set("");
      }
    }
  };

  const keyPress = (key = "") => {
    if (key == "DEL") {
      delButton();
    } else if (key == "ENTER") {
      enterButton();
    } else {
      let { playerGuess, char } = $userInput;
      if (char > 2) return;

      board.update((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[playerGuess][2 - char++] = key;
        return newBoard;
      });

      userInput.set({ playerGuess, char });
    }
  };
</script>

<div class="keyboard">
  {#each rows as row}
    <div class="row">
      {#each row as char}
        <Key {char} {keyPress} />
      {/each}
    </div>
  {/each}
</div>

<style>
  .keyboard {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1115px) {
    .keyboard {
      margin: auto;
    }
  }
  @media screen and (max-width: 546px) {
    .keyboard {
      margin: auto;
      padding-top: 20px;
      flex-direction: row;
    }
    .row {
      flex-direction: column;
    }
  }
</style>
