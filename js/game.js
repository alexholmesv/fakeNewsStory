const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
const imageElement = document.getElementById('image');
const subTextElement = document.getElementById('subtext');
const ffButtonElement = document.getElementById('ff-button');
const surveyLink = document.getElementById('survey-link');
const startButton = document.getElementById('start-btn');
const logicBadgeElement = document.getElementById("logic-badge");
const scepticBadgeElement = document.getElementById("sceptic-badge");
const emotionBadgeElement = document.getElementById("emotion-badge");
const gameOverBully = document.getElementById("game-over-bully")
const gameOverConspiracy = document.getElementById("game-over-conspiracy")
const statsModal = document.getElementById("stats-modal")
const badgeContainer = document.getElementById("badge-box");

// ACTIVATE TO SHOW SCORES, MUST CHANGE FUNCTIONS BELOW AND ADD HTML BOXES
//const logicElement = document.getElementById('logic-scorebox');
//const emotionElement = document.getElementById('emotion-scorebox');
//const scepticElement = document.getElementById('sceptic-scorebox');

let state = {}
let logic = 0
let emotion = 0
let sceptic = 0

function startGame() {
  state = {}
  logic = 0
  emotion = 0
  sceptic = 0
  showTextNode(1)
}

//Add date to header
const months = ['January','February','March','April','May','June','July',
  'August','September','October','November','December'];
const tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));
document.getElementById("spanDate").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear();

// Get the About Us modal
function aboutUs() {
  let modal = document.getElementById("about-us-modal");
// Get the button that opens the modal
  let btn = document.getElementById("about-us");
// Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
    modal.classList.add("mystyle");
  }
// When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
// When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}

function lateralReading() {
  let lateralReadingModal = document.getElementById("lat-reading-modal")
  lateralReadingModal.style.display = "block";
  let span = document.getElementsByClassName("close")
  span.onclick = function() {
    lateralReadingModal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target === lateralReadingModal) {
      lateralReadingModal.style.display = "none";
    }
  }
  showTextNode(17)
}

function quit() {
  window.open("http://www.google.com");
}

function test() {
  console.log("test")
}

function replay(){
  gameOverBully.style.display = "none"
  gameOverConspiracy.style.display = "none"
  badgeContainer.style.display = "none";
  emotion = 3
  logic = 3
  sceptic = 3
  showTextNode(2)
}

function showPoints() {
  badgeContainer.style.display = "flex";
}

function characterSelect() {
  statsModal.style.display = "none"
  showPoints();
  showTextNode(9)
}

function bullyGameOver() {
  console.log("game over")
  state = { notnew: true }
  emotion = 3
  gameOverBully.style.display = "block";
}

function conspiracyGameOver() {
  console.log("game over")
  state = { notnew: true }
  sceptic = 3
  gameOverConspiracy.style.display = "block";
}

function showStats() {
  let logicalSpan = document.getElementById("logical-span")
  let emotionalSpan = document.getElementById("emotional-span")
  let scepticalSpan = document.getElementById("sceptical-span")
  statsModal.style.display = "block"

  if (logic >= 3) {
    logicalSpan.innerText = "very logical. That's great, but remember that people don't respond well to coldness."
  } else if (logic === 2)
    logicalSpan.innerText = "quite logical."
  else {
    logicalSpan.innerText = "not very logical. You should make an effort to think things through!"
  }

  if (emotion >= 3) {
    emotionalSpan.innerText = "very polite."
  } else if (emotion === 2)
    emotionalSpan.innerText = "quite polite."
  else {
    emotionalSpan.innerText = "not very polite. Watch  out for being a bully."
  }

  if (sceptic >= 3) {
    scepticalSpan.innerText = "very sceptical. Watch out for becoming a conspiracy theorist!"
  } else if (sceptic === 2)
    scepticalSpan.innerText = "quite sceptical. It's good to stay critical of the world around you."
  else {
    scepticalSpan.innerText = "a bit gullible. Make sure you don't fall for lies too easily."
  }
}

function googlePee() {
  window.open("https://www.google.com/search?rlz=1C5CHFA_enES922ES923&biw=1440&bih=702&sxsrf=ALeKk00U0GXtT-_kmVFrjLh3WjeiY40vBA%3A1614158978781&ei=ghw2YJmJL9LWgQbmxqDQAw&q=men+peeing+standing+up+is+bad+for+you&oq=men+peeing+standing+up+is+bad+for+you&gs_lcp=Cgdnd3Mtd2l6EAM6BAgjECc6BQgAEJECOgIIADoICC4QxwEQowI6BAguEEM6BAgAEEM6AgguOgUIABDLAToHCAAQhwIQFDoFCAAQhgNQgegLWNuODGDFkAxoAHACeACAAc4CiAGnOJIBCDAuMjkuOC4xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz&ved=0ahUKEwiZ0qnkmoLvAhVSa8AKHWYjCDoQ4dUDCA0&uact=5");
}


