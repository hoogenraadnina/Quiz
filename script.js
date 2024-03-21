// inspiratie voor quiz https://www.sitepoint.com/simple-javascript-quiz/
//quiz is nog work in progress :)
var myQuestions = [
  {
    question: "1. Wat is Javascript?",
    answers: {
      a: 'Een programmeertaal die wordt gebruikt voor het ontwikkelen van dynamische en interactieve webpaginas',
      b: 'Een opmaaktaal voor het structureren van webinhoud',
      c: 'Een besturingssysteem voor servers'
    },
    correctAnswer: 'a'
  },
  {
    question: "2. Waar moet je je script.js plaatsen in je HTML?",
    answers: {
      a: 'in de body en head',
      b: 'in de head ',
      c: 'in de body'
    },
    correctAnswer: 'c'
  },
  {
    question: "3. Hoe schrijf je Hallo Wereld in een aleert box?",
    answers: {
      a: 'message("Hallo Wereld");',
      b: 'alertBox("Hallo Wereld")',
      c: 'alert("Hallo Wereld")'
    },
    correctAnswer: 'c'
  },
  {
    question: "4. Wat is de QuerySelector functie?",
    answers: {
      a: 'zoekt element in het document op basis van de laatse item in je HTML ',
      b: 'zoekt element in het document op basis van de gekozen kleur',
      c: 'zoekt elementen in het document op basis van een tag, id of class'
    },
    correctAnswer: 'c'
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    // voor alle vragen
    for(var i=0; i<questions.length; i++){
      
      // reset
      answers = [];

      // voor alle antwoorden
      for(letter in questions[i].answers){

        
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>' // radio button
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      ); // vraag en antwoord 
    }

    quizContainer.innerHTML = output.join('');
  }

  function showResults(questions, quizContainer, resultsContainer){
    
    // alle antwoorden
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    var userAnswer = '';
    var numCorrect = 0; // onthouden wat de antwoorden van de gebruiker zijn 
    
    // voor alle vragen
    for(var i=0; i<questions.length; i++){

      // goeie antwoord vinden
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // als antwoord juist is
      if(userAnswer===questions[i].correctAnswer){
        // bij tellen als juist 
        numCorrect++;
        
        answerContainers[i].style.color = 'green';
      }
      else{
        answerContainers[i].style.color = 'red';
      }
    }

    // hoeveel correct en incorrect
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  showQuestions(questions, quizContainer);
  
  // laat resultaat zien
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}

// timer bron: https://www.w3schools.com/js/js_timing.asp

start = setTimeout(deTijd, 240000)

setTimeout(myTimeout1, 30000)
setTimeout(myTimeout2, 120000)
setTimeout(myTimeout3, 350000)

function myTimeout1() {
  document.getElementById("timer").innerHTML = "30 seconden😃";
}
function myTimeout2() {
  document.getElementById("timer").innerHTML = "2 minuten🫣";
}
function myTimeout3() {
  document.getElementById("timer").innerHTML = "3 minuten 30 seconden👿";
}

function deTijd() {
  alert('De tijd is om, goed geprobeerd <3');
}

let mijnAudio = new Audio('audio.wav') // bron: https://www.youtube.com/watch?v=1jnQz5nL2c0&ab_channel=JasonBeauchamp

var start = document.getElementById('start');
start.addEventListener('click', function() {
  // Audio afspelen wanneer er op de knop wordt geklikt
  mijnAudio.play()
});

var submit = document.getElementById('submit');
submit.addEventListener('click', function() {
  // Audio stoppen wanneer er op de knop wordt geklikt
  mijnAudio.pause()
});
