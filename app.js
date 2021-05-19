const problemForm = document.querySelector("#problemForm");
problemForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

function makeRandNum() {
  return Math.floor(Math.random() * 20) + 1;
}
// Change "20" above to different max num to adjust difficulty


function newProblem() {
  const problemNum1 = makeRandNum();
  const problemNum2 = makeRandNum();
  const problem = document.querySelector("#problem");
  problem.innerText = `What is ${problemNum1} + ${problemNum2}?`;
}

newProblem();
