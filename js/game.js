const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
const imageElement = document.getElementById('image');
const subTextElement = document.getElementById('subtext');
const link1Element = document.getElementById('link1');
const link2Element = document.getElementById('link2');
const ffButtonElement = document.getElementById('ff-button');

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

//Show text and images within the container
function showTextNode(textNodeIndex) {
  //Get the text node number
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  //Show the main text in the scene content
  textElement.innerHTML = textNode.text;
  //Change image src specified for the scene
  imageElement.src = textNode.img;
  //Show the secondary text, if there is none hides subtext div
  if (textNode.subtext === undefined ) {
    subTextElement.style.visibility = "hidden"
  } else {
    subTextElement.style.visibility = "visible"
    subTextElement.innerHTML = textNode.subtext;
  }

  //Shows the link1 and 2 nodes, if there are any, if not hides the divs
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

  //Shows the Fast Forward button on the main page, for bugfixing (ff scene is hardcoded on the html div)
 (textNode.ff === undefined ) ? ffButtonElement.style.visibility = "hidden": ffButtonElement.style.visibility = "visible"

  //Removes the buttons that don't have any options (min v 1 and max 4 buttons)
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  //Loop on button options, changing text and number of options depending on the scene
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

//Fast forward to scene function for debugging, scene number hardcoded in HTML
function fastForward(scene) {
  showTextNode(scene);
  saveNode()
}

//Shows options depending on the required state
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

//Loads the next scene and text, -1 for game over
function selectOption(option) {
  const nextTextNodeId = option.nextText
  state = Object.assign(state, option.setState)

  if (nextTextNodeId < 1) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

//MAIN STORY SCRIPT.
// Text for main text, options for buttons, img for src.
// Subtext, link1 and link2 are optional.
// Ff true to add skip scene arrows.
const textNodes = [
  {
    id:1,
    img: 'img/logic.jpg',
    ff: true,
    text: "<h2>Welcome!</h2><p>Before we start, have you completed the survey on the link below? <br>It will only take a few minutes, and it will help us with our research.</p>",
    subtext: "<p>The link will open in a new window. <br>Please <strong>do NOT refresh or leave this page</strong> while you play, or you will have to start all over again.</p>",
    link1: "[Insert link to survey here]",
    link2: "",
    options: [
      {
        text: "Let's do this! Start the game.",
        nextText: 2,
      },
    ]
  },
  {
    id:2,
    img: 'img/people.jpg',
    text: "<p>Information is made by people, and all people are flawed, imperfect beings. <br> " +
      "Therefore, all information is flawed and imperfect.</p>",
    options: [
      {
        text: "That sounds...logical.",
        //Sets state
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
        //Only shows this option if the required state has been saved
        requiredState: (currentState) => currentState.notnew,
        nextText: 7,
      }
    ]
  },
  {
    id:3,
    img: 'img/makes_sense.jpg',
    text: "<p>So, if all information is flawed, that means that all information is equally unreliable.</p>",
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
    text: "<p>Just joking. You didn't think I was being serious, did you? <br><br> Of course, all information has some sort of bias, but that doesn't mean all information is created equal.<br> <span class='highlight'>Certain sources are much more reliable than others.</span></p>",
    options: [
      {
        text: "Go on, I'm listening.",
        nextText: 5,
      },
      {
        text: "Everything is fake news! \n It's all a plot by the liberal media, the reptilians, and the Illuminati.",
        requiredState: (currentState) => currentState.emotional,
        setState: { conspiratorial: true, emotional: true },
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
    img: 'img/doge.jpg',
    text: "<p>Unfortunately, on the Internet there is no magic recipe to tell fact from fiction, <br>or what is a half-truth put out there just to confuse you.<br><br>" +
      "At the end of the day, <span class='highlight'> the capacity to filter out the noise is up to <i>you</i>.</span></p>",
    options: [
      {
        text: "Come on, just tell me what to think!",
        setState: { lazy: true },
        nextText: 8,
      },
      {
        text: "Nice try, but I can tell a Deep State goon when I see one. \n You just want to impose your liberal agenda on me.",
        requiredState: (currentState) => currentState.conspiratorial,
        setState: { emotional: true },
        nextText: 6,
      },
      {
        text: "So how do I do this?",
        setState: { emotional: true },
        nextText: 7,
      },
    ]
  },
  {
    id:6,
    img: 'img/woman-cat.jpg',
    text: "<p>Come on now.<br> This game might be just what you need, if you would only let me ruffle your tinfoil hat.</p>",
    setState: { notnew: true },
    subtext: "<p>You may leave the game anytime just by closing this window.</p><br>" +
      "<a href='http://www.google.com'>Take me to Google</a>",
    options: [
      {
        text: "OK, fine. Let's do this your way. Let's start again.",
        nextText: 2,
      },
      ]
  },
  {
    id:7,
    img: 'img/fact-checking.jpg',
    text: "<p>We're going to discuss a few strategies to help you master your fact-checking and logical skills when looking at information online.</p>",
    options: [
      {
        text: "Yes, please!",
        nextText: 9,
      },
      {
        text: "Uh-huh",
        nextText: 9,
      },
    ]
  },
  {
    id:8,
    img: 'img/fact-checking.jpg',
    text: "<p>Well, I can't tell you what to think! <br> But I CAN show you a few strategies to help you master your fact-checking and logical skills when looking at information online.</p>",
    options: [
      {
        text: "Yes, all right. Show me.",
        nextText: 9,
      },
    ]
  },
  {
    id:9,
    img: 'img/truth_lies.jpg',
    text: "<h2>What would you like to know?</h2>",
    setState: { notnew: true },
    subtext: "<p>Next time you play, you may skip the introduction and start from this page.</p>",
    options: [
      {
        text: "I want to know who is telling the truth",
        nextText: 10,
      },
      {
        text: "I want to know who is lying",
        nextText: 100,
      },
    ]
  },
  {
    id:10,
    img: 'img/dad_covid.png',
    text: "<h2>I just got this message from my dad. <br> Did you know there is a study that says that the new COVID-19 vaccine doesn't work?</h2>",
    subtext:"<div>You may open the link above <a href='https://cutt.ly/9hOZSFv' target='_blank'>here</a></div>",
    options: [
      {
        text: "Well, it doesn't surprise me. I mean, the vaccine is very new after all",
        nextText: 11,
      },
      {
        text: "Doesn't it? Where did this come from?",
        setState: { doubtful: true },
        nextText: 11,
      },
      {
        text: "Of course it doesn't, COVID is a hoax.",
        setState: { conspiratorial: true },
        nextText: 11,
      },
    ]
  },
  {
    id:11,
    img: 'img/dad_covid.png',
    text: "<h2>I mean, I didn't open the link, but his message pretty much sums it up. " +
      "<br>There's no way I'm getting this vaccine, it's going to do more harm than good.</h2>",
    subtext:"<div>You may open the link <a href='https://cutt.ly/9hOZSFv' target='_blank'>here</a></div>",
    options: [
      {
        text: "So you think this message is true just because your dad forwarded it?",
        nextText: 12,
      },
      {
        text: "Well, if you checked you would see that the study doesn't actually say that",
        setState: { logical: true },
        nextText: 22,
      },
      {
        text: "It's common sense man. This vaccine has been rushed into the market, it's all a sham to make money",
        nextText: 12,
      },
    ]
  },
  {
    id:12,
    img: 'img/dad_covid.png',
    text: "<h2>Actually, my dad also says that common sense is the least common of all senses. " +
      "<br><br> Perhaps I should open that link after all and read what it says...</h2>",
    subtext:"<div>You may open the link <a href='https://cutt.ly/9hOZSFv' target='_blank'>here</a></div>",
    options: [
      {
        text: "Please do",
        nextText: 13,
      },
      {
        text: "Wait! It could be a virus! I think we've established your dad cannot be trusted",
        nextText: 13,
      },
      {
        text: "Open it, it doesn't really matter anyway.",
        requiredState: (currentState) => currentState.conspiratorial,
        nextText: 13,
      },
    ]
  },
  {
    id:13,
    img: 'img/covid_news.png',
    text: "<h2>Ah. So what the article actually says is that the COVID vaccines could <i>eventually</i> become ineffective once the virus gets used to them.</h2>",
    options: [
      {
        text: "But that doesn't mean that they are ineffective, especially now.",
        requiredState: (currentState) => currentState.logical,
        nextText: 22,
      },
      {
        text: "So, your dad's been lying?",
        nextText: 14,
      },
    ]
  },
  {
    id:14,
    img: 'img/covid_news.png',
    text: "<h2>Hey! My dad's not lying. One of his friends sent him this on Whatsapp and he shared it because he cares deeply about Covid.</h2>",
    options: [
      {
        text: "I'm sure he means well, but you have to admit that the message is super misleading.",
        nextText: 22,
      },
      {
        text: "Who cares if the message is inaccurate? Vaccines are evil, that's the truth.",
        requiredState: (currentState) => currentState.conspiratorial,
        nextText: 15,
      },
    ]
  },
  {
    id:15,
    img: 'img/covid_news.png',
    text: "<h2>So, in order to find the truth we need to say things that aren't true? That makes no sense.</h2>",
    options: [
      {
        text: "All I'm saying is that I think vaccines are evil, " +
          "so I will support anything that vaguely reaffirms by own beliefs and prejudices, even when it's a blatant lie.",
        nextText: 16,
      },
      {
        text: "Well, if you put it that way...no, I guess not.",
        nextText: 22,
      },
    ]
  },
  {
    id:16,
    img: 'img/covid_news.png',
    text: "<h2>So, you will choose to believe a lie just because it's convenient to reaffirm your prejudices?</h2>",
    options: [
      {
        text: "I just don't want to be wrong! I want to win!",
        nextText: 17,
      },
      {
        text: "I was just joking. Of course, being deceitful on purpose doesn't really help anybody.",
        nextText: 22,
      },
    ]
  },
  {
    id:17,
    img: 'img/covid_news.png',
    text: "<h2>Well, by actively choosing to believe lies, no one really wins, now do they?</h2>",
    options: [
      {
        text: "I guess not",
        nextText: 22,
      },
      {
        text: "OK whatever, let's change the subject",
        nextText: 22,
      },
    ]
  },
  {
    id:22, //FROM 11-B
    img: 'img/covid_news.png',
    text: "<h2>Right, so, the message my dad sent was a bit dubious. Forget about that part. <br> " +
      "But the study in the link seems pretty legit, right?</h2>",
    options: [
      {
        text: "That's actually a good question. Who is behind this information?",
        nextText: 10,
      },
      {
        text: "I will never trust anything your dad says, and neither should you.",
        nextText: 10,
      },
    ]
  }
]


//Starts game
startGame();
