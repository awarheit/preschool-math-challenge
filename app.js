function makeRandNum() {
    return Math.floor(Math.random() * 20) + 1;
  }
  // Change "20" above to different max num to adjust difficulty
    
var problemNum1 = 3;
var problemNum2 = 2;

function newProblem() {
    problemNum1 = makeRandNum();
    problemNum2 = makeRandNum();
    const problem = document.querySelector("#problem");
    problem.innerText = `What is ${problemNum1} + ${problemNum2}?`;
    answerField.value = '';
  }
  newProblem();


const problemForm = document.querySelector("#problemForm");
problemForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const answer = parseInt(problemForm.elements.answerField.value);
  if (answer === problemNum1 + problemNum2) {
      alert("Correct!")
  } else {
      alert("Wrong-o!")
  }
  newProblem();
});




