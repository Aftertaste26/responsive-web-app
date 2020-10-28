window.onload = function onload() {
  const hamburgerIcon = document.querySelector(".hamburger-menu");
  const closeIcon = document.querySelector(".closebtn");
  const startButton = document.querySelector("#quiz-start-btn");
  const currentPage = document.querySelector("#currentPage")

  const houses = {
    gryffindor: {
      name: "Gryffindor",
      traits: [
        "Stand up to them",
        "Agree, and walk away, leaving them to wonder whether you are bluffing",
        "Cowardice",
        "Bravery",
        "Secrets about the castle",
        "An eye at the keyhole",
        "Draw your wand and try to discover the source of the noise",
      ],
      logo: "assets/gryffindor.jpg",
      message: "You belong in Gryffindor,<br>where dwell the brave at heart.<br>Their daring nerve and chivalry<br>set Gryffindor apart."
    },
    ravenclaw: {
      name: "Ravenclaw",
      traits: [
        "Let them be, I have better things to do than waste my time on those people",
        "Ask what makes them think so",
        "Laziness",
        "Intelligence",
        "Every area of magic I can",
        "Standing on top of something very high",
        "Withdraw into the shadows to await developments",
      ],
      logo: "assets/ravenclaw.jpg",
      message: "You belong to Ravenclaw!<br>You have a ready mind,<br>where those of wit and learning<br>will always find their kind."
    },
    hufflepuff: {
      name: "Hufflepuff",
      traits: [
        "Runaway and cry, but never tell anyone about them",
        "Tell them that you are worried about their mental health, and offer to call a doctor",
        "Dishonesty",
        "Kindness",
        "All about magical creatures, and how to befriend/care for them",
        "Your friends nor your family have any idea who you are",
        "Proceed with caution",
      ],
      logo: "assets/hufflepuff.jpg",
      message: "You belong in Hufflepuff,<br>where they are just and loyal.<br>Those patient Hufflepuffs are true<br>and unafraid of toil"
    },
    slytherin: {
      name: "Slytherin",
      traits: [
        "Leave them to what they're doing, I'll tell my father, then plan revenge",
        "Agree, and ask whether they’d like a free sample of a jinx",
        "Stupidity",
        "Ambition",
        "Hexes and jinxes",
        "Being forced to speak in such a silly voice",
        "Draw your wand and stand your ground",
      ],
      logo: "assets/slytherin.jpg",
      message: "In Slytherin you'll make your real friends,<br>those cunning folks use any means<br>to achieve their ends."
    },
  };
  const quiz = {
    chosen: {},
    questions: [
      {
        question:
          "How would you react if someone picks on you and your friend?",
        choices: [
          {
            value: houses.gryffindor.name,
            description: houses.gryffindor.traits[0],
          },
          {
            value: houses.slytherin.name,
            description: houses.slytherin.traits[0],
          },
          {
            value: houses.ravenclaw.name,
            description: houses.ravenclaw.traits[0],
          },
          {
            value: houses.hufflepuff.name,
            description: houses.hufflepuff.traits[0],
          },
        ],
        image: "assets/image-1.gif",
      },
      {
        question:
          "A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:",
        choices: [
          {
            value: houses.gryffindor.name,
            description: houses.gryffindor.traits[1],
          },
          {
            value: houses.slytherin.name,
            description: houses.slytherin.traits[1],
          },
          {
            value: houses.ravenclaw.name,
            description: houses.ravenclaw.traits[1],
          },
          {
            value: houses.hufflepuff.name,
            description: houses.hufflepuff.traits[1],
          },
        ],
        image: "assets/image-2.1.gif",
      },
      {
        question:
          "What fault do you notice in people that bother you the most?",
        choices: [
          {
            value: houses.gryffindor.name,
            description: houses.gryffindor.traits[2],
          },
          {
            value: houses.slytherin.name,
            description: houses.slytherin.traits[2],
          },
          {
            value: houses.ravenclaw.name,
            description: houses.ravenclaw.traits[2],
          },
          {
            value: houses.hufflepuff.name,
            description: houses.hufflepuff.traits[2],
          },
        ],
        image: "assets/image-3.gif",
      },
      {
        question: "What's the best trait do you think you have?",
        choices: [
          {
            value: houses.gryffindor.name,
            description: houses.gryffindor.traits[3],
          },
          {
            value: houses.slytherin.name,
            description: houses.slytherin.traits[3],
          },
          {
            value: houses.ravenclaw.name,
            description: houses.ravenclaw.traits[3],
          },
          {
            value: houses.hufflepuff.name,
            description: houses.hufflepuff.traits[3],
          },
        ],
        image: "assets/image-5.gif",
      },
      {
        question: "What are you most looking forward to learning at Hogwarts?",
        choices: [
          {
            value: houses.gryffindor.name,
            description: houses.gryffindor.traits[4],
          },
          {
            value: houses.slytherin.name,
            description: houses.slytherin.traits[4],
          },
          {
            value: houses.ravenclaw.name,
            description: houses.ravenclaw.traits[4],
          },
          {
            value: houses.hufflepuff.name,
            description: houses.hufflepuff.traits[4],
          },
        ],
        image: "assets/image-6.gif",
      },
      {
        question: "Which nightmare would frighten you most?",
        choices: [
          {
            value: houses.gryffindor.name,
            description: houses.gryffindor.traits[5],
          },
          {
            value: houses.slytherin.name,
            description: houses.slytherin.traits[5],
          },
          {
            value: houses.ravenclaw.name,
            description: houses.ravenclaw.traits[5],
          },
          {
            value: houses.hufflepuff.name,
            description: houses.hufflepuff.traits[5],
          },
        ],
        image: "assets/dementors.gif",
      },
      {
        question:
          "Late at night, walking alone down the street, you hear a peculiar cry that you believe to have a magical source. What would you do?",
        choices: [
          {
            value: houses.gryffindor.name,
            description: houses.gryffindor.traits[6],
          },
          {
            value: houses.slytherin.name,
            description: houses.slytherin.traits[6],
          },
          {
            value: houses.ravenclaw.name,
            description: houses.ravenclaw.traits[6],
          },
          {
            value: houses.hufflepuff.name,
            description: houses.hufflepuff.traits[6],
          },
        ],
        image: "assets/image-4.gif",
      },
    ],
    questionIndex: 0,
  };

  const generateCard = (description, imageSource, choices) => {
    const cardContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const form = document.createElement("form");
    const img = document.createElement("img");
    const question = document.createElement("p");
    const choicesContainer = document.createElement("div");
    const nextButton = document.createElement("button");

    //class names
    cardContainer.className = "card-container";
    imgContainer.className = "img-container";
    question.className = "question";
    choicesContainer.className = "choices-container";
    nextButton.id = "next";
    nextButton.setAttribute("type", "button");

    nextButton.innerHTML = "Next";
    question.innerHTML = description;
    cardContainer.appendChild(question);

    img.src = imageSource;
    imgContainer.appendChild(img);
    cardContainer.appendChild(imgContainer);

    choices.forEach((element) => {
      const inputContainer = document.createElement("div");
      const radio = document.createElement("input");
      const choice = document.createElement("div");
      const radioContainer = document.createElement("div");

      radio.type = "radio";
      radio.name = "choice";
      radio.value = element.value;
      choice.className = "choice";
      inputContainer.className = "input-container";
      radioContainer.className = "radio-style";

      choice.innerHTML = element.description;
      radioContainer.appendChild(radio);
      inputContainer.append(radioContainer, choice);
      form.appendChild(inputContainer);
    });
    choicesContainer.appendChild(form);
    cardContainer.append(choicesContainer, nextButton);

    return cardContainer;
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  const byDESC = (a, b) => b - a;

  const generateQuizCard = () => {
    const quizCards = document.createElement("div");
    quizCards.id = "quizCards";
    quizCards.className = "quizCards-container";
    return quizCards;
  };

  const showResult = (tallyResults) => {
    return () => {
      const contentContainer = document.querySelector(".content-container");
      contentContainer.innerHTML = ""; //erase data
      const container = document.createElement("div");
      const houseFlag = document.createElement("img");
      const resultContainer = document.createElement("div");
      const replayButton = document.createElement("button")
      
      const result = Object.keys(tallyResults).reduce((prev, current) =>
        tallyResults[prev] > tallyResults[current] ? prev : current
      );
      container.className = "container";
      replayButton.innerHTML = "Replay"
      
      houseFlag.setAttribute("src", houses[result.toLowerCase()].logo);
      resultContainer.innerHTML = `CONGRATULATIONS!<br><br>${houses[result.toLowerCase()].message}`;
      replayButton.addEventListener("click", () => window.location.reload())

      container.append(houseFlag, resultContainer, replayButton);
      contentContainer.appendChild(container);
    };
  };

  const sortingHat = () => {
    const loadingContainer = document.createElement("div");
    const loadingText = document.createElement("p");
    const imgContainer = document.createElement("div");
    const gifImage = document.createElement("img");

    loadingContainer.className = "container";
    gifImage.id = "sortingHat";
    loadingText.innerHTML = "sorting...";
    gifImage.setAttribute("src", "assets/sorting-hat.gif");
    imgContainer.appendChild(gifImage);
    loadingContainer.append(imgContainer, loadingText);
    return loadingContainer;
  };

  const checkForTies = (tallyResults) => {
    const tallyValues = R.pipe(R.values, R.sortBy(byDESC))(tallyResults);
    return R.equals(R.head(tallyValues), R.prop(1, tallyValues));
  };

  const submit = (quizData) => {
    const choices = document.querySelectorAll("input");
    let choice;
    for (i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        choice = choices[i].value;
      }
    }
    if (choice === undefined) {
      alert("Cannot proceed");
    } else {
      quizData.questionIndex += 1;
      quizData.chosen[quizData.questionIndex] = choice
      return startQuiz(quizData);
    }
  };

  const startQuiz = (quizData, numberOfquestions = 5) => {
    const quiz = quizData.questions[quizData.questionIndex];
    const quizCards = document.querySelector("#quizCards");

    quizCards.childNodes.forEach((child) => {
      if (child.className === "card-container") child.remove();
    });

    if (quizData.questionIndex < numberOfquestions) {
      const card = generateCard(quiz.question, quiz.image, quiz.choices);
      quizCards.appendChild(card);
      const nextBtn = document.querySelector("#next");
      nextBtn.addEventListener("click", () => submit(quizData));
    } else {
      //end

      const tallyResults = R.countBy(R.identity, R.values(quizData.chosen));
console.log(tallyResults)
      if (checkForTies(tallyResults)) {
        numberOfquestions += 1;
        return startQuiz(quizData, (numberOfquestions += 1)); //if has tie, startQuiz again
      } else {
        quizCards.appendChild(sortingHat());
        setTimeout(showResult(tallyResults), 5000);
      }
    }
  };

  const proceedToQuiz = () => {
    console.log("proceeding to quiz");

    const quizStartContainer = document.querySelector("#quiz-start-container");
    quizStartContainer.style.display = "none";

    const contentContainer = document.querySelector("#content-container");
    contentContainer.appendChild(generateQuizCard());

    startQuiz(quiz);
  };

  const openNav = () => {
    const overlay = document.querySelector("#black-overlay");
    const sideNav = document.querySelector("#sideNav");
    overlay.className = "";
    overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
    sideNav.style.width = "250px";
  };

  const closeNav = () => {
    const overlay = document.querySelector("#black-overlay");
    overlay.className = "hide";
    sideNav.style.width = "0";
  };

  hamburgerIcon.addEventListener("click", openNav);
  closeIcon.addEventListener("click", closeNav);
  currentPage.addEventListener("click", closeNav);
  startButton.addEventListener("click", proceedToQuiz);
};
