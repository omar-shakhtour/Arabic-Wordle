<script>
  import { board } from "../store";
  import Harf from "./Harf.svelte";

  let rows = [];
  $: rows = $board.map((column, y) => {
    return {
      y: y,
      columns: column.map((row, x) => {
        return {
          x: x,
          harf: row,
        };
      }),
    };
  });
</script>

<div class="game-board">
  <!-- Use '#each' to iterate through the array, and '$' to get current value -->
  {#each rows as { y, columns }}
    <div class="row">
      <!-- Get X & Y value of the letters -->
      {#each columns as { x, harf }}
        <Harf {y} {x} {harf} />
      {/each}
    </div>
  {/each}
</div>

<style>
  .game-board {
    margin: 40px;
    margin-left: 120px;
    width: fit-content;
    margin-left: 120px;
  }

  .row {
    display: flex;
  }
  @media screen and (max-width: 1115px) {
    .game-board {
      margin: auto;
    }
  }
  @media screen and (max-width: 546px) {
    .game-board {
      margin: auto;
    }
  }
</style>
