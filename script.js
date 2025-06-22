const quizData = [
  {
    question: "산불이 북쪽에서 발생하고 바람은 남쪽으로 붑니다. 어디로 대피해야 할까요?",
    options: ["A. 높은 언덕", "B. 북쪽 숲", "C. 동쪽 콘크리트 도로"],
    answer: "C"
  },
  {
    question: "산불 연기를 들이마셨을 때 해야 할 일은?",
    options: ["A. 침착하게 물을 마신다", "B. 연기 속에서 빨리 달린다", "C. 손으로 코를 막고 땅에 가까이 엎드린다"],
    answer: "C"
  },
  {
    question: "차 안에 있을 때 산불이 접근하면?",
    options: ["A. 창문을 열고 외부 공기를 마신다", "B. 히터를 틀어 공기 순환을 시킨다", "C. 창문을 닫고 차 안에서 몸을 숙인다"],
    answer: "C"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = ""; // 이전 보기 초기화

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt[0]); // 첫 글자(A/B/C)를 넘김
    optionsDiv.appendChild(btn);
 });

  document.getElementById("result").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(choice) {
  const q = quizData[currentQuestion];
  const result = document.getElementById("result");

  if (choice === q.answer) {
    result.innerText = "✅ 정답!";
    result.style.color = "green";
    score++;
  } else {
    result.innerText = "❌ 오답!";
    result.style.color = "red";
  }

  // 보기 버튼 비활성화
  const buttons = document.querySelectorAll(".options button");
  buttons.forEach(btn => btn.disabled = true);

  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question").innerText = `퀴즈 완료! 당신의 점수는 ${score}/${quizData.length}입니다 🎉`;
  document.getElementById("options").innerHTML = "";
  document.getElementById("result").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
}

// 시작 시 첫 문제 불러오기
window.onload = loadQuestion;