document.getElementById('submit').addEventListener('click', function() {
  //Chat GPT met uitleg gekregen 

  // Array met correcte antwoorden
  const correctAnswers = ['true', 'false', 'false', 'true']; // Voeg hier de correcte antwoorden toe in dezelfde volgorde als de vragen
  
  // Elementen ophalen
  const answers = document.querySelectorAll('.answers input:checked');
  const resultContainer = document.getElementById('result');
  
  // Aantal correcte antwoorden
  let score = 0;
  
  // Controleren van de antwoorden
  for (let i = 0; i < answers.length; i++) {
      if (answers[i].value === correctAnswers[i]) {
          score++; //er komt er eentje bij als je juist hebt dus +1
          answers[i].parentElement.classList.add('correct'); // Add 'correct' class to parent label
        } else {
            answers[i].parentElement.classList.add('incorrect'); // Add 'incorrect' class to parent label
        }
  }
  
  // Resultaten weergeven
  resultContainer.textContent = `Je hebt ${score} van de ${correctAnswers.length}`;
});


//-------

// timer bron: https://www.w3schools.com/js/js_timing.asp

let startTimeout;
document.getElementById("startButton").addEventListener("click", function() {

startTimeout = setTimeout(deTijd, 120000);

setTimeout(myTimeout1, 30000);
setTimeout(myTimeout2, 60000);
setTimeout(myTimeout3, 90000);
setTimeout(myTimeout4, 110000);

});


function myTimeout1() {
  document.getElementById("timer").innerHTML = "⏱️  30 sec😃";
}
function myTimeout2() {
  document.getElementById("timer").innerHTML = "⏱️  1 min 🫣";
}
function myTimeout3() {
  document.getElementById("timer").innerHTML = "⏱️  1 min 30 sec👿";
}
function myTimeout4() {
  document.getElementById("timer").innerHTML = "⏱️  je hebt nog 10 seconden😱";
}


function deTijd() {
  alert('De tijd is om, goed geprobeerd <3');
}



//met hulp van ChatGpt
document.getElementById("laadButton").addEventListener("click", function() {
  clearTimeout(startTimeout);
});

//----------


let mijnAudio = new Audio('audio.wav') // bron muziek: https://www.youtube.com/watch?v=1jnQz5nL2c0&ab_channel=JasonBeauchamp

document.getElementById('startButton').addEventListener('click', function() {
  // Audio afspelen wanneer er op de knop wordt geklikt
  mijnAudio.play()
});

document.getElementById('submit').addEventListener('click', function() {
  // Audio stoppen wanneer er op de knop wordt geklikt
  mijnAudio.pause()
});


//met de hulp van ChatGpt
document.getElementById("laadButton").addEventListener("click", function() {
  location.reload();
});

//--------