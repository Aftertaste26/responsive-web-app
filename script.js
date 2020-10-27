window.onload = function onload() {
  const hamburgerIcon = document.querySelector(".hamburger-menu");
  const closeIcon = document.querySelector(".closebtn");
  const startButton = document.querySelector("#quiz-start-btn");

  const quizStat = {
    chosen: {},
  };

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
      logo: "assets/",
    },
    ravenclaw: {
      name: "Ravenclaw",
      traits: [
        "Let them be, I have better things to do than waste my time on those people",
        "Ask what makes them think so",
        "Laziness",
        "intelligence",
        "Every area of magic I can",
        "Standing on top of something very high",
        "Withdraw into the shadows to await developments",
      ],
      logo: "assets/",
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
      logo: "assets/",
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
      logo: "assets/",
    },
  };

  const quizItems = [
    {
      question: "How would you react if someone picks on you and your friend?",
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
      question: "What fault do you notice in people that bother you the most?",
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
  ];

  const generateCard = (description, imageSource, choices) => {
    const cardContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const form = document.createElement("form");
    const img = document.createElement("img");
    const question = document.createElement("p");
    const choicesContainer = document.createElement("div");

    //class names
    cardContainer.className = "card-container";
    imgContainer.className = "img-container";
    question.className = "question";
    choicesContainer.className = "choices-container";

    question.innerHTML = description;
    cardContainer.appendChild(question);

    img.src = imageSource;
    imgContainer.appendChild(img);
    cardContainer.appendChild(imgContainer);

    choices.forEach((element) => {
      const inputContainer = document.createElement("div");
      const radio = document.createElement("input");
      const choice = document.createElement("p");

      radio.type = "radio";
      radio.name = "choice";
      radio.value = element.value;
      radio.className = "radio";
      choice.className = "choice";
      inputContainer.className = "input-container";

      choice.innerHTML = element.description;
      inputContainer.append(radio, choice);
      form.appendChild(inputContainer);
    });
    choicesContainer.appendChild(form);
    cardContainer.appendChild(choicesContainer);

    return cardContainer;
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  const generateQuizCard = () => {
    const quizCards = document.createElement("div");
    const button = document.createElement("button");
    button.innerHTML = "next";
    quizCards.id = "quizCards";
    quizCards.className = "quizCards-container";
    quizCards.appendChild(button);
    return quizCards;
  };

  const choicesClicked = ({ index, quizItems }) => (event) => {
    if (event.target.tagName == "INPUT") {
      quizStat.chosen[index] = (event.target.value);
      console.log("hllo", event.target.value);
      console.log(quizStat);
    }

    if (event.target.tagName == "BUTTON") {
      startQiuz({ index: index + 1, quizItems: quizItems });
      console.log(event.target);
      console.log("hllo", event.target.value);
      quizStat.chosen[index] = answer;
      console.log(quizStat.chosen);
    }
  };

  const startQiuz = ({ index, quizItems }) => {
    const quiz = quizItems[index];
    const quizCards = document.querySelector("#quizCards");
    const card = generateCard(quiz.question, quiz.image, quiz.choices);

    quizCards.childNodes.forEach((child) => {
      if (child.className === "card-container") child.remove();
    });

    quizCards.appendChild(card);
    quizCards.addEventListener(
      "click",
      choicesClicked({ index: index, quizItems: quizItems })
    );
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100px";
    document.getElementById("main").style.marginLeft = "100px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  const proceedToQuiz = () => {
    console.log("proceeding to quiz");
    const quizStartContainer = document.querySelector("#quiz-start-container");
    quizStartContainer.style.display = "none";

    const contentContainer = document.querySelector("#content-container");
    contentContainer.appendChild(generateQuizCard());

    startQiuz({ index: 0, quizItems: quizItems });
  };

  hamburgerIcon.addEventListener("click", openNav);
  closeIcon.addEventListener("click", closeNav);
  startButton.addEventListener("click", proceedToQuiz);
};
