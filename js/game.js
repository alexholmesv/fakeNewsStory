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
const headerMessage = document.getElementById("header-message");
const totalScore = document.getElementById("total-score");
const clickRestraintModal = document.getElementById("click-restraint-modal");
const checklistingModal = document.getElementById("checklisting-modal");
const keywordValue = document.getElementById("keyword");
const keywordButton = document.getElementById("keyword-btn");

// ACTIVATE TO SHOW SCORES, MUST CHANGE FUNCTIONS BELOW AND ADD HTML BOXES
//const logicElement = document.getElementById('logic-scorebox');
//const emotionElement = document.getElementById('emotion-scorebox');
//const scepticElement = document.getElementById('sceptic-scorebox');

let state = {}
let logic = 0;
let emotion = 0;
let sceptic = 0;
let scoreTally = logic + emotion + sceptic;

function startGame() {
  state = {}
  logic = 0
  emotion = 0
  sceptic = 0
  showTextNode(1)
}

function getKeywordValue() {
  totalScore.innerText = "Keyword:" + " " + keywordValue.value;
  keywordValue.style.display = "none";
  keywordButton.style.display = "none";
}

//Add date to header
const months = ['January','February','March','April','May','June','July',
  'August','September','October','November','December'];
const tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));
document.getElementById("spanDate").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear();

//Random header message
function randomHeader() {
  randomMessage = [
    "Now with fewer fake news!",
    "Thou shalt not lie",
    "Fun with facts!",
    "EXTRA! EXTRA!",
    "Forecasters call for weather on Monday",
    "Amphibious pitcher makes debut",
    "Cows lose their jobs as milk prices drop",
    "Miracle cure kills fifth patient",
    "Man Accused of Killing Lawyer Receives a New Attorney",
    "State population to double by 2040, babies to blame"
  ]
  const randomIndex = Math.round(Math.random*randomMessage.length);
  headerMessage.innerText = randomMessage[Math.floor(Math.random() * randomMessage.length)]
}

//Show keyword on price box
if (keywordValue.value) {totalScore.innerText = keywordValue.value; }


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

function lateralReadingBadge() {
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

function clickRestraintBadge() {
  if (emotion >= 1) {
    clickRestraintModal.style.display = "block";
  } else {
    showTextNode(34)
  }
}

function checklistingBadge() {
  if (emotion >= 1) {
    checklistingModal.style.display = "block";
  } else {
    showTextNode(34)
  }
}

function closeCRTrophy() {
  clickRestraintModal.style.display = "none";
}

function closeChecklistingTrophy() {
  checklistingModal.style.display = "none";
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
    logicalSpan.innerText = "very logical."
  } else if (logic === 2)
    logicalSpan.innerText = "quite logical."
  else {
    logicalSpan.innerText = "not very logical."
  }

  if (emotion >= 3) {
    emotionalSpan.innerText = "very polite."
  } else if (emotion === 2)
    emotionalSpan.innerText = "quite polite."
  else {
    emotionalSpan.innerText = "not very polite."
  }

  if (sceptic >= 3) {
    scepticalSpan.innerText = "very sceptical."
  } else if (sceptic === 2)
    scepticalSpan.innerText = "quite sceptical."
  else {
    scepticalSpan.innerText = "a bit gullible."
  }
}

function googlePee() {
  window.open("https://www.google.com/search?rlz=1C5CHFA_enES922ES923&biw=1440&bih=702&sxsrf=ALeKk00U0GXtT-_kmVFrjLh3WjeiY40vBA%3A1614158978781&ei=ghw2YJmJL9LWgQbmxqDQAw&q=men+peeing+standing+up+is+bad+for+you&oq=men+peeing+standing+up+is+bad+for+you&gs_lcp=Cgdnd3Mtd2l6EAM6BAgjECc6BQgAEJECOgIIADoICC4QxwEQowI6BAguEEM6BAgAEEM6AgguOgUIABDLAToHCAAQhwIQFDoFCAAQhgNQgegLWNuODGDFkAxoAHACeACAAc4CiAGnOJIBCDAuMjkuOC4xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz&ved=0ahUKEwiZ0qnkmoLvAhVSa8AKHWYjCDoQ4dUDCA0&uact=5");
}

