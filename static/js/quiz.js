const questions = [
  {
    question: "ما هو تاريخ اليوم الوطني السعودي؟",
    answers: ["23 | سبتمبر", "1 | يناير", "5 | أكتوبر"],
    correct: 0,
  },
  {
    question: "ما هي عاصمة المملكة العربية السعودية؟",
    answers: ["الرياض", "جدة", "مكة"],
    correct: 0,
  },
  {
    question: "ما هي السلاسل الجبلية الممتدة على طول المملكة؟",
    answers: ["جبال الحجاز", "جبال تبوك", "جبال السروات"],
    correct: 2, 
  },
  {
    question: "كم عدد مناطق المملكة؟",
    answers: ["10", "13", "15"],
    correct: 1,
  },
  {
    question: "من هو مؤسس المملكة العربية السعودية؟",
    answers: ["الملك سلمان", "الملك عبدالعزيز", "الملك فهد"],
    correct: 1,
  },
];

let currentQuestion = 0;
let score = 0;

const container = document.getElementById("quiz-container");

function showQuestion() {
  let q = questions[currentQuestion];
  container.innerHTML = `
    <h2>${q.question}</h2>
    <div class="cards-container">
      ${q.answers
        .map(
          (a, i) => `<div class="card" onclick="checkAnswer(${i})">${a}</div>`
        )
        .join("")}
    </div>
  `;
}

function checkAnswer(i) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    if (index === questions[currentQuestion].correct) {
      card.style.backgroundColor = "#28a745"; // أخضر للإجابة الصحيحة
      card.style.color = "#fff";
    } else if (index === i) {
      card.style.backgroundColor = "#dc3545"; // أحمر للإجابة الخاطئة
      card.style.color = "#fff";
    }
    card.style.pointerEvents = "none"; // منع الضغط مرة ثانية
  });

  if (i === questions[currentQuestion].correct) score++;

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      endQuiz();
    } else {
      showQuestion(); // عرض السؤال التالي
    }
  }, 1200);
}

function endQuiz() {
  // تخزين النتيجة فقط
  localStorage.setItem("score", score);
  // الانتقال لصفحة إدخال الاسم
  window.location.href = "result.html";
}

// بدء الكويز
showQuestion();
