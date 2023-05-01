<script>
  export let char;
  export let keyPress;
</script>

<div class="key" on:click={() => keyPress(char.toUpperCase())}>
  {char}
</div>

<style>
  .key {
    background-color: var(--bg);
    color: white;
    padding: 20px 18px;
    margin: 4px 3px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
    font-weight: bold;
    font-size: 25px;
  }

  .key:hover {
    background-color: var(--orange);
  }
</style>
