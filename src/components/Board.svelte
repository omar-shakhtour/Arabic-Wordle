<script>
  import { board } from "../store";
  import Harf from "./Harf.svelte";
</script>

<div class="game-board">
  <!-- Use '#each' to iterate through the array, and '$' to get current value -->

  <!-- Anything within '#each', will be repeated by # of columns -->
  {#each $board as column, y}
    <div class="row">
      <!-- Get X & Y value of the letters -->
      {#each column as row, x}
        <Harf {y} {x} />
      {/each}
    </div>
  {/each}
</div>

<style>
  .game-board {
    margin: 40px;
    margin-left: 120px;
    width: fit-content;
  }

  .row {
    display: flex;
  }
</style>
