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
function getQuestion(i) {
  document.getElementById("displayHere").innerHTML = myFlashcards[i].question;
}
//get answer
function getAnswer(i) {
  document.getElementById("displayHere").innerHTML = myFlashcards[i].answer;
}
//loop to get next question
function getNext(i) {
  //wipe display

  //iterate to next card
  do{
    i = i++;
    document.getElementById("displayHere").innerHTML = "  ";
  }
  while (i < myFlashcards.length);
}
