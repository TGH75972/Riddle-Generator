const riddles = [
    {
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
        answer: "An echo"
    },
    {
        question: "You see a house with two doors. One door leads to certain death and the other door leads to freedom. There are two guards in front of the doors. One always tells the truth, and the other always lies. What question should you ask to find the door to freedom?",
        answer: "Ask either guard which door the other guard would say leads to freedom, and choose the opposite door."
    },
    {
        question: "What has keys but can't open locks?",
        answer: "A piano"
    },
    {
        question: "What gets wetter as it dries?",
        answer: "A towel"
    },
    {
        question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
        answer: "A map"
    },
    {
        question: "The more you take, the more you leave behind. What am I?",
        answer: "Footsteps"
    },
    {
        question: "What has a heart that doesn’t beat?",
        answer: "An artichoke"
    },
    {
        question: "What has to be broken before you can use it?",
        answer: "An egg"
    },
    {
        question: "What begins with T, ends with T, and has T in it?",
        answer: "A teapot"
    },
    {
        question: "What has one eye but cannot see?",
        answer: "A needle"
    }
];

let currentRiddleIndex = null;

function getRandomRiddle() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * riddles.length);
    } while (randomIndex === currentRiddleIndex);
    
    currentRiddleIndex = randomIndex;
    return riddles[randomIndex];
}

document.getElementById('get-riddle').addEventListener('click', () => {
    const riddle = getRandomRiddle();
    document.getElementById('riddle').textContent = riddle.question;
    document.getElementById('answer').style.display = 'none';
    document.getElementById('answer').textContent = riddle.answer;
});

document.getElementById('show-answer').addEventListener('click', () => {
    const answerElement = document.getElementById('answer');
    if (answerElement.style.display === 'none') {
        answerElement.style.display = 'block';
    } else {
        answerElement.style.display = 'none';
    }
});
