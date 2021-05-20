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
  answerField.value = "";
}
newProblem();

const problemForm = document.querySelector("#problemForm");
problemForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const answer = parseInt(problemForm.elements.answerField.value);
  if (answer === problemNum1 + problemNum2) {
    const divContainer = document.querySelector("#divContainer");
    const divObject = divContainer.children;
    if (divObject[0].classList.contains("neutralDiv")) {
      divObject[0].classList.replace("neutralDiv", "correctDiv");
    } else {
      if (divObject[1].classList.contains("neutralDiv")) {
        divObject[1].classList.replace("neutralDiv", "correctDiv");
      } else {
        if (divObject[2].classList.contains("neutralDiv")) {
          divObject[2].classList.replace("neutralDiv", "correctDiv");
        } else {
          if (divObject[3].classList.contains("neutralDiv")) {
            divObject[3].classList.replace("neutralDiv", "correctDiv");
          } else {
            if (divObject[4].classList.contains("neutralDiv")) {
              divObject[4].classList.replace("neutralDiv", "correctDiv");
            } else {
              if (divObject[5].classList.contains("neutralDiv")) {
                divObject[5].classList.replace("neutralDiv", "correctDiv");
              } else {
                if (divObject[6].classList.contains("neutralDiv")) {
                  divObject[6].classList.replace("neutralDiv", "correctDiv");
                  alert("You win!");
                } else {
                  alert("you already won!");
                }
              }
            }
          }
        }
      }
    }
  } else {
    const divContainer = document.querySelector("#divContainer");
    const divObject = divContainer.children;
    if (divObject[0].classList.contains("neutralDiv")) {
      alert("Try again!");
    } else {
      if (divObject[6].classList.contains("correctDiv")) {
        divObject[6].classList.replace("correctDiv", "neutralDiv");
      } else {
        if (divObject[5].classList.contains("correctDiv")) {
          divObject[5].classList.replace("correctDiv", "neutralDiv");
        } else {
          if (divObject[4].classList.contains("correctDiv")) {
            divObject[4].classList.replace("correctDiv", "neutralDiv");
          } else {
            if (divObject[3].classList.contains("correctDiv")) {
              divObject[3].classList.replace("correctDiv", "neutralDiv");
            } else {
              if (divObject[2].classList.contains("correctDiv")) {
                divObject[2].classList.replace("correctDiv", "neutralDiv");
              } else {
                if (divObject[1].classList.contains("correctDiv")) {
                  divObject[1].classList.replace("correctDiv", "neutralDiv");
                } else {
                  if (divObject[0].classList.contains("correctDiv")) {
                    divObject[0].classList.replace("correctDiv", "neutralDiv");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  newProblem();
});
