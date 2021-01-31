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

// Get the modal
let modal = document.getElementById("about-us-modal");

// Get the button that opens the modal
let btn = document.getElementById("about-us");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  modal.classList.add("mystyle");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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

  //Shows or hides badges
  if (logic > 1) {
    logicBadgeElement.src = "img/logic_icon.png"
  } else {
    emotionBadgeElement.src = "img/blank.png"
  }

  if (sceptic > 1) {
    scepticBadgeElement.src = "img/conspiracy_icon.png"
  } else {
    emotionBadgeElement.src = "img/blank.png"
  }

  if (emotion > 1) {
    emotionBadgeElement.src = "img/drama_icon.png"
  } else {
    emotionBadgeElement.src = "img/blank.png"
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
  saveNode()
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
    text: "<h2>Welcome!</h2><p>Before we start, would you please complete <a id='survey-link' href='https://forms.gle/xswyWcP6XnXf3MpN9'>this survey</a>? <br><br>It will only take a few minutes, and it will help us with our research.</p>",
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
        text: "Sure, I hate people too.",
        setState: { emotional: true },
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 3,
      },
      {
        text: "Well, true...but what's your point?",
        setState: { doubtful: true },
        logicValue: 0,
        emotionValue: 1,
        scepticValue: 0,
        nextText: 3,
      },
      {
        text: "(Skip)",
        flag: "warning",
        optionValue: 0,
        //Only shows this option if the required state has been saved
        requiredState: (currentState) => currentState.notnew,
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 7,
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
    text: "<p>Just joking. You didn't think I was being serious, did you? <br><br> Of course, all information has some sort of bias, but that doesn't mean all information is created equal.<br> <span class='highlight'>Certain sources are much more reliable than others.</span></p>",
    options: [
      {
        text: "Go on, I'm listening.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 5,
      },
      {
        text: "Everything is fake news! \n It's all a plot by the liberal media, the reptilians, and the Illuminati.",
        requiredState: (currentState) => currentState.emotional,
        optionValue: 0,
        setState: { conspiratorial: true, emotional: true },
        nextText: 5,
      },
      {
        text: "But how do I know who is telling the truth?",
        optionValue: 0,
        requiredState: (currentState) => currentState.doubtful,
        setState: { emotional: false },
        logicValue: 0,
        emotionValue: 0,
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
        setState: { lazy: true },
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 8,
      },
      {
        text: "Nice try, but I can tell a Deep State goon when I see one. \n You just want to impose your liberal agenda on me.",
        requiredState: (currentState) => currentState.conspiratorial,
        setState: { emotional: true },
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 1,
        nextText: 6,
      },
      {
        text: "So how do I do this?",
        setState: { emotional: true },
        logicValue: 0,
        emotionValue: 0,
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
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
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
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
        nextText: 9,
      },
      {
        text: "Uh-huh",
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
    text: "<p>Well, I can't tell you what to think! <br> But I CAN show you a few strategies to help you master your fact-checking and logical skills when looking at information online.</p>",
    options: [
      {
        text: "Yes, all right. Show me.",
        logicValue: 0,
        emotionValue: 0,
        scepticValue: 0,
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
        optionValue: 0,
        nextText: 10,
      },
      {
        text: "I want to know who is lying",
        optionValue: 0,
        nextText: 35,
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
        optionValue: 0,
        nextText: 11,
      },
      {
        text: "What do you mean it doesn't work? Are you sure this information is correct?",
        setState: { doubtful: true },
        optionValue: 0,
        nextText: 11,
      },
      {
        text: "Of course it doesn't, COVID is a hoax.",
        setState: { conspiratorial: true },
        optionValue: 0,
        nextText: 11,
      },
    ]
  },
  {
    id:11,
    img: 'img/dad_covid.png',
    text: "<h2>I mean, I didn't open the link, but his message pretty much sums it up. " +
      "<br><br>There's no way I'm getting this vaccine, it's going to do more harm than good.</h2>",
    subtext:"<div>You may open the link <a href='https://cutt.ly/9hOZSFv' target='_blank'>here</a></div>",
    options: [
      {
        text: "So you think this message is true just because your dad forwarded it?",
        optionValue: 0,
        nextText: 12,
      },
      {
        text: "Well, if you read the actual study you would see that it doesn't actually say that",
        setState: { logical: true },
        optionValue: 0,
        nextText: 22,
      },
      {
        text: "It's common sense man. This vaccine has been rushed into the market, it's all a sham to make money",
        optionValue: 0,
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
        optionValue: 0,
        nextText: 13,
      },
      {
        text: "Wait! It could be a virus! I think we've established your dad cannot be trusted",
        optionValue: 0,
        nextText: 13,
      },
      {
        text: "Open it, it doesn't really matter anyway.",
        requiredState: (currentState) => currentState.conspiratorial,
        optionValue: 0,
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
        optionValue: 0,
        nextText: 22,
      },
      {
        text: "So, your dad's been lying?",
        optionValue: 0,
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
        optionValue: 0,
        nextText: 22,
      },
      {
        text: "Who cares if the message is inaccurate? Vaccines are evil, that's the truth.",
        optionValue: 0,
        requiredState: (currentState) => currentState.conspiratorial,
        nextText: 15,
      },
    ]
  },
  {
    id:15,
    img: 'img/side_eye.png',
    text: "<h2>So, in order to find the truth we need to say things that aren't true? That makes no sense.</h2>",
    optionValue: 0,
    options: [
      {
        text: "All I'm saying is that I think vaccines are evil, " +
          "so I will support anything that vaguely reaffirms by own beliefs and prejudices, even when it's a blatant lie.",
        optionValue: -2,
        nextText: 16,
      },
      {
        text: "Well, if you put it that way...no, I guess not.",
        optionValue: 0,
        nextText: 22,
      },
    ]
  },
  {
    id:16,
    img: 'img/side_eye.png',
    text: "<h2>So, you will choose to believe a lie just because it's convenient to reaffirm your prejudices?</h2>",
    options: [
      {
        text: "I just don't want to be wrong! I want to win!",
        optionValue: -1,
        nextText: 17,
      },
      {
        text: "I was just joking. Of course, being deceitful on purpose doesn't really help anybody.",
        optionValue: 1,
        nextText: 22,
      },
    ]
  },
  {
    id:17,
    img: 'img/side_eye.png',
    text: "<h2>Well, by actively choosing to believe lies, no one really wins, now do they?</h2>",
    options: [
      {
        text: "I guess not",
        optionValue: 1,
        nextText: 36,
      },
      {
        text: "OK whatever, let's change the subject",
        optionValue: 0,
        nextText: 36,
      },
    ]
  },
  {
    id:22,
    img: 'img/covid_news.png',
    text: "<p>OK, so the message my dad sent on Whatsapp was a bit dubious. <br>Let's forget about that bit. <br> " +
      "However, the study in the link seems pretty legit, right?</p>",
    options: [
      {
        text: "That's actually a good question. Who is behind this information?",
        optionValue: 0,
        nextText: 23,
      },
      {
        text: "No one should trust your dad. Ever.",
        optionValue: 0,
        setState: { hater: true },
        nextText: 37,
      },
    ]
  },
  {
    id:23,  //START BRANCH - STUDY OR NEWS SITE
    img: 'img/covid_news.png',
    text: "<h2>Do you mean the news site or the actual study?</h2>",
    options: [
      {
        text: "I want to know about the news site",
        optionValue: 0,
        nextText: 24,
      },
      {
        text: "I want to know about the study",
        optionValue: 0,
        nextText: 27,
      },
    ]
  },
  {
    id:24,
    img: 'img/about-us.png',
    text: "<p>Well, you can normally see information about a site in their 'About' section.<br>" +
      "If there isn't one you can always search for their name in a search engine.<br>" +
      "You could even do both things</p>",
    subtext: "<div>You may open a new tab and google about Scitech Daily, " +
      "or look at their 'About Us' page <a href='https://scitechdaily.com/about-us/' target='_blank'>here</a>",
    options: [
      {
        text: "I checked their About page and they seem legit. Let's find out more about the study.",
        optionValue: 0,
        nextText: 27,
      },
      {
        text: "But what if they're lying?",
        optionValue: 0,
        nextText: 25,
      },
    ]
  },
  {
    id:24,
    img: 'img/covid_news.png',
    text: "<h2>I suppose we could always check what <i>other people</i> say about them.</h2>",
    options: [
      {
        text: "That makes sense. We've got to know who they are",
        optionValue: 0,
        nextText: 26,
      },
      {
        text: "And if no one else has anything to say about them?",
        optionValue: 0,
        nextText: 25,
      },
    ]
  },
  {
    id:25,
    img: 'img/covid_news.png',
    text: "<h2>Well, if no one's heard of them before, and no one has anything to say about them...</h2>",
    options: [
      {
        text: "...then they're probably not a very authoritative source. Yeah, let's move on to the study.",
        optionValue: 1,
        nextText: 27,
      },
      {
        text: "...they're probably aliens.",
        optionValue: 0,
        nextText: 26,
      },
    ]
  },
  {
    id:26,
    img: 'img/covid_news.png',
    text: "<h2>What? No man, it means that they're probably not very trustworthy.</h2>",
    options: [
      {
        text: "I know, I was just being funny.",
        optionValue: 0,
        nextText: 27,
      },
      {
        text: "If you say so [it's definitely aliens].",
        setState: { aliens : true },
        optionValue: -1,
        nextText: 27,
      },
    ]
  },
  {
    id:27, //START BRANCH
    img: 'img/pennstate.png',
    text: "<h2>According to this news article, the study was published by Penn State University.</h2>",
    options: [
      {
        text: "Should we look for the original paper?",
        optionValue: 0,
        nextText: 28,
      },
      {
        text: "What do other people say about this study?",
        optionValue: 0,
        nextText: 29,
      },
      {
        text: "I bet it's all a lie. Aliens are tricky like that.",
        optionValue: 0,
        requiredState: (currentState) => currentState.aliens,
        nextText: 30,
      },
    ]
  },
  {
    id:28, //FROM 27
    img: 'img/goodidea.gif',
    text: "<h2>That's actually a great strategy. Luckily, the author of this article was kind enough to provide a link to the paper." +
      "<br>It's right there at the bottom of the page.</h2>",
    subtext: "<div>You may open the link <a href='https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3001000' target='_blank'>here</a></div>",
    options: [
      {
        text: "I can only see the abstract, but it says pretty much the same as the article.",
        optionValue: 0,
        nextText: 38,
      },
      {
        text: "This paper is boring. Do I really need to read it?",
        optionValue: 0,
        nextText: 31,
      },
    ]
  },
  {
    id:29, //FROM 27
    img: 'img/covid_news.png',
    text: "<h2>Checking for other sources could help us know more about this story. " +
      "<br>Let's google something along the lines of 'penn state university + covid + resistance' </h2>",
    subtext: "<div><a href='https://cutt.ly/qhPLptJ' target='_blank'>Click to Google 'penn state university + covid + resistance'</a></div>",
    options: [
      {
        text: "OK, let's Google this",
        optionValue: 0,
        nextText: 33,
      },
    ]
  },
  {
    id:30, //FROM 27
    img: 'img/covid_news.png',
    text: "<h2>ENOUGH WITH THE ALIENS! Seriously. Can we move on?</h2>",
    options: [
      {
        text: "All right, calm down! [Are you sure you're not an alien?]",
        optionValue: 0,
        nextText: 32,
      },
    ]
  },
  {
    id:31, //FROM 27
    img: 'img/covid_news.png',
    text: "<h2>Well no. That's the whole point of scientific journalism: to let us know about what a paper says without actually having to read the paper." +
      "<br>But can we trust the source?</h2>",
    options: [
      {
        text: "Well, we would have to make sure the news site is legit. And this one seems to be OK.",
        optionValue: 0,
        nextText: 34,
      },
      {
        text: "I would stay wary of every source anyway. Reading the paper abstract will always give me a better idea of what's going on.",
        optionValue: 1,
        nextText: 34,
      },
    ]
  },
  {
    id:32, //FROM 30 - ALIENS
    img: 'img/covid_news.png',
    text: "<h2>According to this news article, the study was published by Penn State University.</h2>",
    options: [
      {
        text: "Should we look for the original paper?",
        optionValue: 0,
        nextText: 28,
      },
      {
        text: "What do other people say about this study?",
        optionValue: 0,
        nextText: 29,
      },
    ]
  },
  {
    id:33, //FROM 29
    img: 'img/google_study.png',
    text: "<h2>OK, there are lots of hits for this study in the first Google page, and they all seem to say the same thing.</h2>",
    options: [
      {
        text: "So, most other sites say this study is about what the story actually claims. It checks out.",
        optionValue: 1,
        nextText: 38,
      },
      {
        text: "So what? Everyone else could be lying too.",
        optionValue: 0,
        nextText: 34,
      },
    ]
  },
  {
    id:34, //FROM 29
    img: 'img/covid_news.png',
    text: "<h2>So, does everything check out?</h2>",
    options: [
      {
        text: "I still need to check a few things",
        optionValue: 0,
        nextText: 23,
      },
      {
        text: "Yes, I've had enough. Let's talk about something else.",
        optionValue: 0,
        nextText: 35,
      },
    ]
  },
  {
    id:35, //FROM 29
    img: 'img/whatdoyoumean.gif',
    text: "<h2>To know if someone is lying, or at least not being truthful, " +
      "we should first try to understand WHAT they are saying. [END FOR NOW]</h2>",
    options: [
      {
        text: "END SECTION - RESTART LOOP",
        optionValue: 0,
        nextText: 9,
      },
    ]
  },
  {
    id:36, //FROM 17 - RESOLVE NO ONE SHOULD TRUST YOUR DAD LOOP
    img: 'img/covid_news.png',
    text: "<h2>OK, so the message my dad sent on Whatsapp was a bit dubious. <br>Let's forget about that bit. <br> " +
      "However, the study in the link seems pretty legit, right?</h2>",
    options: [
      {
        text: "I guess so. We would have to check if this is not a study paid for by the Illuminati first.",
        optionValue: -1,
        nextText: 23,
      },
      {
        text: "Well, it would help to know who's behind this information.",
        optionValue: 1,
        nextText: 23,
      },
    ]
  },
  {
    id:37, //FROM 22 - REDIRECTED FROM NO ONE SHOULD TRUST YOUR DAD
    img: 'img/covid_news.png',
    text: "<h2>OK, my dad wasn't so much lying as his message was a bit off.</h2>",
    options: [
      {
        text: "His message had nothing to do with the study. Shame on him.",
        optionValue: 0,
        nextText: 36,
      },
      {
        text: "His message had nothing to do with the study.",
        optionValue: 0,
        nextText: 36,
      },
      {
        text: "His message had nothing to do with the study. I admire that. ",
        optionValue: -1,
        nextText: 36,
      },
    ]
  },
  {
    id:38, //FROM 30 - RESOLVING PAPER LOOP
    img: 'img/covid_news.png',
    text: "<h2>OK, so we know about the original paper already and it checks out. What should we do next?</h2>",
    options: [
      {
        text: "Probably find out what other people are saying about this study?",
        optionValue: 0,
        nextText: 29,
      },
      {
        text: "Make sure that it's not all a plot by the liberal media?",
        optionValue: 0,
        nextText: 39,
      },
      {
        text: "We seem to be going round in circles, let's move on.",
        optionValue: 0,
        nextText: 39,
      },
    ]
  },
  {
    id:39, //FROM 30 - RESOLVING PAPER LOOP
    img: 'img/covid_news.png',
    text: "<h2>Very funny. Still, you make a good point. What if people have found out this study is junk?</h2>",
    options: [
      {
        text: "Yes, it could be junk science.",
        optionValue: 0,
        nextText: 29,
      },
      {
        text: "Let's see what other people have to say about this study.",
        optionValue: 0,
        nextText: 29,
      },
    ]
  },
]



//Starts game
startGame();
