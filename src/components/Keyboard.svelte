<script>
  import Key from "./Key.svelte";
  import {
    board,
    gameInfo,
    colors,
    GAME_WORD,
    guess,
    gameOver,
  } from "../store";
  const firstRow = ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د"];
  const secondRow = ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ذ"];
  const thirdRow = [
    "ENTER",
    "ئ",
    "ء",
    "ؤ",
    "ر",
    "ى",
    "ة",
    "و",
    "ز",
    "ط",
    "ظ",
    "DEL",
  ];

  const delButton = () => {
    if ($gameInfo.char === 0) return;

    gameInfo.update((prev) => {
      return {
        char: prev.char - 1,
        attempt: prev.attempt,
      };
    });

    board.update((prevBoard) => {
      const newBoard = prevBoard;
      newBoard[$gameInfo.attempt][2 - $gameInfo.char] = "";
      return newBoard;
    });
  };

  const enterButton = () => {
    let { attempt, char } = $gameInfo;
    if (char !== 3) {
      return;
    } else {
      gameInfo.set({
        attempt: attempt + 1,
        char: 0,
      });

      const prevAttempt = $gameInfo.attempt - 1;
      const newColorsBoard = $colors;

      for (let i = 0; i < 3; i++) {
        let char = $board[prevAttempt][i];
        guess.update((prevChars) => prevChars + char);

        if ($GAME_WORD[i] === char) {
          newColorsBoard[prevAttempt][i] = "correct";
        } else if ($GAME_WORD.includes(char)) {
          newColorsBoard[prevAttempt][i] = "almost";
        } else {
          newColorsBoard[prevAttempt][i] = "incorrect";
        }
      }
      colors.set(newColorsBoard);

      // check if the game is over
      if ($guess === $GAME_WORD || prevAttempt === 4) {
        gameOver.set(true);
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
      let { attempt, char } = $gameInfo;
      if (char > 2) return;

      board.update((prevBoard) => {
        const newBoard = prevBoard;
        newBoard[attempt][2 - char++] = key;
        return newBoard;
      });

      gameInfo.set({ attempt, char });
    }
  };
</script>

<div class="keyboard">
  <div class="row">
    {#each firstRow as char}
      <Key {char} {keyPress} />
    {/each}
  </div>

  <div class="row">
    {#each secondRow as char}
      <Key {char} {keyPress} />
    {/each}
  </div>

  <div class="row">
    {#each thirdRow as char}
      <Key {char} {keyPress} />
    {/each}
  </div>
</div>

<style>
  .keyboard {
    position: fixed;
    width: fit-content;
    bottom: 20px;
    left: 50%;
    transform: translate(-24%, -50%);
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
