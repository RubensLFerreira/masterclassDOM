// get all keys
const keys = document.querySelectorAll(".key");

// play notes
function playNode(event) {
  // keyCode
  let audioKeyCode = getKeyCode(event);

  // typed or pressed key
  const key = document.querySelector(`.key[data-key='${audioKeyCode}']`);

  // if key exists
  const cantFoundAnyKey = !key;
  if (cantFoundAnyKey) {
    return;
  }

  // get insert color
  addPlayingClass(key);

  // get play songs
  playAudio(audioKeyCode);
}


// function click or keydown
function getKeyCode(event) {
  let keyCode;

  const isKeyBoard = event.type === "keydown";
  if (isKeyBoard) {
    keyCode = event.keyCode;
    // console.log(keyCode);
  } else {
    keyCode = event.target.dataset.key;
    // console.log(keyCode);
  }
  return keyCode;
}

// function play songs
function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key='${audioKeyCode}']`);
  audio.currentTime = 0; // inciando em zero
  audio.play(); // tocando o audio
}

// function insert color
function addPlayingClass(key) {
  key.classList.add("playing");
}

// function remove class
function removePlayingClass(event) {
  event.target.classList.remove("playing");
  // study -> toggle();
}

// function main run
function registerEvents() {
  // click with mouse
  keys.forEach((key) => {
    key.addEventListener("click", playNode);
    key.addEventListener("transitionend", removePlayingClass);
  });

  // keyboard type
  window.addEventListener("keydown", playNode); // passo a referência da função
}

// get main run
window.addEventListener("load", registerEvents);
