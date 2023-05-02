<!--
Works Cited
—————————————————————————————————————
Credit to '@tylerlaceby' on YouTube,
from which the application structure was
sourced.

Credit to '@Steve8708' on YouTube,
from which the Duolingo-style buttons
were sourced.
-->

<script>
  import Board from "./components/Board.svelte";
  import { levelFailed } from "./store";
  import Keyboard from "./components/Keyboard.svelte";
  import PlayAgain from "./components/PlayAgain.svelte";
  import { fade } from "svelte/transition";
  import WordBank from "./components/WordBank.svelte";
</script>

<main>
  <nav>Quranic Arabic Wordle</nav>
  {#if $levelFailed}
    <PlayAgain />
  {:else}
    <div in:fade={{ duration: 900 }}>
      <WordBank />
      <div id="format">
        <Board />
        <Keyboard />
      </div>
    </div>
  {/if}
</main>

<style>
  nav {
    /* apply this to the container you want to animate */
    background: linear-gradient(-45deg, rgb(27, 164, 182), rgb(13, 68, 90));
    background-size: 400% 400%;
    animation: gradient-bg 10s ease infinite;
    color: white;
    padding: 15px;
    font-size: 2em;
    text-align: center;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  @keyframes gradient-bg {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  #format {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 1115px) {
    #format {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 546px) {
    #format {
      flex-direction: column;
    }
  }
</style>
