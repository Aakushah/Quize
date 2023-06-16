const data = [
  {
    id: 1,
    question: "What is the capital of France?",
    answers: [
      { answer: "London", isCorrect: false },
      { answer: "Paris", isCorrect: true },
      { answer: "Berlin", isCorrect: false },
      { answer: "Madrid", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Who painted the Mona Lisa?",
    answers: [
      { answer: "Leonardo da Vinci", isCorrect: true },
      { answer: "Pablo Picasso", isCorrect: false },
      { answer: "Vincent van Gogh", isCorrect: false },
      { answer: "Michelangelo", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    answers: [
      { answer: "Mars", isCorrect: true },
      { answer: "Jupiter", isCorrect: false },
      { answer: "Venus", isCorrect: false },
      { answer: "Mercury", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "What is the chemical symbol for water?",
    answers: [
      { answer: "H2O", isCorrect: true },
      { answer: "CO2", isCorrect: false },
      { answer: "NaCl", isCorrect: false },
      { answer: "O2", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "Who wrote the novel 'To Kill a Mockingbird'?",
    answers: [
      { answer: "Harper Lee", isCorrect: true },
      { answer: "F. Scott Fitzgerald", isCorrect: false },
      { answer: "Mark Twain", isCorrect: false },
      { answer: "Jane Austen", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "Which country is home to the kangaroo?",
    answers: [
      { answer: "Australia", isCorrect: true },
      { answer: "Canada", isCorrect: false },
      { answer: "Brazil", isCorrect: false },
      { answer: "India", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "What is the largest ocean on Earth?",
    answers: [
      { answer: "Pacific Ocean", isCorrect: true },
      { answer: "Atlantic Ocean", isCorrect: false },
      { answer: "Indian Ocean", isCorrect: false },
      { answer: "Arctic Ocean", isCorrect: false },
    ],
  },
  {
    id: 8,
    question: "Which instrument has black and white keys?",
    answers: [
      { answer: "Piano", isCorrect: true },
      { answer: "Violin", isCorrect: false },
      { answer: "Trumpet", isCorrect: false },
      { answer: "Guitar", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "What is the national animal of India?",
    answers: [
      { answer: "Tiger", isCorrect: true },
      { answer: "Lion", isCorrect: false },
      { answer: "Elephant", isCorrect: false },
      { answer: "Peacock", isCorrect: false },
    ],
  },
  {
    id: 10,
    question: "Who invented the telephone?",
    answers: [
      { answer: "Alexander Graham Bell", isCorrect: true },
      { answer: "Thomas Edison", isCorrect: false },
      { answer: "Nikola Tesla", isCorrect: false },
      { answer: "Albert Einstein", isCorrect: false },
    ],
  },
  {
      id: 11,
      question: "Who is the CEO of Tesla?",
      answers: [
        { answer: "Elon Musk", isCorrect: true },
        { answer: "Jeff Bezos", isCorrect: false },
        { answer: "Mark Zuckerberg", isCorrect: false },
        { answer: "Satya Nadella", isCorrect: false },
      ],
    },
    {
      id: 12,
      question: "What does HTML stand for?",
      answers: [
        { answer: "Hyperlink and Text Markup Language", isCorrect: false },
        { answer: "Hypertext Markup Language", isCorrect: true },
        { answer: "Home Tool Markup Language", isCorrect: false },
        { answer: "Hypermedia Text Markup Language", isCorrect: false },
      ],
    },
    {
      id: 13,
      question: "What does CPU stand for?",
      answers: [
        { answer: "Central Processing Unit", isCorrect: true },
        { answer: "Computer Processing Unit", isCorrect: false },
        { answer: "Control Processing Unit", isCorrect: false },
        { answer: "Central Power Unit", isCorrect: false },
      ],
    },
    {
      id: 14,
      question: "What programming language is commonly used for web development?",
      answers: [
        { answer: "Python", isCorrect: false },
        { answer: "JavaScript", isCorrect: true },
        { answer: "Java", isCorrect: false },
        { answer: "C++", isCorrect: false },
      ],
    },
    {
      id: 15,
      question: "What is the largest social media platform?",
      answers: [
        { answer: "Facebook", isCorrect: true },
        { answer: "Twitter", isCorrect: false },
        { answer: "Instagram", isCorrect: false },
        { answer: "LinkedIn", isCorrect: false },
      ],
    },
    {
      id: 16,
      question: "Which company developed the Android operating system?",
      answers: [
        { answer: "Apple", isCorrect: false },
        { answer: "Microsoft", isCorrect: false },
        { answer: "Google", isCorrect: true },
        { answer: "Samsung", isCorrect: false },
      ],
    },
    {
      id: 17,
      question: "What does VPN stand for?",
      answers: [
        { answer: "Virtual Personal Network", isCorrect: false },
        { answer: "Virtual Private Network", isCorrect: true },
        { answer: "Very Protected Network", isCorrect: false },
        { answer: "Verified Private Network", isCorrect: false },
      ],
    },
    {
      id: 18,
      question: "What is the primary function of a firewall in network security?",
      answers: [
        { answer: "Prevents unauthorized access", isCorrect: true },
        { answer: "Encrypts data transmission", isCorrect: false },
        { answer: "Manages network protocols", isCorrect: false },
        { answer: "Performs data backup", isCorrect: false },
      ],
    },
    {
      id: 19,
      question: "What does SSD stand for in computer storage?",
      answers: [
        { answer: "Super Speed Drive", isCorrect: false },
        { answer: "Solid State Drive", isCorrect: true },
        { answer: "System Storage Device", isCorrect: false },
        { answer: "Secure Storage Disk", isCorrect: false },
      ],
    },
     
  
];


  const gameScreen=document.querySelector('.game');
  const resultScreen=document.querySelector('.result');
  const questionContainer=document.querySelector('.question');
  const answerContainer=document.querySelector('.answer');
  const playBtn=document.querySelector('.play');
  const sumitBtn=document.querySelector('.sumit');


  let qIndex=0;
  let correctCount=0;
  let wrongCount=0;
  let selectedResult;

  const playAgain= ()=>{
    qIndex=0;
    correctCount=0;
    wrongCount=0;
    showQuestion(qIndex);

  }

  playBtn.addEventListener('click',()=>{
    resultScreen.style.display="none";
    gameScreen.style.display="block";
    playAgain();
  })
  const showResult = ()=>{

    resultScreen.style.display="block";
    gameScreen.style.display="none";
    resultScreen.querySelector('.correct').textContent=`Correct Answer : ${correctCount}`;
    resultScreen.querySelector('.wrong').textContent=`Wrong Answer : ${wrongCount}`;
    resultScreen.querySelector('.score').textContent=`Score : ${ (correctCount-wrongCount) * 10 }`;

  }

  
  const showQuestion = (qNumber) =>{

    if(qIndex === data.length) return showResult();
  

    selectedResult=null;

    questionContainer.textContent = data[qNumber].question;
    answerContainer.innerHTML = data[qNumber].answers.map((item,index) =>
    
      `
      <div class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
        <label for=${index}>${item.answer}</label>
      </div>
      `
    ).join(" ");

    selectResult();
  }

  const selectResult = () => {
    
    answerContainer.querySelectorAll('input').forEach(el=>{

      el.addEventListener("click",(e)=>{
        selectedResult=e.target.value;
      });

    });

  }

  const sumitAnswer=()=>{
    sumitBtn.addEventListener("click",()=>{
      

      if(selectedResult !== null)
      {
        selectedResult === "true" ? correctCount++ : wrongCount++;
        qIndex++;
        showQuestion(qIndex);

      }
      else
      {
        alert("SELECT AN ANSWER");
      }
    })
    
  }

  showQuestion(qIndex);
  sumitAnswer();
  