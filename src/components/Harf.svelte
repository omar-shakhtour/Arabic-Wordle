<script>
  import { board, colors } from "../store";
  export let x;
  export let y;
  $: harf = $board[y][x];
  $: color = $colors[y][x];

  board.update((previous) => {
    const newBoard = previous;
    return newBoard;
  });
</script>

<div class={"harf " + color}>
  {harf}
</div>

<style>
  .harf {
    width: 90px;
    height: 80px;
    color: white;
    background-color: var(--colorOne);
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 55px;
    border-radius: 5px;
    transition: background-color 0.5s;
  }

  .correct {
    background-color: var(--correctColor);
  }

  .almost {
    background-color: var(--highlightColor);
  }

  .incorrect {
    background-color: var(--colorTwo);
  }
</style>
