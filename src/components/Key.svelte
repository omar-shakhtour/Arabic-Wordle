<script>
  export let char;
  export let keyPress;
</script>

<div class="key" on:click={() => keyPress(char.toUpperCase())}>
  {char}
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap");

  .key {
    padding: 20px 18px;
    margin: 4px 3px;
    background-color: var(--colorOne);
    color: rgb(255, 255, 255);
    border-radius: 4px;
    transition: background-color 0.3s;
    font-size: 30px;
    box-shadow: 0 5px 0 #075858;
    cursor: pointer;
  }
  .key:active {
    box-shadow: none;
    transform: translate(5px);
  }

  .key:hover {
    background-color: #10afaf;
  }
  @media screen and (max-width: 852px) {
    .key {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 739px) {
    .key {
      padding: 10px;
    }
  }

  @media screen and (max-width: 546px) {
    .key {
      margin-top: 5px;
      font-size: 25px;
      padding: 10px 0 10px 0;
      width: 90px;
      text-align: center;
    }
  }
</style>
