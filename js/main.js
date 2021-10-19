const pepTalkText = document.querySelector("#pep-talk-wrap");

function randNum(num) {
    return Math.floor(Math.random() * num);
}

function pepTalk() {
    pepTalkText.innerText = 
    `${openers[randNum(openers.length)]} ${second[randNum(second.length)]} ${third[randNum(third.length)]} ${closers[randNum(closers.length)]}`;
}