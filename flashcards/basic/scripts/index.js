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
//get question
function getQuestion() {
  document.getElementById("displayHere").innerHTML = myFlashcards[0].question;
}
//get answer
function getAnswer() {
  document.getElementById("displayHere").innerHTML = myFlashcards[0].answer;
}
//loop to get next question
function nextButton() {
  document.getElementById("displayHere").innerHTML = "ITERATEMEOK";
}
