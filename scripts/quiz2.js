const quiz2 = [{
    question:"Which country is credited with developing kickboxing as a sport?",options:["Thailand","Japan","China","United States"],answer:"Japan"
},{
    question:"What is the name of the traditional kickboxing uniform?",options:["Kimono","Hakama","Dobok","Muay Thai Shorts"],answer:"Muay Thai Shorts"
},{
    question:"Which kickboxing technique involves striking with the knee?",options:["Jab","Cross","Roundhouse kick","Knee strike"],answer:"Knee strike"
},{
    question:"What is the name of the organization that governs professional kickboxing worldwide?",options:["UFC","WKF","IBF","WBC"],answer:"WKF"
},{
    question:"What is the maximum number of rounds in a professional kickboxing match?",options:["3","5","7","9"],answer:"5"
},{
    question:"Which kickboxing technique involves striking with the shin?",options:["Front kick","Roundhouse kick","Side kick","Back kick"],answer:"Roundhouse kick"
},{
    question:"What is the name of the famous retired Dutch kickboxer known for his spinning back kicks?",options:["Ernesto Hoost","Badr Hari","Rico Verhoeven","Peter Aerts"],answer:"Ernesto Hoost"
},{
    question:"What is the name of the most prestigious kickboxing tournament in the world",options:["Glory","K-1","Enfusion","Bellator Kickboxing"],answer:"K-1"
},{
    question:"Which kickboxing technique involves striking with the foot's heel?",options:["Hook kick","Axe kick","Crescent kick","Side kick"],answer:"Axe kick"
},{
    question:"Who is the currect reigning WBC Muay Thai Super Bantamweight World Champion?", options:["Tenshin Nasukawa","Yodsanklai Fairtex","Saenchai","Ryan Sheehan"], answer:"Ryan Sheehan"
},{    
    question: "What is the name of the kickboxing technique that involves a jump before a kick?",    options: ["Superman punch", "Spinning back kick", "Flying knee", "Jumping roundhouse kick"], answer: "Jumping roundhouse kick"
},{
    question: "What is the name of the famous retired American kickboxer known for his spinning back fists?", options: ["Bill Wallace", "Benny Urquidez", "Don Wilson", "Raymond Daniels"], answer: "Bill Wallace"
},{
    question: "Which kickboxing technique involves striking with the ball of the foot?", options: ["Side kick", "Roundhouse kick", "Front kick", "Back kick"], answer: "Front kick"
},{
    question: "What is the name of the traditional dance performed before a Muay Thai fight?", options: ["Kung Fu", "Karate", "Capoeira", "Wai Khru Ram Muay"], answer: "Wai Khru Ram Muay"
},{
    question: "What is the name of the famous retired British kickboxer known for his low kicks?", options: ["Andy Hug", "Giorgio Petrosyan", "Ramon Dekkers", "Liam Harrison"], answer: "Liam Harrison"
},{
    question: "Which kickboxing technique involves striking with the elbow?", options: ["Superman punch", "Uppercut", "Spinning back fist", "Elbow strike"], answer: "Elbow strike"
},{
    question: "What is the name of the famous retired French kickboxer known for his spinning kicks?", options: ["Semmy Schilt", "Jerome Le Banner", "Remy Bonjasky", "Tyrone Spong"], answer: "Jerome Le Banner"
},{
    question: "Which kickboxing organization is known for using a ring rather than a cage?", options: ["Bellator Kickboxing", "Enfusion", "GLORY", "ONE Championship"], answer: "GLORY"
},{
    question: "What is the name of the kickboxing technique that involves a strike with the back of the hand?", options: ["Hammerfist", "Backfist", "Palm strike", "Jab"], answer: "Backfist"
},{
    question: "What is the name of the famous retired Dutch kickboxer known for his high kicks and flying knees?", options: ["Alistair Overeem", "Gokhan Saki", "Melvin Manhoef", "Andy Souwer"], answer: "Andy Souwer"
},{    
    question: "What is the name of the kickboxing technique that involves a simultaneous punch and kick?",    options: ["Hook kick", "Spinning back kick", "Axe kick", "Cross punch"], answer: "Axe kick"
},{
    question: "What is the name of the famous retired American kickboxer known for his high kicks?", options: ["Benny Urquidez", "Ernesto Hoost", "Peter Aerts", "Maurice Smith"], answer: "Benny Urquidez"
},{
    question: "Which kickboxing technique involves striking with the heel of the foot?", options: ["Side kick", "Roundhouse kick", "Back kick", "Front kick"], answer: "Back kick"
},{
    question: "What is the name of the famous retired Thai kickboxer known for his lethal elbows?", options: ["Samart Payakaroon", "Saenchai", "Buakaw Banchamek", "Dieselnoi Chor Thanasukarn"], answer: "Dieselnoi Chor Thanasukarn"
},{
    question: "What is the name of the famous retired Brazilian kickboxer known for his capoeira-inspired kicks?", options: ["Cosmo Alexandre", "Alex Pereira", "Anderson Silva", "Glaube Feitosa"], answer: "Glaube Feitosa"
},{
    question: "Which kickboxing technique involves striking with the knee?", options: ["Jumping roundhouse kick", "Superman punch", "Knee strike", "Spinning back fist"], answer: "Knee strike"
},{
    question: "What is the name of the famous retired Dutch kickboxer known for his knees and elbows?", options: ["Rob Kaman", "Badr Hari", "Hesdy Gerges", "Siyar Bahadurzada"], answer: "Rob Kaman"
},{
    question: "Which kickboxing organization is known for using MMA gloves instead of boxing gloves?", options: ["Bellator Kickboxing", "GLORY", "K-1", "Superkombat"], answer: "K-1"
},{
    question: "What is the name of the kickboxing technique that involves a downward kick with the heel?", options: ["Axe kick", "Roundhouse kick", "Back kick", "Spinning hook kick"], answer: "Axe kick"
},{
    question: "What is the name of the famous retired Dutch-Surinamese kickboxer known for his kicks and flying knees?", options: ["Rico Verhoeven", "Peter Aerts", "Remy Bonjasky", "Gokhan Saki"], answer: "Remy Bonjasky"
}];