//Show text and images within the container
function showTextNode(textNodeIndex) {
  //Get the text node number
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  //Show the main text in the scene content
  textElement.innerHTML = textNode.text;
  //Change image src specified for the scene
  imageElement.src = textNode.img;
  //Shows the current scores
  // logicElement.innerHTML = "Logic: " + logic
  // emotionElement.innerHTML = "Emotion: " + emotion
  // scepticElement.innerHTML = "Scepticism: " + sceptic
  //Show the secondary text, if there is none hides subtext div
  if (textNode.subtext === undefined ) {
    subTextElement.style.display = "none"
  } else {
    subTextElement.style.display = "block"
    subTextElement.innerHTML = textNode.subtext;
  }

  //Changes icon colours for category points (max 3 points) and game over when they reach -1
  if (logic >= 3) {
    logicBadgeElement.src = "img/logic_logo_green.png";
    logic = 3;
  } else if (logic >0 && logic <=2) {
      logicBadgeElement.src = "img/logic_logo_yellow.png";
  } else {
    logicBadgeElement.src = "img/logic_logo_red.png";
  }

  if (emotion >= 3) {
    emotionBadgeElement.src = "img/empathy_logo_green.png";
    emotion = 3;
  } else if (emotion >0 && emotion <=2) {
    emotionBadgeElement.src = "img/empathy_logo_yellow.png"
  } else if (emotion === 0) {
    emotionBadgeElement.src = "img/empathy_logo_red.png"
  } else {
    bullyGameOver()
  }


  if (sceptic >= 3) {
    scepticBadgeElement.src = "img/sceptic_logo_green.png";
    sceptic = 3;
  } else if (sceptic > 0 && logic <=2) {
    scepticBadgeElement.src = "img/sceptic_logo_yellow.png"
  } else if (sceptic === 0) {
    scepticBadgeElement.src = "img/sceptic_logo_red.png"
  } else {
    conspiracyGameOver()
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
      button.innerHTML = option.text
      button.addEventListener("click", () => addLogicPoints(option.logicValue))
      button.addEventListener("click", () => addEmotionPoints(option.emotionValue))
      button.addEventListener("click", () => addScepticPoints(option.scepticValue))
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
      //change button type and color
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
}

//Shows options depending on the required state
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

//Add Logic points
function addLogicPoints(points){
  parseInt(points)
  logic += points
}

//Add Emotion points
function addEmotionPoints(points){
  parseInt(points)
  emotion += points
}

//Add Sceptic points
function addScepticPoints(points){
  parseInt(points)
  sceptic += points
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
    text: "<h2>Welcome!</h2><p>Before we start, would you please complete <a id='survey-link' href='https://forms.gle/xswyWcP6XnXf3MpN9'>this survey</a>? <br><br>It will only take a few minutes, and it will help us with our research. You will be asked to do this survey one more time at the end of the game.</p>",
    subtext: "<p'>The link will open in a new window. <br>Please <strong>do NOT refresh or leave this page</strong> while you play, or you will have to start all over again.</p><br>" +
      "<a href='https://forms.gle/xswyWcP6XnXf3MpN9' target='_blank'>Click here to access the survey</a>",
    options: [
      {
        text: "<p id='start-btn' class='first-btn'>I've completed the survey!<br><span>Start the game</span></h2>",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 2,
      },
    ]
  },
  {
    id:2,
    img: 'img/people.jpg',
    text: "<h2>Information is made by people, and all people are flawed, imperfect beings. <br><br> " +
      "Therefore, all information is flawed and imperfect.</h2>",
    options: [
      {
        text: "That sounds...logical.",
        //Sets state
        setState: { logical: true },
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        optionValue: 0,
        nextText: 3,
      },
      {
        text: "<div id='about-us'>Sure, I hate people too.</div>",
        setState: { emotional: true },
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 3,
      },
      {
        text: "Well, true...but what's your point?",
        setState: { doubtful: true },
        logicValue: 0,
        emotionValue: 1,
        scepticValue: 1,
        nextText: 3,
      },
      {
        text: "<span style='border: none' class='btn quit' onclick='showPoints()'>(SKIP THE INTRO).</span>",
        optionValue: 0,
        //Only shows this option if the required state has been saved
        requiredState: (currentState) => currentState.notnew,
        logicValue: 4,
        emotionValue: 4,
        scepticValue: 4,
        nextText: 9,
      }
    ]
  },
  {
    id:3,
    img: 'img/makes_sense.jpg',
    text: "<h2>So, if all information is flawed, that means that all information is equally unreliable.</h2>",
    options: [
      {
        text: "Non-sequitur, my friend.",
        requiredState: (currentState) => currentState.logical,
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        setState: { logical: false },
        nextText: 4,
      },
      {
        text: "That's right! Trust no-one!",
        setState: { doubtful: true },
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 4,
      },
      {
        text: "Wait, what? No.",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 4,
      },
    ]
  },
  {
    id:4,
    img: 'img/makes_sense.jpg',
    text: "<p>Just joking. You didn't think I was being serious, did you? <br>Of course, all information has some sort of bias, but that doesn't mean all information is created equal.<br> <span class='highlight'>Certain sources are much more reliable than others.</span></p>",
    options: [
      {
        text: "Go on, I'm listening.",
        logicValue: 0,
        emotionValue: 1,
        scepticValue: 0,
        nextText: 5,
      },
      {
        text: "Everything is fake news! \n It's all a plot by the liberal media, the reptilians, and the Illuminati.",
        requiredState: (currentState) => currentState.emotional,
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        setState: { conspiratorial: true, emotional: true },
        nextText: 5,
      },
      {
        text: "But how do I know who is telling the truth?",
        optionValue: 0,
        requiredState: (currentState) => currentState.doubtful,
        setState: { emotional: false },
        logicValue: 0,
        emotionValue: 1,
        scepticValue: 1,
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
        optionValue: 0,
        setState: { lazy: true },
        logicValue: -1,
        emotionValue: 0,
        scepticValue: -1,
        nextText: 8,
      },
      {
        text: "Nice try, but I can tell a Deep State goon when I see one. \n You just want to impose your liberal agenda on me.",
        requiredState: (currentState) => currentState.conspiratorial,
        setState: { emotional: true },
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 6,
      },
      {
        text: "So how do I do this?",
        setState: { emotional: true },
        logicValue: 0,
        emotionValue: 1,
        scepticValue: 0,
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
        logicValue: -1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 2,
      },
    ]
  },
  {
    id:7,
    img: 'img/fact-checking.jpg',
    text: "<p>We're going to discuss a few strategies to help you master your fact-checking skills when looking at information online.</p>",
    options: [
      {
        text: "<div onclick='showStats()'>Yes, please!</div> ",
        logicValue: 0,
        emotionValue: 1,
        scepticValue: 0,
        nextText: 9,
      },
      {
        text: "<div onclick='showStats()'>Whatever.</div> ",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 9,
      },
    ]
  },
  {
    id:8,
    img: 'img/fact-checking.jpg',
    text: "<p>Well, I can't tell you what to think! <br> But I CAN show you a few strategies to help you master your fact-checking skills when looking at information online.</p>",
    options: [
      {
        text: "<div onclick='showStats()'>Yes, all right. Show me.</div> ",
        logicValue: 1,
        emotionValue: 1,
        scepticValue: 1,
        nextText: 9,
      },
    ]
  },
  {
    id:9,
    img: 'img/gender.jpg',
    text: "<p>Before we begin, who do you want to be today?</p>",
    options: [
      {
        text: "I want to be male",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 10,
      },
      {
        text: "I want to be female",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 10,
      },
      {
        text: "I want to be a mystery",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 10,
      },
    ]
  },

//  PEEING ROUTE - STARTS AT 10

  {
    id:10,
    img: 'img/pee.png',
    text: "<p>Ok, you might want to sit down for this revelation...</p><h2><strong>Did you know that science says that peeing standing up is bad for your health?</strong></h2><p>Men should sit down to pee.</p>",
    options: [
      {
        text: "That's ridiculous",
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 11,
      },
      {
        text: "Science says that?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 11,
      },
      {
        text: "Who told you this?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 11,
      },
    ]
  },
  {
    id:11,
    img: 'img/jpg',
    text: "<p>If you don't believe me, just google it. It's all there, I've done my research.</p>",
    subtext: "<a href='https://www.google.com/search?rlz=1C5CHFA_enES922ES923&biw=1440&bih=702&sxsrf=ALeKk00U0GXtT-_kmVFrjLh3WjeiY40vBA%3A1614158978781&ei=ghw2YJmJL9LWgQbmxqDQAw&q=men+peeing+standing+up+is+bad+for+you&oq=men+peeing+standing+up+is+bad+for+you&gs_lcp=Cgdnd3Mtd2l6EAM6BAgjECc6BQgAEJECOgIIADoICC4QxwEQowI6BAguEEM6BAgAEEM6AgguOgUIABDLAToHCAAQhwIQFDoFCAAQhgNQgegLWNuODGDFkAxoAHACeACAAc4CiAGnOJIBCDAuMjkuOC4xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz&ved=0ahUKEwiZ0qnkmoLvAhVSa8AKHWYjCDoQ4dUDCA0&uact=5' target='_blank'>(Click here to google this. The page will open in a new tab).</a>",
    options: [
      {
        text: "Ok, let's see what we have here...",
        logicValue: 0,
        emotionValue: 1,
        scepticValue: 0,
        nextText: 12,
      },
      {
        text: "You wouldn't know research if it hit you in the face.",
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 12,
      },
    ]
  },
  {
    id:12,
    img: 'img/jpg',
    text: "<p>See? Peeing standing up is bad for your health.</p>",
    options: [
      //BIG BRANCH - GULLIBLE SET STRAIGHT
      {
        text: "Wow! I'm never peeing standing up again!",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: -1,
        nextText: 13,
      },
      //BRANCH 2 - CONFIRM SUSPICION
      {
        text: "That's not accurate though, is it?",
        setState: { suspicious: true },
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 15,
      },
      {
        text: "You're an idiot.",
        setState: { suspicious: true },
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 15,
      },
    ]
  },
  {
    id:13,
    img: 'img/jpg',
    text: "<p>We need to tell more people about this. We have to share this information to save lives!</p>",
    options: [
      {
        text: "I'm on it! What link in particular is it we need to share?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: -1,
        nextText: 14,
      },
      {
        //GOES BACK TO CONFIRM SUSPICION BRANCH
        text: "But we're sure about this aren't we?",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 15,
      },
    ]
  },
  {
    id:14,
    img: 'img/jpg',
    text: "<p>Well I don't know, you saw all those google results. Pick one.</p>",
    options: [
      {
        text: "Which one says it's bad for you, again?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 15,
      },
      {
        text: "I need something with a bit more substance. We're saving lives here.",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 15,
      },
    ]
  },
  {
    id:15,
    img: 'img/jpg',
    text: "<p>What do you mean? It's right there, it says it's good for men's health to sit down to pee.</p>",
    options: [
      {
        text: "But that doesn't mean peeing standing up is BAD for you",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 16,
      },
      {
        text: "You said science. Where is the science? These are all opinion pieces.",
        requiredState: (currentState) => currentState.suspicious,
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 16,
      },
      {
        text: "The fact that it's more hygienic doesn't mean it's bad for your health",
        requiredState: (currentState) => currentState.suspicious,
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 16,
      },
    ]
  },
  {
    id:16,
    img: 'img/jpg',
    text: "<p>What do you mean? There are STUDIES. SCIENTIFIC STUDIES. Science says peeing sitting down is better for you. So that's what we should do.</p>",
    options: [
      {
        text: "Right, I think I see what you're getting at.",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 17,
      },
      {
        text: "<div onclick='googlePee()'> Give me a second [look at the Google search results once again].</div>",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 16,
      },
      {
        text: "But most of these are just opinions, not actual facts. You said there are studies.",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 17,
      },
    ]
  },
  {
    id:17,
    img: 'img/jpg',
    text: "<p>These articles are all based on studies.</p>",
    options: [
      {
        text: "How many links did you click when you googled?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 18,
      },
      {
        text: "You're wrong. Look at the search results.",
        logicValue: 0,
        emotionValue: 1,
        scepticValue: 0,
        nextText: 23,
      },
    ]
  },
  {
    id:18,
    img: 'img/jpg',
    text: "<p>Well...I didn't click any of the links, because Google gives you a neat summary right at the top. It's very handy.</p>",
    options: [
      {
        text: "Yeah, it's super handy. I do the same.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 23,
      },
      {
        text: "Humour me, click on the first link.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 19,
      },
      {
        text: "Why don't you scroll down a bit to see what else there is?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 23,
      },
    ]
  },
  {
    id:19,
    img: 'img/fatherly_text.png',
    text: "<p>Ok, I'll click on the link. Let's see...</p>",
    options: [
      {
        text: "So why do you think peeing standing up is bad for you?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 18,
      },
      {
        text: "Where are the studies, bub?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 18,
      },
    ]
  },
  {
    id:20,
    img: 'img/fatherly_text.png',
    text: "<p>Ok, it takes me here. Let's see...</p>",
    options: [
      {
        text: "So, why do you believe peeing standing up is bad for your health?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 21,
      },
      {
        text: "Where are the studies, bub?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 18,
      },
    ]
  },
  {
    id:21,
    img: 'img/fatherly_headline.png',
    text: "<p>But...but...read the title.</p>",
    options: [
      {
        text: "Yes, it <em>might</em> be healthier for <em>some</em> men. Not all men.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 22,
      },
      {
        text: "But you promised science. I don't see science. This doesn't point to any papers.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 22,
      },
    ]
  },
  {
    id:22,
    img: 'img/fatherly_headline.png',
    text: "<p>I...guess that's true. Anyway, I'm sure we can find a paper about this. Let's go back to Google.</p>",
    options: [
      {
        text: "<div onclick='googlePee()'>[Look at the Google search results again].</div>",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 23,
      },
    ]
  },
  {
    id:23,
    img: 'img/google_scrolldown.png',
    text: "<p>Ok, scrolling down the results. There are two articles from Men's Health, and another one from a site called Thrillist. And they all say that men should pee sitting down! Should I click on them?</p>",
    options: [
      {
        text: "Hold on, keep scrolling.",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 24,
      },
      {
        text: "Yes, all amazing sources, I know. But let's try to find an actual paper.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 24,
      },
    ]
  },
  {
    id:24,
    img: 'img/google_papers.png',
    text: "<p>Ok, here's one that looks like a paper!</p>",
    options: [
      {
        text: "Yes, that's just what we need! Click on that one.",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 25,
      },
      {
        text: "Finally! I'm going to show you why you're wrong, with SCIENCE.",
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 25,
      },
    ]
  },
  {
    id:25,
    img: 'img/pee_paper.png',
    text: "<p>Ok, here's the paper. It's a little confusing to be honest, I don't really understand everything. </p>",
    options: [
      {
        text: "Yeah, I hear you, academics are the worst. It's like they can't write like normal people.",
        logicValue: 1,
        emotionValue: 1,
        scepticValue: 0,
        nextText: 26,
      },
      {
        text: "Come on, it's not that hard, just read the conclusion.",
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 27,
      },
      {
        text: "That's because science is useless, and scientists are liars.",
        setState: { conspiratorial: true },
        logicValue: 0,
        emotionValue: 0,
        scepticValue: -1,
        nextText: 26,
      },
    ]
  },
  {
    id:26,
    img: 'img/pee_paper.png',
    text: "<p>Yeah, these so-called 'academics' know NOTHING. They're idiots on deep state paychecks.</p>",
    options: [
      {
        text: "Hmm. They should probably learn how to write better. But it doesn't mean they don't know what they're talking about.",
        logicValue: 1,
        emotionValue: 1,
        scepticValue: 0,
        nextText: 26,
      },
      {
        text: "Come on, it's not that hard, just read the conclusion.",
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 27,
      },
      {
        text: "Yeah, you're right. Science means nothing, truth is relative, the world is a conspiracy.",
        requiredState: (currentState) => currentState.conspiratorial,
        logicValue: -1,
        emotionValue: 1,
        scepticValue: -2,
        nextText: 26,
      },
    ]
  },
  {
    id: 27,
    img: 'img/pee_paper.png',
    text: "<p>OK, let me look at the conclusion. <br> Ah. It seems like this is only a problem for men with prostate problems.</p>",
    options: [
      {
        text: "Right! So, peeing sitting down can help people like this, but...",
        logicValue: 1,
        emotionValue: 1,
        scepticValue: 0,
        nextText: 28,
      },
      {
        text: "HAHAHAH EAT DIRT! YOU LOSE! I WIN!",
        logicValue: 0,
        emotionValue: -3,
        scepticValue: 0,
        nextText: 28,
      },
    ],
  },
  {
    id: 28,
    img: 'img/pee_paper.png',
    text: "<p>But it doesn't mean it's better for their health. OK. Got it. Still...</p>",
    options: [
      {
        text: "Aren't you convinced?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 29,
      },
      {
        text: "Still what? ",
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 27,
      },
      {
        text: "[Groan loudly]. This is like talking to a brick wall!",
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 27,
      },
    ],
  },
]




//Starts game
startGame();
