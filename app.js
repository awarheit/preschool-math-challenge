function makeRandNum() {
  return Math.floor(Math.random() * 20) + 1;
}
// Change "20" above to different max num to adjust difficulty


function newProblem() {
  problemNum1 = makeRandNum();
  problemNum2 = makeRandNum();
  const problem = document.querySelector("#problem");
  problem.innerText = `${problemNum1} + ${problemNum2} =`;
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
      divObject[0].classList.replace("neutralDiv", "correctDiv0");
    } else {
      if (divObject[1].classList.contains("neutralDiv")) {
        divObject[1].classList.replace("neutralDiv", "correctDiv1");
      } else {
        if (divObject[2].classList.contains("neutralDiv")) {
          divObject[2].classList.replace("neutralDiv", "correctDiv2");
        } else {
          if (divObject[3].classList.contains("neutralDiv")) {
            divObject[3].classList.replace("neutralDiv", "correctDiv3");
          } else {
            if (divObject[4].classList.contains("neutralDiv")) {
              divObject[4].classList.replace("neutralDiv", "correctDiv4");
            } else {
              if (divObject[5].classList.contains("neutralDiv")) {
                divObject[5].classList.replace("neutralDiv", "correctDiv5");
              } else {
                if (divObject[6].classList.contains("neutralDiv")) {
                  divObject[6].classList.replace("neutralDiv", "correctDiv6");
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
      if (divObject[6].classList.contains("correctDiv6")) {
        divObject[6].classList.replace("correctDiv6", "neutralDiv");
      } else {
        if (divObject[5].classList.contains("correctDiv5")) {
          divObject[5].classList.replace("correctDiv5", "neutralDiv");
        } else {
          if (divObject[4].classList.contains("correctDiv4")) {
            divObject[4].classList.replace("correctDiv4", "neutralDiv");
          } else {
            if (divObject[3].classList.contains("correctDiv3")) {
              divObject[3].classList.replace("correctDiv3", "neutralDiv");
            } else {
              if (divObject[2].classList.contains("correctDiv2")) {
                divObject[2].classList.replace("correctDiv2", "neutralDiv");
              } else {
                if (divObject[1].classList.contains("correctDiv1")) {
                  divObject[1].classList.replace("correctDiv1", "neutralDiv");
                } else {
                  if (divObject[0].classList.contains("correctDiv0")) {
                    divObject[0].classList.replace("correctDiv0", "neutralDiv");
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
