// 난이도별로 골라서 합치기
const quizData = [
  ...shuffleArray([...easy]).slice(0, 3),   // 하 3문제
  ...shuffleArray([...medium]).slice(0, 3), // 중 3문제
  ...shuffleArray([...hard]).slice(0, 1)    // 상 1문제
];

// 초급 문제 (기초 대피 지식)
const easy = [
  {
    level: "초급"
    question: "산불을 처음 목격했을 때 가장 먼저 해야 할 행동은?",
    options: ["A. 사진을 찍는다", "B. 직접 꺼본다", "C. 119에 신고한다", "D. 도망친다"],
    answer: "C"
  },
  {
    level: "초급"
    question: "산불 대피 시 피해야 할 장소는?",
    options: ["A. 도로 한가운데", "B. 바위틈", "C. 계곡이나 숲 속", "D. 콘크리트 구조물"],
    answer: "C"
  },
  {
    level: "초급"
    question: "산불 시 차량 대피 중 이동 불가 상황일 때, 올바른 행동은?",
    options: ["A. 창문 열고 구조 요청", "B. 차에서 나간다", "C. 차 안에서 창문 닫고 엎드린다", "D. 라디오를 튼다"],
    answer: "C"
  },
  {
    level: "초급"
    question: "산불 대피 시 바람 방향은?",
    options: ["A. 바람 따라 도망간다", "B. 바람을 등지고 이동", "C. 바람을 향해 올라간다", "D. 무시하고 움직인다"],
    answer: "B"
  },
  {
    level: "초급"
    question: "산불이 번지기 쉬운 계절은?",
    options: ["A. 여름 장마철", "B. 가을·봄 건조기", "C. 겨울철 폭설기", "D. 여름철 태풍기"],
    answer: "B"
  },
  {
    level: "초급"
    question: "연기가 몰려올 때 가장 안전한 행동은?",
    options: ["A. 높은 지대로 간다", "B. 수건으로 코·입을 가리고 낮게 이동", "C. 달리며 연기를 피한다", "D. 자리에 엎드린다"],
    answer: "B"
  },
  {
    level: "초급"
    question: "산불이 난 상황에서 도움을 요청하려면 어떤 번호로 전화해야 하나요?",
    options: ["A. 110", "B. 129", "C. 119", "D. 112"],
    answer: "C"
  },
  {
    level: "초급"
    question: "산불이 났을 때 불을 끄는 데 사용할 수 있는 가장 기본적인 것은?",
    options: ["A. 나뭇잎", "B. 흙이나 물", "C. 종이", "D. 바람"],
    answer: "B"
  },
  {
    level: "초급"
    question: "산불 발생 시 대피소는 주로 어디에 위치해 있나요?",
    options: ["A. 산 정상", "B. 울창한 숲속", "C. 마을 근처의 공터나 학교", "D. 강 근처"],
    answer: "C"
  },
  {
    level: "초급"
    question: "산불이 가까이 왔을 때 옷이 불에 탈 수 있는 가장 위험한 소재는?",
    options: ["A. 면", "B. 마", "C. 나일론", "D. 울"],
    answer: "C"
  },
  {
    level: "초급"
    question: "산불 시 엘리베이터를 타는 것이 위험한 이유는?",
    options: ["A. 문이 너무 빨리 닫혀서", "B. 연기로 인해 작동이 멈출 수 있음", "C. 올라가는 데 시간이 걸려서", "D. 공기가 부족해서"],
    answer: "B"
  }
];
// 중급 문제 (상황 판단 및 생존 기술)
const medium = [
  {
    level: "중급"
    question: "산불 시 가족과 떨어졌다면?",
    options: ["A. 무작정 찾아다닌다", "B. 서로 정한 장소로 간다", "C. 구조대에게 맡긴다", "D. 그대로 기다린다"],
    answer: "B"
  },
  {
    level: "중급"
    question: "대피소에 도착했을 때 가장 먼저 해야 할 일은?",
    options: ["A. 텐트를 친다", "B. 구조요청을 반복한다", "C. 질서를 지키고 구조대 안내에 따른다", "D. 음식을 찾는다"],
    answer: "C"
  },
  {
    level: "중급"
    question: "산불 발생 전 대비 방법으로 적절한 것은?",
    options: ["A. 방화선 확보", "B. 나무 심기", "C. 장작 쌓기", "D. 주변 잎과 낙엽 모으기"],
    answer: "A"
  },
  {
    level: "중급"
    question: "야외에서 모닥불을 피워도 되는 경우는?",
    options: ["A. 비 오는 날", "B. 바람 없는 날", "C. 지정된 장소에서 허가받고", "D. 아무도 없는 한적한 곳"],
    answer: "C"
  },
  {
    level: "중급"
    question: "산불이 나면 불보다 위험한 것은?",
    options: ["A. 연기", "B. 바람", "C. 뱀", "D. 동물"],
    answer: "A"
  },
  {
    level: "중급"
    question: "산불 위험 경보 중 가장 높은 단계는?",
    options: ["A. 관심", "B. 주의", "C. 경계", "D. 심각"],
    answer: "D"
  },
 {
    level: "중급"
    question: "산불 시 옷차림으로 적절한 것은?",
    options: ["A. 반팔, 반바지", "B. 나일론 소재 옷", "C. 긴팔에 두꺼운 천 소재", "D. 무릎 담요"],
    answer: "C"
  },
  {
    level: "중급"
    question: "연기가 자욱한 공간에서 이동할 때 가장 안전한 자세는?",
    options: ["A. 뛰어서 빠르게 이동", "B. 높이 뛰어오르며 이동", "C. 무릎을 꿇고 낮은 자세로 이동", "D. 그대로 누워 있기"],
    answer: "C"
  },
  {
    level: "중급"
    question: "산불 시 반사열이 심한 구조물은?",
    options: ["A. 콘크리트 벽", "B. 유리창", "C. 흙더미", "D. 철제 구조물"],
    answer: "D"
  },
  {
    level: "중급"
    question: "대피 도중 강을 발견했을 경우 가장 안전한 선택은?",
    options: ["A. 강물에 들어가 피신", "B. 강을 따라 걷는다", "C. 강을 건너 산으로 이동", "D. 강 옆 콘크리트 구조물 근처에 대피"],
    answer: "D"
  },
  {
    level: "중급"
    question: "산불에 대비한 가정용 비상물품으로 적절하지 않은 것은?",
    options: ["A. 손전등", "B. 물", "C. 휴대용 가스버너", "D. 젖은 수건"],
    answer: "C"
  }
  {
    level: "중급"
    question: "산불이 발생했을 때 바닷가에 있는 경우, 대피 방법으로 가장 적절한 것은 무엇인가?",
    options: ["A. 바다에 뛰어든다.", "B. 해안가에 그대로 머무른다.", "C. 해안가에 낮은 곳에서 연기를 피하며 대피한다.", "D. 고지대에서 바람을 쐬며 기다린다."],
    answer: "C"
  },
];
// 상급 문제 (법, 과학, 고급 생존 기술)
const hard = [
  {
    level: "상급"
    question: "「산림보호법」상 금지된 행위는?",
    options: ["A. 지정 장소 외 불 피우기", "B. 산책 중 커피 마시기", "C. 산에 텐트 치기", "D. 사진 찍기"],
    answer: "A"
  },
  {
    level: "상급"
    question: "산불 피해 복구 시 우선 순위는?",
    options: ["A. 식수 공급", "B. 이재민 보호", "C. 불씨 완전 제거", "D. 나무 재심기"],
    answer: "C"
  },
  {
    level: "상급"
    question: "차량 내부 생존 시 피해야 할 행동은?",
    options: ["A. 창문을 닫는다", "B. 히터·에어컨 켠다", "C. 몸을 낮춘다", "D. 불이 가까이 오기 전 이동하지 않는다"],
    answer: "B"
  },
  {
    level: "상급"
    question: "산불 확산을 예측할 수 있는 주요 변수는?",
    options: ["A. 날씨와 풍속", "B. 휴대폰 신호", "C. 사람 수", "D. 고도"],
    answer: "A"
  },
  {
    level: "상급"
    question: "산불 잔불 처리 시 권장되는 장비는?",
    options: ["A. 삽과 호미", "B. 고압 살수 장비", "C. 바람총", "D. 송풍기"],
    answer: "B"
  },
  {
    level: "상급"
    question: "산불 발생 시 법적 책임을 질 수 있는 행위는?",
    options: ["A. 관리되지 않은 야외 흡연", "B. 자가용 사용", "C. 신고 지연", "D. 영상 촬영"],
    answer: "A"
  }
];

