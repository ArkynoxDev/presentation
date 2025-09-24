document.querySelectorAll('.soal').forEach(soal => {
  const btn = soal.querySelector('.check-btn');
  const input = soal.querySelector('input');
  const answerDiv = soal.querySelector('.correct-answer');

  btn.addEventListener('click', () => {
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = input.getAttribute('data-answer').toLowerCase();

    if(userAnswer === correctAnswer) {
      answerDiv.textContent = "Benar! ✅ Jawaban: " + correctAnswer;
      answerDiv.style.color = "#57e6ff";
    } else {
      answerDiv.textContent = "Salah ❌ Jawaban: " + correctAnswer;
      answerDiv.style.color = "#ff4b57";
    }

    answerDiv.style.display = "block";
    answerDiv.style.opacity = 0;
    fadeIn(answerDiv);
  });
});

function fadeIn(element) {
  let op = 0;
  const timer = setInterval(() => {
    if(op >= 1){
      clearInterval(timer);
    }
    element.style.opacity = op;
    op += 0.05;
  }, 20);
}
