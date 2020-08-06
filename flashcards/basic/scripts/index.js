//flashcards array
let myFlashcards = [
  {
    question: "What is 1+1",
    answer: 2
    },
  {
    question: "What is 2+2",
    answer: 4
    },
  {
      question: "What is 3+3",
      answer: 6
  }
];
//declare variables
var i= 0; 
//get question
function getQuestion() {
  document.getElementById("displayHere").innerHTML = myFlashcards[i].question;
}
//get answer
function getAnswer() {
  document.getElementById("displayHere").innerHTML = myFlashcards[i].answer;
}
//loop to get next question
function nextButton() {
  //wipe display
  document.getElementById("displayHere").innerHTML = "Click question for next question";
  //iterate to next card
  do {
    i ++;
  }
  while (i < myFlashcards.length);
}
