<script>
  import {
    wordle,
    board,
    colors,
    userInput,
    levelFailed,
    guess,
    createMatrix,
    wordle_translate,
  } from "../store";

  import json from "./words.json";

  const openSearch = (url) => {
    window.open(url);
  };

  const resetGame = () => {
    const wordsList = json.jsonList.map((item) => ({
      word: item.word,
      translate: item.translate,
    }));

    const randomNum = Math.floor(Math.random() * wordsList.length);

    wordle.set(wordsList[randomNum].word);
    wordle_translate.set(wordsList[randomNum].translate);

    userInput.set({
      playerGuess: 0,
      char: 0,
    });

    guess.set("");
    colors.set(createMatrix());
    board.set(createMatrix());
    levelFailed.set(false);
  };

  const splitted = $wordle.split("").reverse().join("");
</script>

<div class="middle">
  <h5>
    You guessed: <span>{$guess.split("").reverse().join("")}</span>
  </h5>
  <hr />
  <h4>
    The correct word was: <span>{$wordle.split("").reverse().join("")}</span><br
    />
    Definition: <span>{$wordle_translate}</span>
  </h4>
  <div class="middle" id="buttons">
    <button
      id="linkButton"
      on:click={() =>
        openSearch(`https://quran.com/search?page=1&q=${splitted}`)}
      >Find this word<br /> in the Quran</button
    >
    <button on:click={resetGame} id="playButton">Play Again!</button>
  </div>
</div>

<style>
  h4,
  h5 {
    font-size: 2em;
    color: white;
  }

  hr {
    margin: 20px;
  }

  button {
    font-size: 20px;
    font-family: "Outfit", Arial, Helvetica, sans-serif;
    border: none;
    background-color: var(--colorOne);
    padding: 20px 50px;
    color: white;
    cursor: pointer;
    margin-top: 20px;
    box-shadow: 0 5px 0 #075858;
  }

  span {
    color: #00d5e4;
  }

  .middle {
    text-align: center;
    margin: 20px auto;
    width: fit-content;
  }

  #buttons {
    display: flex;
    flex-direction: row;
  }

  #linkButton {
    border-radius: 30px;
  }

  #playButton {
    font-size: 20px;
    margin-left: 20px;
    border-radius: 30px;
  }

  #playButton:active,
  #linkButton:active {
    box-shadow: none;
    transform: translateY(5px);
  }
  #playButton:hover,
  #linkButton:hover {
    background-color: #10afaf;
  }
</style>
