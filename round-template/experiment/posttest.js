// Post_Test Questions

// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "The output of the negative feedback Op - Amp is _________.",
      answers: {
        a: "equal to the input",
        b: "increased",
        c: "fed back to the inverting input",
        d: "fed back to the non - inverting input"
      },
      correctAnswer: "c"
    },

    {
      question: "Negative feedback ________ .",
      answers: {
        a: "increases the input and output impedances",
        b: "increases the input impedance and bandwidth",
        c: "decreases the output impedance and bandwidth",
        d: "does not affect impedance or bandwidth"
      },
      correctAnswer: "b"
    },

    {
      question: "In Op-amp , the input stage is a ______.",
      answers: {
        a: "differential amplifier",
        b: "class B push-pull amplifier",
        c: "CE amplifier",
        d: "swamped amplifier"
      },
      correctAnswer: "a"
    },
    {
      question: "__________ is not an ideal op-amp characteristics.",
      answers: {
        a: "Infinite voltage gain",
        b: "Infinite bandwidth",
        c: "Infinite output resistance",
        d: "Infinite slew rate"
      },
      correctAnswer: "c"
    },
    {
      question: "_________ determines the output voltage of an op-amp",
      answers: {
        a: "Positive saturation",
        b: "Negative saturation",
        c: "Both positive and negative saturation voltages",
        d: "Supply voltage"
      },
      correctAnswer: "c"
    },
  


  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