function getScore(level) {
    if(level === "초급") return 10;
    else if(level === "중급") return 15;
    else if(level === "상급") return 25;
    else return 0;
}

// 배열 섞는 함수
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #fef9f4; /* 기존 색상 유지 */
  text-align: center;
  padding: 30px;
}

let currentQuestion = 0;
let score = 0;

// 단계별 클래스 선택
  let levelClass = "";
  if (q.level === "초급") levelClass = "level-easy";
  else if (q.level === "중급") levelClass = "level-medium";
  else if (q.level === "상급") levelClass = "level-hard";

function loadQuestion() {
  const q = quizData[currentQuestion];
  const questionText = `${q.level} 문제 (${q.score || getScore(q.level)}점)⧹n⧹n${q.question}`;
  document.getElementById("question").innerText = questionText;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = ""; // 보기 초기화

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt[0]); // 보기의 첫 글자(A/B/C/D)
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
    score += getScore(currentQuestion.level);
  } else {
    result.innerText = "❌ 오답! 정답은 ${q.answer}번이야! ";
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
  const totalScore = score;
  const maxScore = quizData.reduce((acc, q) => acc + (q.score || getScore(q.level)), 0);
  let message = "";

  const ratio = (totalScore / maxScore) * 100;

  if (ratio >= 90) {
    message = "🔥 산불에 대해 정말 잘 아시네요! 훌륭해요!";
  } else if (ratio >= 70) {
    message = "✅ 꽤 잘 알고 계시네요. 약간만 더 보완하면 완벽!";
  } else if (ratio >= 50) {
    message = "⚠️ 기본적인 이해는 있어요. 더 연습해볼까요?";
  } else {
    message = "🌱 산불 대피에 대한 학습이 더 필요해 보여요. 함께 다시 도전해봐요!";
  }

  document.getElementById("question").innerText =
    `퀴즈 완료! 당신의 점수는 ${totalScore}/${maxScore}점입니다 🎉\n\n${message}`;
  document.getElementById("options").innerHTML = "";
  document.getElementById("result").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
}

// 시작 시 첫 문제 불러오기
window.onload = loadQuestion;