function endSurvey(){
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSf2VzRGPp2QTN4Jy7PA7p_v95xemIG8IGCEg58r63oeeTj1rw/viewform?usp=sf_link")
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
  } else if (sceptic > 0 && sceptic <=2) {
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
  logic = 2;
  emotion = 2;
  sceptic = 2;
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

function activateButton() {
  console.log("clicked");
  checkbox = document.getElementById("checkbox");
  buttons = document.getElementById("option-buttons");
  buttons.style.pointerEvents = "auto";
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
    text: "<p>Before we start, would you please complete <a id='survey-link' target='_blank' href='https://forms.gle/xswyWcP6XnXf3MpN9'>this survey</a>? " +
      "<br><br>It will only take a couple of minutes, and it will greatly help us with our research. You will be asked to do this survey once more at the end of the game. It's super important that you do both!</p>"+
      "<input type='checkbox' onclick='activateButton()'>&nbsp <strong>I've completed the survey.</strong></input>",
    subtext: "<p'>All in-game links will open in a new tab. <br>Please <strong>do NOT refresh or leave this page</strong> while you play, or you will have to start all over again.</p>",
    options: [
      {
        text: "<p id='start-btn' class='first-btn'><span>Start the game</span></h2>",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 200,
      },
    ]
  },
  {
    id:200,
    img: 'img/logic.jpg',
    ff: true,
    text: "<h1>Welcome to Whaddafact!</h1><p>This game takes the form of a conversation on how to spot fake news. <br>Depending on your answers and your score, you may win trophies for different skills. See if you can get all three!</p>",
    subtext: "<p>After a brief introduction, " +
      "you will see three indicators for logic, empathy and scepticism. If you lose all your points in any of these categories, you will lose and have to start over.</p>" +
      "<div style='display: inline-flex; gap:20px'><img src='img/logic_logo_green.png' class='badge-img'> <img src='img/empathy_logo_green.png' class='badge-img' alt=''><img src='img/sceptic_logo_green.png' class='badge-img' alt=''></div>",
    options: [
      {
        text: "<p id='start-btn' class='first-btn'><span>Continue</span></h2>",
        logicValue: 1,
        emotionValue: 1,
        scepticValue: 1,
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
        emotionValue: -1,
        scepticValue: 0,
        nextText: 3,
      },
      {
        text: "Well, true...but what's your point?",
        setState: { doubtful: true },
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 3,
      },
      {
        text: "<span style='border: none' class='btn quit' onclick='showPoints()'>(SKIP THE INTRO).</span>",
        optionValue: 0,
        //Only shows this option if the required state has been saved
        requiredState: (currentState) => currentState.notnew,
        logicValue: 3,
        emotionValue: 3,
        scepticValue: 3,
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
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 4,
      },
    ]
  },
  {
    id:4,
    img: 'img/makes_sense.jpg',
    text: "<p>Just joking!<br>Of course all information has some sort of bias, but that doesn't mean all information is created equal.<br> <span class='highlight'>Certain sources are much more reliable than others.</span></p>",
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
        scepticValue: -1,
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
      {
        text: "This is stupid.",
        optionValue: 0,
        requiredState: (currentState) => currentState.doubtful,
        setState: { emotional: false },
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
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
        logicValue: 0,
        emotionValue: 0,
        scepticValue: -1,
        nextText: 8,
      },
      {
        text: "Nice try, but I can tell a Deep State goon when I see one. \n You just want to impose your liberal agenda on me.",
        requiredState: (currentState) => currentState.conspiratorial,
        setState: { emotional: true },
        logicValue: 0,
        emotionValue: 0,
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
        text: "<div onclick='showStats()'>This sounds fun!</div> ",
        logicValue: 0,
        emotionValue: 1,
        scepticValue: 0,
        nextText: 9,
      },
      {
        text: "<div onclick='showStats()'>Whatever, let's get on with this.</div> ",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 9,
      },
      {
        text: "<div onclick='showStats()'>I don't know if I should trust you, but I'm open to your ideas.</div> ",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
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
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 9,
      },
      {
        text: "<div onclick='showStats()'>Yeah, I was just joking. I just want to make sure your statements are valid, that's all.</div> ",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 9,
      },
    ]
  },
  {
    id:9,
    img: 'img/urinals.jpg',
    text: "<p>Before we begin, how do you feel about these objects in this image?</p>",
    options: [
      {
        text: "I use them often.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 10,
      },
      {
        text: "They don't apply to me / I don't use them.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 310,
      },
    ]
  },

