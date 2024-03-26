let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEle = document.getElementById("wordsContainer");
let userInputEle = document.getElementById("userInput");
let errorMsgEle = document.getElementById("errorMsg");
let addBtnEle = document.getElementById("addBtn");

let errorMsg = "Please enter a word";

function createAddWordToWordCloud(word) {
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let wordEle = document.createElement("span");
    wordEle.textContent = word;
    wordEle.style.fontSize = randomFontSize;
    wordEle.classList.add("m-3");
    wordsContainerEle.appendChild(wordEle);

}
for (let word of wordCloud) {
    createAddWordToWordCloud(word);
}

function onAddWordToWordCloud() {
    let userEnteredWord = userInputEle.value;
    if (userEnteredWord !== "") {
        userInputEle.value = "";
        errorMsgEle.textContent = "";
        createAddWordToWordCloud(userEnteredWord);
    } else {
        errorMsgEle.textContent = errorMsg;
    }
}