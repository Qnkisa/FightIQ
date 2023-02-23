const quiz1 = [{
    question:"Who is considered the greatest boxer of all time?",options:["Mike Tyson", "Evander Holyfield","Floyd Mayweather","George Foreman"],answer:"Mike Tyson"
},{
    question:"Who held the world heavyweight championship for the longest time?",options:["Muhammad Ali","Joe Frazier","Vladimir Klitschko","Vitali Klitschko"],answer:"Vladimir Klitschko"
},{
    question:"Who is the only boxer who won titles from eight different weight classes?",options:["Floyd Mayweather","Canelo Alvarez","Dimitry Bivol","Manny Pacquiao"],answer:"Manny Pacquiao"
},{
   question:"Which weight class is considered the heaviest?",options:["bantamweight","welterweight","lightweight","featherweight"],answer:"welterweight" 
},{
    question:"In which country did the post of boxing originate?",options:["Iraq","England","Russia","Egypt"],answer:"Iraq"
},{
    question:"Which technique is not used to avoid punches?",options:["ducking","bobbing","slipping","jumping"],answer:"jumping"
},{
    question:"Who was the first boxer to defeat Muhammad Ali in a professional fight?",options:["George Foreman","Joe Frazier","Larry Holmes","Sonny Liston"],answer:"Joe Frazier"
},{
    question:"What is the name of the famous boxing film starring Sylvester Stallone?",options:["Niki Balboa","Tank","The Bronze Bomber","Rocky Balboa"],answer:"Rocky Balboa"
},{
    question:"Who is the current WBC heavyweight champion of the world?",options:["Tyson Fury","Oleksandr Usyk","Anthony Joshua","Deontay Wilder"],answer:"Tyson Fury"
},{
    question:"Who is the only boxer to retire undefeated after winning the heavyweight championship of the world?",options:["Mike Tyson","Joe Louis","Sugar Ray Robinson","Rocky Marciano"],answer:"Rocky Marciano"
},{
    question:"Who is the current WBC middleweight champion of the world",options:["Carlos Adames","Liam Smith","Gennadiy Golovkin","Chris Eubank Jr"],answer:"Gennadiy Golovkin"
},{
    question:"What is the name of the famous boxing trainer who trained Mike Tyson?",options:["Cus D'Amato","Abel Sanchez","John David Jackson","Virgil Hunter"],answer:"Cus D'Amato"
},{
    question:"Which boxer is known for his famous 'I am the greatest' quote?",options:["Mike Tyson","Tyson Fury","Muhammad Ali","Floyd Mayweather"],answer:"Muhammad Ali"
},{
    question:"Which boxer is know for this famous quote 'My defense is impregnable. And I'm just ferocious. I want your heart. I want to eat his children.'",options:["George Foreman","Rocky Marciano","Evander Holyfield","Mike Tyson"],answer:"Mike Tyson"
},{
    question:"Who was the first boxer to win Olympic gold and become a world champion in professional boxing?",options:["Sugar Ray Robinson","Sugar Ray Leonard","Anthony Joshua","Mitch Green"],answer:"Sugar Ray Leonard"
},{
    question:"Which boxer is known for his famous 'It is not the size of the dog in the fight, it's the size of the fight in the dog' quote?",options:["Vladimir Klitschko","Kubrat Pulev","Archie Moore","Dorian Yates"],answer:"Archie Moore"
},{
    question:"Which boxing brothers are from Bulgaria?",options:["Klitschko Brothers","Pulev Brothers","Tate Brothers","Paul Brothers"],answer:"Pulev Brothers"
},{
    question:"What is the name of the boxing gym owned by Freddie Roach?",options:["Wild Card Boxing Club","Kronk Gym","Gleason's Gym","The Mayweather Boxing Club"],answer:"Wild Card Boxing Club"
},{
    question:"What is the name of the famous boxing trilogy between Muhammad Ali and Joe Frazier?",options:["The battle of the Titans","The Thrilla in Manila","The Heavyweight Classic","The Rumble in the jungle"],answer:"The Thrilla in Manila"
},{
    question:"Who is the current WBA heavyweight champion of the world?",options:["Oleksandr Usyk","Tyson Fury","Anthony Joshua","Andy Ruiz"],answer:"Oleksandr Usyk"
},{
    question:"Which boxer's ear did Mike Tyson bite?",options:["Lennox Lewis","Evander Holyfield","Larry Holmes","Mitch Green"],answer:"Evander Holyfield"
},{
    question:"Who is the youngest boxer to win a world title in the heavyweight division?",options:["Anthony Joshua","Mike Tyson","Muhammad Ali","Evander Holyfield"],answer:"Mike Tyson"
},{
    question:"What is the maximum number of rounds in a championship boxing match?",options:["12","15","10","20"],answer:"12"
},{
    question:"Who was the first boxer to defeat Sugar Ray Leonard in a professional fight?",options:["Floyd Mayweather Sr.","Hector Camacho","Terry Norris","Roberto Duran"],answer:"Roberto Duran"
},{
    question:"Who is the boxer who famously made a comeback to win the world title after having a heavy neck injury?",options:["Sugar Ray Leonard","Sugar Ray Robinson","Vinny Paz","Roberto Duran"],answer:"Vinny Paz"
},{
    question:"Who was the oldest heavyweight champion of the world?",options:["Mike Tyson","Vladimir Klitschko","Vitali Klitschko","George Foreman"],answer:"George Foreman"
},{
    question:"What is the name of the famous boxing trainer who trained Evander Holyfield during his prime years?",options:["Cus D'Amato","Don Turner","Guardiola","Carlo Anceloti"],answer:"Don Turner"
},{
    question:"Who is the boxer known as 'The Gypsy King'?",options:["Traycho The Boxer","Tyson Fury","Mike Tyson","George Foreman"],answer:"Tyson Fury"
},{
    question:"Who is the current pound-for-pound boxing champion?",options:["Canelo Alvarez","Genady Golovkin","Naoya Inoue","Tyson Fury"],answer:"Naoya Inoue"
},{
    question:"Who is the only boxer to win the Olympic gold medal and the world heavyweight title in the same year?",options:["Sugar Ray Leonard","Anthony Joshua","Mitch Green","Leon Spinks"],answer:"Leon Spinks"
}];



