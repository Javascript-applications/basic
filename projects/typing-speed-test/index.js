const messages = [
  "My name is deepak kurmi.",
  "My collage name is sirte bhopal mp",
  "My age is 24year's",
];

let startTime, endTime;
const btn = document.getElementById("btn");
const userTyped = document.getElementById("typespeed");
const msg = document.getElementById("writeMessage");

const wordCounter = (totalStr) => {
  const res = totalStr.split(" ").length;
  return res;
};

const compareWords = (str1, str2) => {
  const messageWords = str1.split(" ");
  const usertWords = str2.split(" ");
  let count = 0;

  messageWords.forEach((ele, index) => {
    if (ele === usertWords[index]) {
      count++;
    }
  });

  const errorWords = messageWords.length - count;
  return ` ${count} correct out of ${messageWords.length} words and the total number of error are ${errorWords}.`;
};

const startPlay = () => {
  const rendom = Math.floor(Math.random() * messages.length);
  msg.innerText = messages[rendom];
  let data = new Date();
  startTime = data.getTime();
  btn.innerText = "Done";
};

const endPlay = () => {
  let data = new Date();
  endTime = data.getTime();

  const totalTime = (endTime - startTime) / 1000;
  const totalStr = userTyped.value;
  let wordsCount = wordCounter(totalStr);
  let speed = Math.round((wordsCount / totalTime) * 60);
  let finalMsg = `You typed total at ${speed} words per minutes`;
  finalMsg += compareWords(msg.innerText, totalStr);
  msg.innerText = finalMsg;
};

btn.addEventListener(
  "click",
  function () {
    if (this.innerText === "Start") {
      userTyped.disabled = false;
      startPlay();
    } else if (this.innerText === "Done") {
      userTyped.disabled = true;
      btn.innerText = "Start";
      endPlay();
    }
  },
  false
);
