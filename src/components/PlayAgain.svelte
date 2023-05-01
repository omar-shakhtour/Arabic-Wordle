<script>
  import {
    GAME_WORD,
    board,
    colors,
    gameInfo,
    gameOver,
    guess,
    createGrid,
  } from "../store";

  const resetGame = () => {
    const wordsList = ["رصن", "برض"];

    const word = wordsList[Math.floor(Math.random() * wordsList.length)];

    GAME_WORD.set(word);

    gameInfo.set({
      attempt: 0,
      char: 0,
    });

    guess.set("");
    colors.set(createGrid());
    board.set(createGrid());
    gameOver.set(false);
  };
</script>

<div class="center">
  <h4>
    The correct word was: <span>{$GAME_WORD.split("").reverse().join("")}</span>
  </h4>
  <h5>
    You guessed: <span>{$guess.split("").reverse().join("")}</span>
  </h5>
  <div class="center">
    <button on:click={resetGame}>Play Again!</button>
  </div>
</div>

<style>
  span {
    font-weight: 800;
  }

  h4,
  h5 {
    font-size: 2em;
  }

  button {
    background-color: var(--orange);
    color: white;
    margin-top: 20px;
    padding: 20px 50px;
    cursor: pointer;
    border: none;
  }

  .center {
    margin: 20px auto;
    width: fit-content;
    text-align: center;
  }
</style>
