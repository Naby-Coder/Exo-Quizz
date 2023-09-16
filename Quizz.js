//On crée un tableau dobjet qui contiendra les questions du quiz et les réponses associées à chaque question
let questions = [{
    question: 'Que vaut 4+9',

    answers:[
        {text: '49', correct: 'false', index: 0},
        {text: '40', correct: 'false', index: 1},
        {text: '19', correct: 'false', index: 2},
        {text: '13', correct: 'true', index: 3}
    ]
},
{
    question:'Que vaut 4x9',
    index: 1,
    answers:[
        {text: '49', correct: 'false', index: 0},
        {text: '36', correct: 'true', index: 1},
        {text: '19', correct: 'false', index: 2},
        {text: '31', correct: 'false', index: 3}
    ]
},
{
    question:'Que vaut 4-9',
    index: 2,
    answers:[
        {text: '-5', correct: 'true', index: 0},
        {text: '40', correct: 'false', index: 1},
        {text: '19', correct: 'false', index: 2},
        {text: '-3', correct: 'false', index: 3} 
    ] 
},
{
    question:'Que vaut 45+9',
    index: 3,
    answers:[
        {text: '54', correct: 'true', index: 0},
        {text: '40', correct: 'false', index: 1},
        {text: '19', correct: 'false', index: 2},
        {text: '51', correct: 'false', index: 3} 
    ]   
},
{
    question:'Que vaut 4+90',
    index: 4,
    answers:[
        {text: '49', correct: 'false', index: 0},
        {text: '40', correct: 'false', index: 1},
        {text: '19', correct: 'false', index: 2},
        {text: '94', correct: 'true', index: 3} 
    ]   
}

]
//Récupération des éléments du dom
let controls = document.querySelector('.controls');
let start = document.querySelector('#start-btn');
let next = document.querySelector('#next-btn');

let answerButtons = document.querySelector('#answer-buttons');
let btns = document.querySelectorAll('.btn');

let container = document.querySelector('.container');
let questionContainer = document.querySelector('#question-container');
let question = document.querySelector('#question');

let i = 0;
let k;
let k1;

//On donne une couleur de font à la balise body
let bodyStyle = document.body.style;
container.style.backgroundColor = '#123';

//ici on donne un style à nos différentes reponses
function color_int() {
    bodyStyle.backgroundColor = '#555';
    btns[0].style.backgroundColor = '#f00';
    btns[1].style.backgroundColor = '#ff0';
    btns[2].style.backgroundColor = '#0f0';
    btns[3].style.backgroundColor = '#00f';
}
//ici on affecte les différentes réponses à nos cases
function affectation_valeur() {
    btns[0].innerHTML = questions[i].answers[0].text;
    btns[1].innerHTML = questions[i].answers[1].text;
    btns[2].innerHTML = questions[i].answers[2].text;
    btns[3].innerHTML = questions[i].answers[3].text;
}
//Cette fonction nous permet de débuter la partie lorsqu'on appuis sur le bouton start
let init = function() {

    questionContainer.style.display = 'block';
    start.style.display = 'none';


    question.innerHTML = questions[0].question;

    affectation_valeur();
    color_int();
}
//Cette fonction donne une réaction en cas de réponses justes ou de réponses fausses
let Reponse = function(e) {
    for (let l=0; l<=3; l++) { if (questions[i].answers[l].correct == 'true') { x = l; } }
    for (k = 0; k<= 3; k++){
        if (questions[i].answers[k].correct == 'true' && questions[i].answers[k].text == e.target.textContent){
            bodyStyle.backgroundColor = '#0f0';
            btns[k].textContent = 'good';
        }
        if(questions[i].answers[k].correct == 'false' && questions[i].answers[k].text == e.target.textContent){
            bodyStyle.backgroundColor = 'red';
            btns[k].textContent = 'bad';
        }
        if(k != x) {
            btns[k].style.backgroundColor = 'red';
            btns[k].textContent = 'bad';
        }else{
            btns[k].style.backgroundColor = '#0f0';
            btns[k].textContent = 'good';
        }
    }
    k1 = e.target.textContent
}
//Cette fonction permet de vérifier si une reponse a été choisit puis de passer à la question suivante
let suivant = function() {
    i++;
    if (!k1) {alert('Veillez choisir une reponse avant de continuer');}
    question.innerHTML = questions[i].question;

    affectation_valeur();
    color_int();
    if (i > 4) {i = 4}
    k1 = null;
}
//Evenement déclancher lorsqu'on click sur le bouton start(la parti commence)
start.addEventListener('click', init, false)
//Evenement déclancher lorsqu'on click sur le bouton suivant(o  passe à la question suivante)
next.addEventListener('click', suivant, false)
//Evenement déclancher lorsqu'on choisi une reponse
btns[0].addEventListener('click', Reponse, false)
btns[1].addEventListener('click', Reponse, false)
btns[2].addEventListener('click', Reponse, false)
btns[3].addEventListener('click', Reponse, false)