//NON-BINARY PATH

{
  id:310,
    img: 'img/dad_covid.png',
  text: "<h2>I just got this message from my dad. <br> Did you know there is a study that says that the new COVID-19 vaccine doesn't work?</h2>",
  subtext:"<div>You may open the link above <a href='https://cutt.ly/9hOZSFv' target='_blank'>here</a></div>",
  options: [
  {
    text: "Well, it doesn't surprise me. I mean, the vaccine is very new after all",
    optionValue: 0,
    nextText: 311,
  },
  {
    text: "What do you mean it doesn't work? Are you sure this information is correct?",
    setState: { doubtful: true },
    optionValue: 0,
    nextText: 311,
  },
  {
    text: "Of course it doesn't, COVID is a hoax.",
    setState: { conspiratorial: true },
    optionValue: 0,
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
    optionValue: 0,
    nextText: 312,
  },
  {
    text: "Well, if you read the actual study you would see that it doesn't actually say that",
    setState: { logical: true },
    optionValue: 0,
    nextText: 322,
  },
  {
    text: "It's common sense man. This vaccine has been rushed into the market, it's all a sham to make money",
    optionValue: 0,
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
    optionValue: 0,
    nextText: 313,
  },
  {
    text: "Wait! It could be a virus! I think we've established your dad cannot be trusted",
    optionValue: 0,
    nextText: 313,
  },
  {
    text: "Open it, it doesn't really matter anyway.",
    requiredState: (currentState) => currentState.conspiratorial,
    optionValue: 0,
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
    optionValue: 0,
    nextText: 322,
  },
  {
    text: "So, your dad's been lying?",
    optionValue: 0,
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
    optionValue: 0,
    nextText: 322,
  },
  {
    text: "Who cares if the message is inaccurate? Vaccines are evil, that's the truth.",
    optionValue: 0,
    requiredState: (currentState) => currentState.conspiratorial,
    nextText: 315,
  },
]
},
{
  id:315,
    img: 'img/side_eye.png',
  text: "<h2>So, in order to find the truth we need to say things that aren't true? That makes no sense.</h2>",
  optionValue: 0,
  options: [
  {
    text: "All I'm saying is that I think vaccines are evil, " +
      "so I will support anything that vaguely reaffirms by own beliefs and prejudices, even when it's a blatant lie.",
    optionValue: -2,
    nextText: 316,
  },
  {
    text: "Well, if you put it that way...no, I guess not.",
    optionValue: 0,
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
    optionValue: 0,
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
    optionValue: 0,
    nextText: 323,
  },
  {
    text: "No one should trust your dad. Ever.",
    optionValue: 0,
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
    optionValue: 0,
    nextText: 324,
  },
  {
    text: "I want to know about the study",
    optionValue: 0,
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
    optionValue: 0,
    nextText: 327,
  },
  {
    text: "But what if they're lying?",
    optionValue: 0,
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
    optionValue: 0,
    nextText: 326,
  },
  {
    text: "And if no one else has anything to say about them?",
    optionValue: 0,
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
    optionValue: 1,
    nextText: 327,
  },
  {
    text: "...they're probably aliens.",
    optionValue: 0,
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
    optionValue: 0,
    nextText: 327,
  },
  {
    text: "If you say so [it's definitely aliens].",
    setState: { aliens : true },
    optionValue: -1,
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
    optionValue: 0,
    nextText: 328,
  },
  {
    text: "What do other people say about this study?",
    optionValue: 0,
    nextText: 329,
  },
  {
    text: "I bet it's all a lie. Aliens are tricky like that.",
    optionValue: 0,
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
    optionValue: 0,
    nextText: 338,
  },
  {
    text: "This paper is boring. Do I really need to read it?",
    optionValue: 0,
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
    optionValue: 0,
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
    optionValue: 0,
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
    optionValue: 0,
    nextText: 334,
  },
  {
    text: "I would stay wary of every source anyway. Reading the paper abstract will always give me a better idea of what's going on.",
    optionValue: 1,
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
    optionValue: 0,
    nextText: 328,
  },
  {
    text: "What do other people say about this study?",
    optionValue: 0,
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
    optionValue: 1,
    nextText: 338,
  },
  {
    text: "So what? Everyone else could be lying too.",
    optionValue: 0,
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
    optionValue: 0,
    nextText: 323,
  },
  {
    text: "Yes, I've had enough. Let's talk about something else.",
    optionValue: 0,
    nextText: 335,
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
    optionValue: -1,
    nextText: 323,
  },
  {
    text: "Well, it would help to know who's behind this information.",
    optionValue: 1,
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
    optionValue: 0,
    nextText: 336,
  },
  {
    text: "His message had nothing to do with the study.",
    optionValue: 0,
    nextText: 336,
  },
  {
    text: "His message had nothing to do with the study. I admire that. ",
    optionValue: -1,
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
    optionValue: 0,
    nextText: 329,
  },
  {
    text: "Make sure that it's not all a plot by the liberal media?",
    optionValue: 0,
    nextText: 339,
  },
  {
    text: "We seem to be going round in circles, let's move on.",
    optionValue: 0,
    nextText: 339,
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
    optionValue: 0,
    nextText: 329,
  },
  {
    text: "Let's see what other people have to say about this study.",
    optionValue: 0,
    nextText: 329,
  },
]
},
