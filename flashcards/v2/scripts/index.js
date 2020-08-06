//One that changes when the user clicks over the question and answer. 
//Do not let the the user see the answer before they click on the question. 
//Print a message telling them that they need to click on the question first. 
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
var q = 0; //counter to make sure loop in answer click works

//get question
function getQuestion() {
  document.getElementById("displayHere").innerHTML = myFlashcards[i].question;
  q += 1;
  console.log (q);
}
//get answer
function getAnswer() {
  if (q > i){
  document.getElementById("displayHere").innerHTML = myFlashcards[i].answer;}
  else{
  document.getElementById("displayHere").innerHTML = "Please click on the question first";
  }
}

//loop to get next question
function getNext() {
  //wipe display
  document.getElementById("displayHere").innerHTML = "  ";
  //iterate to next card
  if (i===myFlashcards.length){
    i = 0; 
    q = 0;
  }
  else{
    i += 1;
  }
 console.log (i);
}
