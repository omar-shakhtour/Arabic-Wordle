<script>
  import { slide } from "svelte/transition";
  import json from "./words.json";
  let showWordBank = false;

  const openWordBank = () => {
    showWordBank = true;
  };

  const closeWordBank = () => {
    showWordBank = false;
  };

  const openSearch = (url) => {
    window.open(url);
  };
</script>

<div class="wordBankDiv">
  <button class="wordBankButton" on:click={openWordBank}>Word Bank</button>
  {#if showWordBank}
    <div class="wordBankOverlay">
      <div class="wordBankContainer" transition:slide>
        <div class="wordBankHeader">
          <h2>Word Bank</h2>
          <h3>Click on a word to view examples from the Quran</h3>
          <button class="closeWordBankButton" on:click={closeWordBank}
            >Close</button
          >
        </div>
        <div class="wordBankGrid">
          {#each json.jsonList as item}
            <div
              class="wordBankItem"
              on:click={() =>
                openSearch(
                  `https://quran.com/search?page=1&q=${item.word
                    .split("")
                    .reverse()
                    .join("")}`
                )}
            >
              <div class="word">{item.word.split("").reverse().join("")}</div>
              <div class="translate">{item.translate}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .wordBankDiv {
    display: flex;
    justify-content: center;
  }
  .wordBankOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wordBankContainer {
    background-color: var(--colorTwo);
    max-height: 80%;
    overflow-y: auto;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    width: 90%;
    max-width: 1000px;
  }

  .wordBankHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    color: white;
  }

  h3 {
    font-weight: 200;
    padding: 0 10px 0 20px;
    text-align: center;
  }

  .wordBankGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 10px;
  }

  .wordBankItem {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: space-between;

    padding: 10px;
    text-align: center;
    background-color: var(--colorOne);
    color: white;
    border-radius: 30px;
    font-size: 30px;
    cursor: pointer;
    box-shadow: 0 5px 0 #043636;
  }

  .wordBankItem:active {
    box-shadow: none;
    transform: translate(5px);
  }

  .wordBankItem:hover {
    background-color: #044949;
  }

  .translate {
    font-size: 20px;
  }

  .wordBankButton {
    display: flex;
    justify-content: center;
    margin-left: 100px;
    margin-top: 30px;
    width: 300px;
    padding: 20px;
    border-radius: 30px;
    background-color: var(--colorOne);
    color: white;
    font-size: 25px;
    font-family: "Outfit", Arial, Helvetica, sans-serif;
    border: none;
    box-shadow: 0 5px 0 #075858;
    cursor: pointer;
  }

  .wordBankButton:active {
    box-shadow: none;
    transform: translate(5px);
  }

  .wordBankButton:hover {
    background-color: #10afaf;
  }

  .closeWordBankButton {
    padding: 10px 20px 10px 20px;
    font-size: 15px;
    border-radius: 30px;
    background-color: var(--colorOne);
    color: white;
    font-family: "Outfit", Arial, Helvetica, sans-serif;
    border: none;
    box-shadow: 0 5px 0 #195757;
    cursor: pointer;
  }
  .closeWordBankButton:active {
    box-shadow: none;
    transform: translate(5px);
  }
  .closeWordBankButton:hover {
    background-color: #044949;
  }

  @media screen and (max-width: 1115px) {
    .wordBankButton {
      margin: auto;
    }
    .wordBankDiv {
      padding: 20px 0 20px 0;
    }
    h3 {
      padding: 0 20px 0 20px;
    }
  }

  @media screen and (max-width: 546px) {
    .wordBankButton {
      margin: auto;
    }
    .wordBankDiv {
      padding: 20px 0 20px 0;
    }
    h3 {
      font-size: 15px;
      text-align: center;
      padding-right: 20px;
    }
    h2 {
      display: none;
    }
  }
</style>
