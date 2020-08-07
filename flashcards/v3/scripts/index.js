//One that changes when the user hovers over the question and answer. 
//Do not let the the user see the answer before they hover on the question. 
//Print a message telling them that they need to hover over the question first.

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
  document.getElementById("displayAnswerHere").innerHTML = myFlashcards[i].answer;
}

//loop to get next question
function getNext() {
  //wipe display
  document.getElementById("displayHere").innerHTML = "  ";
  //iterate to next card
  if (i===myFlashcards.length){
    i = 0; 
  }
  else{
    i += 1;
  }
 console.log (i);
}
