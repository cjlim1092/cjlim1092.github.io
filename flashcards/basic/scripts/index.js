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
      answer: 4
  }
];
fuction getQuestion(i){
      for (let i =0; i < myFlashcards.length; i++) {
      console.log(myFlashcards[i].question + ' ' + myFlashcards[i].answer);
      document.getElementById('questionbutton').onclick = getQuestion() {
        alert(myFlashcards[i].question);}
}
function getAnswer(i){
      for (let i=0; i ,myFlashcards.length; i++){
     console.log(myFlashcards[i].question + ' ' + myFlashcards[i].answer);
      document.getElementById('answerbutton').onclick = getAnswer() {
        alert(myFlashcards[i].answer);}
      }
