<script>
  import Board from "./components/Board.svelte";
  import { gameOver } from "./store";
  import Keyboard from "./components/Keyboard.svelte";
  import PlayAgain from "./components/PlayAgain.svelte";
  import { fade } from "svelte/transition";
</script>

<main>
  <nav>Arabic Wordle</nav>

  {#if $gameOver}
    <PlayAgain />
  {:else}
    <div in:fade={{ duration: 900 }}>
      <Board />
      <Keyboard />
    </div>
  {/if}
</main>

<style>
  nav {
    background-color: var(--bg);
    color: white;
    padding: 15px;
    font-size: 2em;
    text-align: center;
  }
</style>
