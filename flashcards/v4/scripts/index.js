//One that displays a question and a corresponding image when the user hovers over the question.
//Do not let the the user see the answer before they hover on the question. 
//Print a message telling them that they need to hover over the question first.

//flashcards array
let myFlashcards = [
  {
    question: "What is 1+1",
    answer: 2,
    image: 'images/onePlusOne.jpg'
    },
  {
    question: "What is 2+2",
    answer: 4,
    image: 'images/twoplustwo.jpg'
    },
  {
      question: "What is 3+3",
      answer: 6,
      image: 'images/threePlusThree.jpg'
  }
];
//declare variables
var i= 0; 
var q = 0; //counter to make sure loop in answer click works
console.log ('D i is now '+ i);
console.log('D q is '+ q);

//get question

function getQuestion() {
  console.log('Q i is '+ i)
  document.getElementById("displayHere").innerHTML = myFlashcards[i].question;
  q += 1;
  console.log('Q q is '+ q);
}

//get images
function getImages() {
  //add picture
  var img = document.getElementById("displayImages").setAttribute("src", myFlashcards[i].image);

  console.log('getImages I is '+ i );
  console.log(myFlashcards[i].image);
}
          
//get answer
function getAnswer() {
 console.log ('A i is now '+ i);
 console.log('A q is '+ q);
  if (q > i){
  document.getElementById("displayAnswerHere").innerHTML = myFlashcards[i].answer;}
  else{
  document.getElementById("displayAnswerHere").innerHTML = "Please look at the question first";
  }
}

          
//loop to get next question
function getNext() {
  // document.getElementById("displayHere").innerHTML = "  ";
  //iterate to next card
  if (i===myFlashcards.length){
    i = 0; 
    q = 0;
  }
  else{
    i += 1;
  }
 console.log ('end i is now '+ i);
 console.log('end q is '+ q);
}
