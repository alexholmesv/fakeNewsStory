const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
const imageElement = document.getElementById('image');
const subTextElement = document.getElementById('subtext');
const link1Element = document.getElementById('link1');
const link2Element = document.getElementById('link2');


let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  imageElement.src = textNode.img;
  if (textNode.subtext === undefined ) {
    subTextElement.style.visibility = "hidden"
  } else {
    subTextElement.style.visibility = "visible"
    subTextElement.innerText = textNode.subtext;
  }

  if (textNode.link1 === undefined) {
    link1Element.style.visibility = "hidden"
  }
    else {
    link1Element.style.visibility = "visible"
    link1Element.innerHTML = textNode.link1
    link1Element.setAttribute('href', textNode.link1)
  }
  if (textNode.link2 === undefined) {
    link2Element.style.visibility = "hidden"
  }
  else {
    link2Element.style.visibility = "visible"
    link2Element.innerHTML = textNode.link2
    link2Element.setAttribute('href', textNode.link2)
  }

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
      if (option.flag === "warning") {
        button.classList.add('warning-btn')
      }
      else {
        button.classList.add('btn')
      }
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  state = Object.assign(state, option.setState)

  if (nextTextNodeId < 1) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id:1,
    img: 'img/logic.jpg',
    text: "Welcome! \n " +
      "Before we start, have you completed the survey on the link below? \n " +
      "It will only take a few minutes, and it will help us with out research.",
    subtext: "The link will open in a new window. \n " +
      "Please do NOT refresh or leave this page while you play, or you will have to start all over again.",
    link1: "http://www.google.com",
    link2: "",
    options: [
      {
        text: "Let's do this!",
        nextText: 2,
      },
    ]
  },
  {
    id:2,
    img: 'img/logic.jpg',
    text: "Information is made by people, and all people are flawed, imperfect beings. \n Therefore, all information is flawed and imperfect.",
    options: [
      {
        text: "That sounds...logical.",
        setState: { logical: true },
        nextText: 3,
      },
      {
        text: "Sure, I hate people too.",
        setState: { emotional: true },
        nextText: 3,
      },
      {
        text: "Well, true...but what's your point?",
        setState: { doubtful: true },
        nextText: 3,
      },
      {
        text: "(Skip)",
        flag: "warning",
        setState: { notnew: true },
        nextText: 7,
      }
    ]
  },
  {
    id:3,
    img: 'img/makes_sense.jpg',
    text: "So, if all information is flawed, that means that all information is equally unreliable.",
    options: [
      {
        text: "Non-sequitur, my friend.",
        requiredState: (currentState) => currentState.logical,
        setState: { logical: false },
        nextText: 4,
      },
      {
        text: "That's right! Trust no-one!",
        setState: { doubtful: true },
        nextText: 4,
      },
      {
        text: "Wait, what? No.",
        nextText: 4,
      },
    ]
  },
  {
    id:4,
    img: 'img/makes_sense.jpg',
    text: "Just joking. You didn't think I was serious, did you? \n Of course, all information has some sort of bias, but that doesn't mean all information is created equal. \n " +
      "\n " +
      "Some sources can be much more reliable than others.",
    options: [
      {
        text: "Go on, I'm listening.",
        nextText: 5,
      },
      {
        text: "Everything is fake news! The industrial-military complex, the reptilians, the Illuminati and the corporations are out manipulate us!",
        requiredState: (currentState) => currentState.emotional,
        setState: { conspirational: true, emotional: true },
        nextText: 5,
      },
      {
        text: "But how do I know who is telling the truth?",
        requiredState: (currentState) => currentState.doubtful,
        setState: { emotional: false },
        nextText: 5,
      },
    ]
  },
  {
    id:5,
    img: 'img/makes_sense.jpg',
    text: "There is so much information out there. SO much. Knowing who to trust is getting harder everyday, \n " +
      "yet there is only so much us robots can do for you. At the end, the capacity to filter out the noise is up to YOU.",
    options: [
      {
        text: "Come on, just tell me what to think!",
        setState: { lazy: true },
        nextText: 7,
      },
      {
        text: "You're just a Deep State goon who wants to impose his liberal agenda on me.",
        requiredState: (currentState) => currentState.conspirational,
        setState: { emotional: true },
        nextText: 6,
      },
      {
        text: "But HOW do I do this?",
        requiredState: (currentState) => currentState.conspirational,
        setState: { emotional: true },
        nextText: 7,
      },
    ]
  },
  {
    id:6,
    img: 'img/woman-cat.jpg',
    text: "Wow, highly emotional AND conspiratorial! \n " +
      "This game might be just what you need, " +
      "if you would only let me ruffle your tinfoil hat. ",
    subtext: "You may leave the game anytime just by closing this window.",
    link1: "www.test.com",
    link2: "www.test.cl",
    options: [
      {
        text: "OK, fine. Let's do this your way. Let's start again.",
        nextText: 2,
      },
      ]
  }
]

startGame();