var boxingBigContainer = document.getElementById("boxing-quiz-container");
var boxingBiggerContainer = document.getElementById("quizes-gigachad-container");
var boxingResultContainer = document.getElementById("boxing-result-container");
var getResultBoxingButton = document.getElementById("get-result-boxing-button");

var boxingRefreshPage = document.getElementById("boxing-refresh-page");
boxingRefreshPage.addEventListener("click",function(){
    location.reload();
});


if(boxingBigContainer.textContent.trim() === ""){

    const p = document.createElement("p");
    p.textContent = "Are you ready to start the quiz?";
    p.setAttribute("class","empty-container-p");


    const a = document.createElement("a");
    a.textContent = "I am ready!";
    a.setAttribute("href", "#");
    a.setAttribute("id","boxing-quiz-button");
    a.setAttribute("onclick","createBoxingQuiz()");
    a.setAttribute("class","start-button-page");

    boxingBigContainer.appendChild(p);
    boxingBigContainer.appendChild(a);

}



function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function createBoxingQuiz(){

    const quizQuestions = shuffle(quiz1).slice(0, 10);


    let quizHTML = "";
    quizQuestions.forEach(function(q, i) {
    quizHTML += "<div class='quiz-container'><p>" + (i + 1) + ". " + q.question + "</p>";   
    quizHTML += '<input type="hidden" value="'+ q.answer + '" name="q' + i + 'correct">';
    q.options.forEach(function(opt) {
        quizHTML += '<label class="radio-button-container">' + opt + '';
        quizHTML += '<input type="radio" name="q' + i + '" value="' + opt + '">';
        quizHTML += '<span class="checkmark"></span>';
        quizHTML += "</label>";
    });
    quizHTML += "</div>";
  });

  getResultBoxingButton.style.display = "block";
  boxingBigContainer.innerHTML = quizHTML;
}

getResultBoxingButton.addEventListener("click", function() {
    // Calculate the user's score
    let score = 0;
    const quizQuestionsOne = boxingBigContainer.querySelectorAll("div");
    let allQuestionsAnswered = true;

    for(let i =0;i<quizQuestionsOne.length;i++){
        const radios = quizQuestionsOne[i].querySelectorAll("input[type=radio]");
        let anyRadioChecked = false;

        for(let j=0; j<radios.length;j++){
            if(radios[j].checked){
                anyRadioChecked = true;
                break;
            }
        }

        if(!anyRadioChecked){
            allQuestionsAnswered = false;
            break;
        }
    }

    if(!allQuestionsAnswered){
        alert("Please answer all questions before submitting!");
    }


    quizQuestionsOne.forEach(function(q, i) {
      const selected = q.querySelector("input:checked");

      const correctAnswer = q.querySelector("input[type=hidden][name=q"+ i + "correct]");
      const correctAnswerValue = correctAnswer.value;
      console.log(correctAnswerValue);
      if (selected.value == correctAnswer.value) {
        score++;
      }
    });

    const boxingGoodResultImages = ["boxing-good-result1.jpg","boxing-good-result2.webp","boxing-good-result3.jpg","boxing-good-result4.webp","boxing-good-result5.jpg"];
    const boxingBadResultImages = ["boxing-bad-result1.jpg","boxing-bad-result2.webp","boxing-bad-result3.jpg","boxing-bad-result4.webp","boxing-bad-result5.jpg"];
    
    function generateRandomPicture(array){
        var randomPicture = Math.floor(Math.random() * array.length);
        return array[randomPicture];
    }

    var randomGoodResultImage = generateRandomPicture(boxingGoodResultImages);
    var randomBadResultImage = generateRandomPicture(boxingBadResultImages);

    // Display the user's score
    var boxingResultPoints = document.getElementById("boxing-result-points");
    var boxingResultSmallContainer = document.getElementById("boxing-result-small-container");
    boxingResultContainer.style.display = "block";
    boxingBiggerContainer.style.display = "none";

    let resultPageHTML = "";
    if(score < 5){
        resultPageHTML += '<h1 id="submit-page-heading">Better luck next time!</h1>';
        resultPageHTML += '<h2><span id="boxing-result-points">You got ' + score + ' out of 10 question correct!</span></h2>';
        resultPageHTML += '<img src="images/' + randomBadResultImage + '" alt="">';
    }else if(score > 5){
        resultPageHTML += '<h1 id="submit-page-heading">Congratulations!</h1>';
        resultPageHTML += '<h2><span id="boxing-result-points">You got ' + score + ' out of 10 question correct!</span></h2>';
        resultPageHTML += '<img src="images/' + randomGoodResultImage + '" alt="">';
    }


    boxingResultSmallContainer.innerHTML = resultPageHTML;
  });