//  PEEING ROUTE - STARTS AT 10

  {
    id:10,
    img: 'img/pee.png',
    text: "<h2>Ok, you might want to sit down for this revelation...</h2><h2><strong>Did you know that science says that peeing standing up is bad for your health?</strong></h2><p>Men should sit down to pee.</p>",
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
    subtext: "(All links will open in a new tab)",
    options: [
      {
        text: "Whatever, I trust you.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: -1,
        nextText: 12,
      },
      {
        text: "<div onclick='googlePee()'> [Google the search results].</div>",
        logicValue: 1,
        emotionValue: 1,
        scepticValue: 1,
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

      {
        text: "Wow! I'm never peeing standing up again!",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: -1,
        nextText: 13,
      },

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
        setState: { clickRestraint: true },
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
        nextText: 27,
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
    text: "<p>OK, it doesn't mean it's <em>bad</em> for them. But it's certainly better.</p>",
    options: [
      {
        text: "Why is that?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 29,
      },
      {
        text: "Is there a good source to support that?",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 29,
      },
      {
        text: "[Groan loudly]. This is like talking to a brick wall!",
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 29,
      },
    ],
  },
  {
    id: 29,
    img: 'img/pee_paper.png',
    text: "<p>All the sources agree on one thing: peeing sitting down is more hygienic.</p>",
    options: [
      {
        text: "<div> Let's check <a>[look at the Google search results once more]</a>.</div>",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 400,
      },
      {
        text: "I suppose that's true.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 400,
      },
      {
        text: "Perhaps, but your original statement is still wrong.",
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 31,
      },
    ],
  },
  {
    id: 400,
    img: 'img/pee_paper.png',
    text: "<h2>Should I open those pages too just to check?</h2>",
    options: [
      {
        text: "<div> Yes, let's open all of them in new tabs.</div>",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 401,
      },
      {
        text: "Nah, don't bother. Let's move on.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 31,
      },
    ],
  },

  //Start lateral reading path
  {
    id: 401,
    img: 'img/pee_paper.png',
    text: "<h2>All right, let's see what they all say</h2>",
    options: [
      {
        text: "<div> Yeah, it's a good idea to compare what different sources say.</div>",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 402,
      },
      {
        text: "On second thought, let's not do this anymore.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 30,
      },
    ],
  },
  {
    id: 402,
    img: 'img/pee_paper.png',
    text: "<h2>Well, they all seem to agree that peeing sitting down is more hygienic.</h2>",
    options: [
      {
        text: "<div onclick='lateralReadingBadge()'> It seems to reduce splash back, it makes sense.</div>",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 31,
      },
    ],
  },

  //Come back from lateral reading path
  {
    //CURRENTLY UNUSED
    id: 30,
    img: 'img/pee_paper.png',
    text: "<p>All the sources agree on one thing: peeing sitting down is more hygienic.</p>",
    options: [
      {
        text: "<div onclick='googlePee()'> Let's check [look at the Google search results once again].</div>",
        logicValue: 1,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 30,
      },
      {
        text: "No one likes splashback, I suppose.",
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
  {
    id: 31,
    img: 'img/pee_paper.png',
    text: "<p>So, would it be fair to say that peeing standing up is GOOD for your health?</p>",
    options: [
      {
        text: "Well it depends. Is more hygienic the same as healthy?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 32,
      },
      {
        text: "That's a logical fallacy.",
        logicValue: 1,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 32,
      },
      {
        text: "I see where you're coming from. We could say that's up for debate.",
        logicValue: 1,
        emotionValue: 1,
        scepticValue: 0,
        nextText: 32,
      },
    ],
  },
  {
    id: 32,
    img: 'img/pee_paper.png',
    text: "<p>Well, I'm convinced. Thanks for making me look at the data, I'm going to pee sitting down from now on. You should try it too.</p>",
    options: [
      {
        text: "As long as you know it's not BAD for you...",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 33,
      },
      {
        text: "Whatever, just believe whatever you want.",
        logicValue: 0,
        emotionValue: -1,
        scepticValue: 0,
        nextText: 33,
      },
      {
        text: "I'm glad we had this conversation.",
        logicValue: 0,
        emotionValue: 2,
        scepticValue: 0,
        nextText: 33,
      },
    ],
  },
  {
    id: 33,
    img: 'img/.png',
    text: "<p>What did we do again?</p>",
    options: [
      {
        text: "<div onclick='clickRestraintBadge()'>I asked you not to click on the first Google hit.</div>",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 34,
      },
      {
        text: "Nothing important.",
        logicValue: 0,
        emotionValue: 2,
        scepticValue: 0,
        nextText: 34,
      },
    ],
  },
  {
    id: 34,
    img: 'img/.png',
    text: "<h1>Thank you for playing!</h1>"+"<h2>Try playing another scenario and choosing different options to see if you can get all three trophies!</h2>",
    options: [
      {
        text: "I want to win! Take me to the other scenario!",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 310,
      },
      {
        text: "Nah, I want to finish the game now.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 35,
      },
    ],
  },
  {
    id: 35,
    img: 'img/please.png',
    text: "<h1>Before you leave!</h1><h2>Please complete the initial survey once again. It will only take a minute, and it will greatly help us with our study.</h2>",
    options: [
      {
        text: "<div onclick='endSurvey()'>OK! Take me to the survey.</div>",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 36,
      },
    ],
  },

  //SCENARIO 2

  //NON-BINARY PATH

  {
    id:310,
    img: 'img/dad_covid.png',
    text: "<h2>I just got this message from my dad. <br> Did you know there is a study that says that the new COVID-19 vaccine doesn't work?</h2>",
    subtext:"<div>You may open the link above <a href='https://cutt.ly/9hOZSFv' target='_blank'>here</a></div>",
    options: [
      {
        text: "Well, it doesn't surprise me. I mean, the vaccine is very new after all",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 311,
      },
      {
        text: "What do you mean it doesn't work? Are you sure this information is correct?",
        setState: { doubtful: true },
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 311,
      },
      {
        text: "Of course it doesn't, COVID is a hoax.",
        setState: { conspiratorial: true },
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 311,
      },
    ]
  },
  {
    id:311,
    img: 'img/dad_covid.png',
    text: "<h2>I mean, I didn't open the link, but his message pretty much sums it up. " +
      "<br><br>There's no way I'm getting this vaccine, it's going to do more harm than good.</h2>",
    subtext:"<div>You may open the link <a href='https://cutt.ly/9hOZSFv' target='_blank'>here</a></div>",
    options: [
      {
        text: "So you think this message is true just because your dad forwarded it?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 312,
      },
      {
        text: "Well, if you read the actual study you would see that it doesn't actually say that",
        setState: { logical: true },
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 322,
      },
      {
        text: "It's common sense man. This vaccine has been rushed into the market, it's all a sham to make money",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 312,
      },
    ]
  },
  {
    id:312,
    img: 'img/dad_covid.png',
    text: "<h2>Actually, my dad also says that common sense is the least common of all senses. " +
      "<br><br> Perhaps I should open that link after all and read what it says...</h2>",
    subtext:"<div>You may open the link <a href='https://cutt.ly/9hOZSFv' target='_blank'>here</a></div>",
    options: [
      {
        text: "Please do",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 313,
      },
      {
        text: "Wait! It could be a virus! I think we've established your dad cannot be trusted",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 313,
      },
      {
        text: "Open it, it doesn't really matter anyway.",
        requiredState: (currentState) => currentState.conspiratorial,
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 313,
      },
    ]
  },
  {
    id:313,
    img: 'img/covid_news.png',
    text: "<h2>Ah. So what the article actually says is that the COVID vaccines could <i>eventually</i> become ineffective once the virus gets used to them.</h2>",
    options: [
      {
        text: "But that doesn't mean that they are ineffective, especially now.",
        requiredState: (currentState) => currentState.logical,
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 322,
      },
      {
        text: "So, your dad's been lying?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 314,
      },
    ]
  },
  {
    id:314,
    img: 'img/covid_news.png',
    text: "<h2>Hey! My dad's not lying. One of his friends sent him this on Whatsapp and he shared it because he cares deeply about Covid.</h2>",
    options: [
      {
        text: "I'm sure he means well, but you have to admit that the message is super misleading.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 322,
      },
      {
        text: "Who cares if the message is inaccurate? Vaccines are evil, that's the truth.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        requiredState: (currentState) => currentState.conspiratorial,
        nextText: 315,
      },
    ]
  },
  {
    id:315,
    img: 'img/side_eye.png',
    text: "<h2>So, in order to find the truth we need to say things that aren't true? That makes no sense.</h2>",
    logicValue: 0,
    emotionValue: 0,
    scepticValue: 0,
    options: [
      {
        text: "All I'm saying is that I think vaccines are evil, " +
          "so I will support anything that vaguely reaffirms by own beliefs and prejudices, even when it's a blatant lie.",
        optionValue: -2,
        nextText: 316,
      },
      {
        text: "Well, if you put it that way...no, I guess not.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 322,
      },
    ]
  },
  {
    id:316,
    img: 'img/side_eye.png',
    text: "<h2>So, you will choose to believe a lie just because it's convenient to reaffirm your prejudices?</h2>",
    options: [
      {
        text: "I just don't want to be wrong! I want to win!",
        optionValue: -1,
        nextText: 317,
      },
      {
        text: "I was just joking. Of course, being deceitful on purpose doesn't really help anybody.",
        optionValue: 1,
        nextText: 322,
      },
    ]
  },
  {
    id:317,
    img: 'img/side_eye.png',
    text: "<h2>Well, by actively choosing to believe lies, no one really wins, now do they?</h2>",
    options: [
      {
        text: "I guess not",
        optionValue: 1,
        nextText: 336,
      },
      {
        text: "OK whatever, let's change the subject",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 336,
      },
    ]
  },
  {
    id:322,
    img: 'img/covid_news.png',
    text: "<p>OK, so the message my dad sent on Whatsapp was a bit dubious. <br>Let's forget about that bit. <br> " +
      "However, the study in the link seems pretty legit, right?</p>",
    options: [
      {
        text: "That's actually a good question. Who is behind this information?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 323,
      },
      {
        text: "No one should trust your dad. Ever.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        setState: { hater: true },
        nextText: 337,
      },
    ]
  },
  {
    id:323,  //START BRANCH - STUDY OR NEWS SITE
    img: 'img/covid_news.png',
    text: "<h2>Do you mean the news site or the actual study?</h2>",
    options: [
      {
        text: "I want to know about the news site",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 324,
      },
      {
        text: "I want to know about the study",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 327,
      },
    ]
  },
  {
    id:324,
    img: 'img/about-us.png',
    text: "<p>Well, you can normally see information about a site in their 'About' section.<br>" +
      "If there isn't one you can always search for their name in a search engine.<br>" +
      "You could even do both things</p>",
    subtext: "<div>You may open a new tab and google about Scitech Daily, " +
      "or look at their 'About Us' page <a href='https://scitechdaily.com/about-us/' target='_blank'>here</a>",
    options: [
      {
        text: "I checked their About page and they seem legit. Let's find out more about the study.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 327,
      },
      {
        text: "But what if they're lying?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 325,
      },
    ]
  },
  {
    id:324,
    img: 'img/covid_news.png',
    text: "<h2>I suppose we could always check what <i>other people</i> say about them.</h2>",
    options: [
      {
        text: "That makes sense. We've got to know who they are",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 326,
      },
      {
        text: "And if no one else has anything to say about them?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 325,
      },
    ]
  },
  {
    id:325,
    img: 'img/covid_news.png',
    text: "<h2>Well, if no one's heard of them before, and no one has anything to say about them...</h2>",
    options: [
      {
        text: "...then they're probably not a very authoritative source. Yeah, let's move on to the study.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 327,
      },
      {
        text: "...they're probably aliens.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 326,
      },
    ]
  },
  {
    id:326,
    img: 'img/covid_news.png',
    text: "<h2>What? No man, it means that they're probably not very trustworthy.</h2>",
    options: [
      {
        text: "I know, I was just being funny.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 327,
      },
      {
        text: "If you say so [it's definitely aliens].",
        setState: { aliens : true },
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 327,
      },
    ]
  },
  {
    id:327, //START BRANCH
    img: 'img/pennstate.png',
    text: "<h2>According to this news article, the study was published by Penn State University.</h2>",
    options: [
      {
        text: "Should we look for the original paper?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 328,
      },
      {
        text: "What do other people say about this study?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 329,
      },
      {
        text: "I bet it's all a lie. Aliens are tricky like that.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        requiredState: (currentState) => currentState.aliens,
        nextText: 330,
      },
    ]
  },
  {
    id:328, //FROM 27
    img: 'img/goodidea.gif',
    text: "<h2>That's actually a great strategy. Luckily, the author of this article was kind enough to provide a link to the paper." +
      "<br>It's right there at the bottom of the page.</h2>",
    subtext: "<div>You may open the link <a href='https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3001000' target='_blank'>here</a></div>",
    options: [
      {
        text: "I can only see the abstract, but it says pretty much the same as the article.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 338,
      },
      {
        text: "This paper is boring. Do I really need to read it?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 331,
      },
    ]
  },
  {
    id:329, //FROM 27
    img: 'img/covid_news.png',
    text: "<h2>Checking for other sources could help us know more about this story. " +
      "<br>Let's google something along the lines of 'penn state university + covid + resistance' </h2>",
    subtext: "<div><a href='https://cutt.ly/qhPLptJ' target='_blank'>Click to Google 'penn state university + covid + resistance'</a></div>",
    options: [
      {
        text: "OK, let's Google this",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 333,
      },
    ]
  },
  {
    id:330, //FROM 27
    img: 'img/covid_news.png',
    text: "<h2>ENOUGH WITH THE ALIENS! Seriously. Can we move on?</h2>",
    options: [
      {
        text: "All right, calm down! [Are you sure you're not an alien?]",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 332,
      },
    ]
  },
  {
    id:331, //FROM 27
    img: 'img/covid_news.png',
    text: "<h2>Well no. That's the whole point of scientific journalism: to let us know about what a paper says without actually having to read the paper." +
      "<br>But can we trust the source?</h2>",
    options: [
      {
        text: "Well, we would have to make sure the news site is legit. And this one seems to be OK.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 334,
      },
      {
        text: "I would stay wary of every source anyway. Reading the paper abstract will always give me a better idea of what's going on.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 334,
      },
    ]
  },
  {
    id:332, //FROM 30 - ALIENS
    img: 'img/covid_news.png',
    text: "<h2>According to this news article, the study was published by Penn State University.</h2>",
    options: [
      {
        text: "Should we look for the original paper?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 328,
      },
      {
        text: "What do other people say about this study?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 329,
      },
    ]
  },
  {
    id:333, //FROM 29
    img: 'img/google_study.png',
    text: "<h2>OK, there are lots of hits for this study in the first Google page, and they all seem to say the same thing.</h2>",
    options: [
      {
        text: "So, most other sites say this study is about what the story actually claims. It checks out.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 338,
      },
      {
        text: "So what? Everyone else could be lying too.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 334,
      },
    ]
  },
  {
    id:334, //FROM 29
    img: 'img/covid_news.png',
    text: "<h2>So, does everything check out?</h2>",
    options: [
      {
        text: "I still need to check a few things",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 323,
      },
      {
        text: "<div onclick='checklistingBadge()'>Yes, I've had enough. Let's talk about something else.</div>",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 34,
      },
    ]
  },
  {
    id:336, //FROM 17 - RESOLVE NO ONE SHOULD TRUST YOUR DAD LOOP
    img: 'img/covid_news.png',
    text: "<h2>OK, so the message my dad sent on Whatsapp was a bit dubious. <br>Let's forget about that bit. <br> " +
      "However, the study in the link seems pretty legit, right?</h2>",
    options: [
      {
        text: "I guess so. We would have to check if this is not a study paid for by the Illuminati first.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 323,
      },
      {
        text: "Well, it would help to know who's behind this information.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 323,
      },
    ]
  },
  {
    id:337, //FROM 22 - REDIRECTED FROM NO ONE SHOULD TRUST YOUR DAD
    img: 'img/covid_news.png',
    text: "<h2>OK, my dad wasn't so much lying as his message was a bit off.</h2>",
    options: [
      {
        text: "His message had nothing to do with the study. Shame on him.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 336,
      },
      {
        text: "His message had nothing to do with the study.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 336,
      },
      {
        text: "His message had nothing to do with the study. I admire that. ",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 336,
      },
    ]
  },
  {
    id:338, //FROM 30 - RESOLVING PAPER LOOP
    img: 'img/covid_news.png',
    text: "<h2>OK, so we know about the original paper already and it checks out. What should we do next?</h2>",
    options: [
      {
        text: "Probably find out what other people are saying about this study?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 329,
      },
      {
        text: "Make sure that it's not all a plot by the liberal media?",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 339,
      },
      {
        text: "<div onclick='checklistingBadge()'>We seem to be going round in circles, let's move on.</div>",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 340,
      },
    ]
  },
  {
    id:339, //FROM 30 - RESOLVING PAPER LOOP
    img: 'img/covid_news.png',
    text: "<h2>Very funny. Still, you make a good point. What if people have found out this study is junk?</h2>",
    options: [
      {
        text: "Yes, it could be junk science.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 329,
      },
      {
        text: "Let's see what other people have to say about this study.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 329,
      },
    ]
  },
  {
    id: 340,
    img: 'img/.png',
    text: "<h1>Thank you for playing!</h1>"+"<h2>Try playing another scenario to see if you can get all three trophies!</h2>",
    options: [
      {
        text: "I want to win! Take me to the other scenario!",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 10,
      },
      {
        text: "Nah, I want to finish the game now.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 35,
      },
    ],
  },


]


//Call the random header
randomHeader();
//Starts game
startGame();
