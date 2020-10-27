// const R = require("ramda");

window.onload = function onload() {
  const hamburgerIcon = document.querySelector(".hamburger-menu");
  const closeIcon = document.querySelector(".closebtn");
  const startButton = document.querySelector("#quiz-start-btn");
  const quizStartContainer = document.querySelector("#quiz-start-container");
  const questionsContainer = document.querySelector(".questions");
  const nextBtn = document.querySelector("#nextBtn");
  const cardContainer = document.querySelector(".card-container");
  const imgContainer = document.createElement("div");
  const gifImage = document.createElement("img");
  imgContainer.className = "img-container";
  let choice;
  let numberOfQuestions = 5;
  let count = 0;

  // let answers = [];

  const houses = [
    {
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
      tally: 0,
      logo: "assets/",
    },
    {
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
      tally: 0,
      logo: "assets/",
    },
    {
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
      tally: 0,
      logo: "assets/",
    },
    {
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
      tally: 0,
      logo: "assets/",
    },
  ];

  const quizItems = [
    {
      question: "How would you react if someone picks on you and your friend?",
      // choices: [
      //   "Stand up to them", //G
      //   "Leave them to what they're doing, I'll tell my father, then plan revenge", //S
      //   "Let them be, I have better things to do than waste my time on those people", //R
      //   "Runaway and cry, but never tell anyone about them", //H
      // ],
      image: "assets/image-1.gif",
    },
    {
      question:
        "A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:",
      // choices: [
      //   "Ask what makes them think so", //R
      //   "Agree, and ask whether they’d like a free sample of a jinx?", //S
      //   "Agree, and walk away, leaving them to wonder whether you are bluffing?", //G
      //   "Tell them that you are worried about their mental health, and offer to call a doctor", //H
      // ],
      image: "assets/image-2.1.gif",
    },
    {
      question: "What fault do you notice in people that bother you the most?",
      // choices: [
      //   "stupidity", //S
      //   "dishonesty", //H
      //   "cowardice", //G
      //   "laziness", //R
      // ],
      image: "assets/image-3.gif",
    },
    {
      question: "What's the best trait do you think you have?",
      // choices: [
      //   "intelligence", //R
      //   "bravery", //G
      //   "kindness", //H
      //   "ambition", //S
      // ],
      image: "assets/image-5.gif",
    },
    {
      question: "What are you most looking forward to learning at Hogwarts?",
      // choices: [
      //   "Secrets about the castle", //G
      //   "Every area of magic I can", //R
      //   "All about magical creatures, and how to befriend/care for them", //H
      //   "Hexes and jinxes", //S
      // ],
      image: "assets/image-6.gif",
    },
    {
      question: "Which nightmare would frighten you most?",
      // choices: [
      //   "stupidity", //S
      //   "dishonesty", //H
      //   "cowardice", //G
      //   "laziness", //R
      // ],
      image: "assets/dementors.gif",
    },
    {
      question:
        "Late at night, walking alone down the street, you hear a peculiar cry that you believe to have a magical source. What would you do?",
      // choices: [
      //   "Proceed with caution", //H
      //   "Draw your wand and try to discover the source of the noise", //G
      //   "Withdraw into the shadows to await developments", //R
      //   "Draw your wand and stand your ground", //S
      // ],
      image: "assets/image-4.gif",
    },
  ];

  // const random = (min, max) =>
  //   Math.trunc(Math.random() * (max - min + 1) + min);

  const generateCard = () => {
    const question = document.createElement("p");
    const choicesContainer = document.createElement("div");

    question.className = "question";
    choicesContainer.className = "choices-container";

    question.innerHTML = quizItems[count].question;
    nextBtn.innerHTML = "Next";
    for (let i = 0; i < houses.length; i++) {
      const inputContainer = document.createElement("div");
      const radio = document.createElement("input");
      const choice = document.createElement("p");

      inputContainer.className = "input-container";
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "choice");
      radio.setAttribute("class", "radio");

      choice.setAttribute("class", "choice");

      choice.innerHTML = houses[i].traits[count];
      gifImage.setAttribute("src", quizItems[count].image);
      inputContainer.append(radio, choice);
      choicesContainer.appendChild(inputContainer);
      imgContainer.appendChild(gifImage);
    }

    cardContainer.append(question, imgContainer, choicesContainer);
  };

  const showCard = () => {
    nextBtn.className = "";

    if (count < numberOfQuestions) {
      generateCard();
      if (cardContainer.innerHTML !== "") {
        window.addEventListener("click", handleClick);
      }
    } else {
      // sort();

      // setTimeout(showResult, 5000);
      console.log(getResult());
    }
  };

  const next = () => {
    // console.log(choice);
    houses[choice].tally += 1;
    console.log(`House: ${houses[choice].name} ${houses[choice].tally}`);
    // answers.push(choice);
    // console.log((houses[choice].tally += 1));
    count++;
    cardContainer.innerHTML = "";
    showCard();
  };

  const handleClick = (event) => {
    if (event.target.getAttribute("class") === "radio") {
      const selectedAnswer = event.target.parentElement.children[1].innerHTML;
      console.log(selectedAnswer);

      choice = houses.findIndex((house) =>
        house.traits.includes(selectedAnswer)
      );
    }
  };

  // const randomizeChoices = () => {
  //   let choices = []
  //   for(let i = 0; i < houses.length; i++){
  //     choices.push(houses[i].traits[count])
  //   }
  // }
  const hasTie = () => {
    console.log(
      houses.reduce(
        (acc, current) => (acc < current ? (acc = current) : (acc = acc)),
        0
      )
    );
  };

  const getResult = () => {
    console.log("tally:");
    if (hasTie()) {
      numberOfQuestions += 1;
      return showCard();
    } else {
      houses.forEach((house) => console.log(house.name + ": " + house.tally));
      // return houses.reduce((acc, current) =>
      // console.log (acc[current])
      // prev.tally > current.tally ?`${prev.name}: ${prev.tally}` : `${current.name}: ${current.tally}`
      // );
    }
  };

  const sort = () => {
    const loadingText = document.createElement("p");
    nextBtn.className = "hide";
    gifImage.setAttribute("src", "assets/sorting-hat.gif");
    imgContainer.appendChild(gifImage);
    loadingText.innerHTML = "sorting...";
    cardContainer.append(imgContainer, loadingText);
  };

  const showResult = () => {
    cardContainer.innerHTML = "";
    console.log("show result");
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
    // cardContainer.className = "";
    quizStartContainer.className = "hide";
    showCard();
    // generateCard();
  };

  hamburgerIcon.addEventListener("click", openNav);
  closeIcon.addEventListener("click", closeNav);
  startButton.addEventListener("click", proceedToQuiz);
  nextBtn.addEventListener("click", next);
};

// add card element generator to automatically generarate cards.
/* 
#use:
document.createElement


#sample output:

<div class="card-container">
          <div class="title"><h2>TITLE</h2></div>
          <div class="img-container">
            <img src="assets/burger.png" alt="" />
            <p>
              Description inserted here <br />
              caption
            </p>
          </div>
          <div class="buttons">
            <form action="">
              <div class="input">
                <input type="radio" name="choice" value="hi" />hi <br />
              </div>
              <div class="input">
                <input type="radio" name="choice" value="hi" />hi <br />
              </div>
              <div class="input">
                <input type="radio" name="choice" value="hi" />hi <br />
              </div>
              <div class="input">
                <input type="radio" name="choice" value="hi" />hi <br />
              </div>
            </form>
          </div>
        </div>

*/
