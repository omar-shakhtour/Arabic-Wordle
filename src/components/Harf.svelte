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
    background-color: var(--bg);
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 55px;
    border-radius: 5px;
    transition: background-color 0.9s;
  }

  .correct {
    background-color: var(--green);
  }

  .almost {
    background-color: var(--orange);
  }

  .incorrect {
    background-color: var(--dark);
  }
</style>