var kickboxingBigContainer = document.getElementById("kickboxing-quiz-container");
var kickboxingBiggerContainer = document.getElementById("kickboxing-gigachad-container");
var kickboxingResultContainer = document.getElementById("kickboxing-result-container");
var getResultKickboxingButton = document.getElementById("get-result-kickboxing-button");

var kickboxingRefreshPage = document.getElementById("kickboxing-refresh-page");
kickboxingRefreshPage.addEventListener("click",function(){
    location.reload();
});

if(kickboxingBigContainer.textContent.trim() === ""){

    const p = document.createElement("p");
    p.textContent = "Are you ready to start the quiz?";
    p.setAttribute("class","empty-container-p");


    const a = document.createElement("a");
    a.textContent = "I am ready!";
    a.setAttribute("href", "#");
    a.setAttribute("id","kickboxing-quiz-button");
    a.setAttribute("onclick","createKickboxingQuiz()");
    a.setAttribute("class","start-button-page");

    kickboxingBigContainer.appendChild(p);
    kickboxingBigContainer.appendChild(a);

}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createKickboxingQuiz(){

    const quizQuestions = shuffle(quiz2).slice(0, 10);


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

  getResultKickboxingButton.style.display = "block";
  kickboxingBigContainer.innerHTML = quizHTML;
}

getResultKickboxingButton.addEventListener("click", function() {
    // Calculate the user's score
    let score = 0;
    const quizQuestionsOne = kickboxingBigContainer.querySelectorAll("div");
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

    const kickboxingGoodResultImages = ["kickboxing-good-result1.jpg","kickboxing-good-result2.jpg","kickboxing-good-result3.jpg","kickboxing-good-result4.jpg","kickboxing-good-result5.webp"];
    const kickboxingBadResultImages = ["kickboxing-bad-result1.jpg","kickboxing-bad-result2.jpg","kickboxing-bad-result3.jpg","kickboxing-bad-result4.webp","kickboxing-bad-result5.jpg"];
    
    function generateRandomPicture(array){
        var randomPicture = Math.floor(Math.random() * array.length);
        return array[randomPicture];
    }

    var randomGoodResultImage = generateRandomPicture(kickboxingGoodResultImages);
    var randomBadResultImage = generateRandomPicture(kickboxingBadResultImages);

    // Display the user's score
    var kickboxingResultSmallContainer = document.getElementById("kickboxing-result-small-container");
    kickboxingResultContainer.style.display = "block";
    kickboxingBiggerContainer.style.display = "none";

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


    kickboxingResultSmallContainer.innerHTML = resultPageHTML;
  });