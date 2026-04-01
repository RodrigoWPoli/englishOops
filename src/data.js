export const MODULES = [
  {
    id: 'grammar',
    title: 'Tense Crimes 🚔',
    subtitle: 'Grammar so bad it should be illegal',
    icon: '⚖️',
    color: '#7c3aed',
    accent: '#a78bfa',
    badgeId: 'grammar_ace',
    minLevel: 1,
    questions: [
      {
        type: 'mcq',
        text: 'Detective Mode 🕵️ Which sentence committed a TENSE CRIME?',
        options: [
          'I went to the store yesterday.',
          'Yesterday I will ate a pizza.',
          'She has already finished her homework.',
          'They were playing football all afternoon.',
        ],
        correct: 1,
        explanation:
          '"Yesterday I will ate" is a TRIPLE CRIME: past time word, future tense, AND past participle. Impressive levels of chaos.',
      },
      {
        type: 'mcq',
        text: 'Your friend texts: "I have went to Paris last year 🗼" What\'s wrong?',
        options: [
          'Nothing, sounds fine to me 👀',
          "Should be 'I went to Paris last year' — specific past time = simple past",
          "Should be 'I have go to Paris last year'",
          "Should be 'I will have went to Paris'",
        ],
        correct: 1,
        explanation:
          "With specific past time markers like 'last year', use simple past (went), NOT present perfect. Also 'have went' doesn't exist. RIP.",
      },
      {
        type: 'tf',
        text: "TRUE or FALSE: 'I am having a car' is correct English. 🚗",
        correct: false,
        explanation:
          "FALSE! 'Have' for possession is stative — never use it in continuous form. Say 'I have a car'. Unless your car is temporarily visiting.",
      },
      {
        type: 'mcq',
        text: "Fill the gap: 'If I ___ a million dollars, I would buy a dragon.' 🐉",
        options: ['have', 'had', 'will have', 'am having'],
        correct: 1,
        explanation:
          "Second conditional! Hypothetical situations use 'if + past simple'. So 'had' is correct. Sadly, dragons remain hypothetical.",
      },
      {
        type: 'mcq',
        text: 'Which is the CORRECT sentence? 🤔',
        options: [
          "She don't like spiders.",
          "She doesn't likes spiders.",
          "She doesn't like spiders.",
          'She not like spiders.',
        ],
        correct: 2,
        explanation:
          "Third person singular uses 'doesn't' + base verb. 'Doesn't likes' is what happens when you add -s twice out of enthusiasm. Don't do that.",
      },
      {
        type: 'tf',
        text: "TRUE or FALSE: 'I've been waiting for one hour' is grammatically correct. ⏰",
        correct: true,
        explanation:
          'TRUE! Present Perfect Continuous is perfect for actions that started in the past and are still ongoing. One hour of waiting qualifies as suffering.',
      },
      {
        type: 'mcq',
        text: "Spot the passive voice: 'Mistakes were made.' Who made them? 🕵️",
        options: [
          'A specific, identified person (probably Bob)',
          "Nobody — that's the whole point of passive voice",
          'Mistakes themselves. They are self-aware.',
          "The sentence forgot to add 'by someone'",
        ],
        correct: 1,
        explanation:
          "Passive voice hides the subject. Politicians LOVE this. 'Mistakes were made' = classic accountability avoidance.",
      },
      {
        type: 'mcq',
        text: "Which one is a 'False Friend' in English if you speak Spanish? 'Actual' typically means...?",
        options: ["Current/Present", "Real/True", "A type of fruit", "Exactly happened"],
        correct: 1,
        explanation: "In Spanish 'actual' means current. In English, it means real. It's a trap!",
      },
      {
        type: 'tf',
        text: "Is 'I have 20 years' correct English to state your age? 🎂",
        correct: false,
        explanation: "In English you ARE your age. 'I am 20 years old.' You don't possess the years. Time is your state of being, not your inventory.",
      },
      {
        type: 'mcq',
        text: "Where does the apostrophe go in 'The cats toys' (toys belonging to multiple cats)? 🐈‍⬛",
        options: ["cat's", "cats'", "cats's", "no apostrophe needed"],
        correct: 1,
        explanation: "Plural possessive for words ending in S usually just gets an apostrophe at the end. One cat's toy, two cats' toys.",
      },
      {
        type: 'mcq',
        text: "Fill the gap: 'If I ___ you, I would study more.' 🤓",
        options: ["am", "was", "were", "be"],
        correct: 2,
        explanation: "Subjunctive mood! For hypothetical situations, we use 'were' even for 'I' and 'he/she/it'. 'If I were a boy,' says Beyoncé.",
      },
      {
        type: 'tf',
        text: "Is 'less' used for countable items, and 'fewer' for uncountable ones? 🍎",
        correct: false,
        explanation: "It's the opposite! 'Fewer' is for countable things (fewer people), 'less' is for uncountable (less water). Supermarkets get this wrong constantly.",
      },
      {
        type: 'mcq',
        text: "Which is the correct possessive form of 'the kids' (plural)? 🧒🧒",
        options: ["the kids's", "the kids'", "the kid's", "the kidz"],
        correct: 1,
        explanation: "Plural ending in 's' just gets an apostrophe. 'The kids' toys' means toys belonging to multiple kids. Grammar is efficiency.",
      },
      {
        type: 'mcq',
        text: "Spot the Oxford Comma: 'I love my parents, Lady Gaga, and Hummus.' 🕊️",
        options: ["The comma after 'Lady Gaga'", "The comma after 'parents'", "There is no Oxford Comma here", "Gaga IS my parent"],
        correct: 0,
        explanation: "The Oxford Comma is the final comma before the 'and'. Without it, you might be implying Lady Gaga and Hummus ARE your parents. Awkward.",
      },
    ],
  },
  {
    id: 'civilization',
    title: 'Culture Shock 🌍',
    subtitle: 'Things that will confuse you about English-speaking countries',
    icon: '🗺️',
    color: '#0891b2',
    accent: '#22d3ee',
    badgeId: 'culture_vulture',
    minLevel: 2,
    questions: [
      {
        type: 'mcq',
        text: "In the UK, why do people say 'You alright?' as a greeting? 😐",
        options: [
          'They genuinely want to know about your health',
          "It's just a greeting — don't actually tell them your problems",
          'They think you look unwell',
          "It's a legal requirement after Brexit",
        ],
        correct: 1,
        explanation:
          "British greeting culture: 'You alright?' means 'Hello'. The correct response is 'Yeah, you?' NOT a 15-minute monologue about your back pain.",
      },
      {
        type: 'tf',
        text: "TRUE or FALSE: The word 'automobile' was coined by the French, not Americans. 🇫🇷",
        correct: true,
        explanation:
          "TRUE! 'Automobile' comes from Greek 'auto' + Latin 'mobilis'. Coined in French. Then Americans adopted it, added a drive-through, and called it their own.",
      },
      {
        type: 'mcq',
        text: "What does 'the boot' mean in British English? 🚗",
        options: [
          'A shoe, obviously',
          'The trunk of a car',
          'A type of pub',
          'A way to restart a computer (they invented that too)',
        ],
        correct: 1,
        explanation:
          'Boot = car trunk in British English. Also: bonnet = hood, pavement = sidewalk. Basically learn two languages: English and British English.',
      },
      {
        type: 'mcq',
        text: "In American culture, when someone says 'We should hang out sometime!' they mean...? 🤝",
        options: [
          'They have booked a specific date next Tuesday',
          "Absolutely nothing. It's a polite social noise.",
          'They want to go rock climbing',
          'You are now best friends',
        ],
        correct: 1,
        explanation:
          "'We should hang out sometime' is American for 'I acknowledge you exist and am not hostile.' It rarely leads to actual hanging out.",
      },
      {
        type: 'tf',
        text: "TRUE or FALSE: In British English, 'pants' refers to underwear, not trousers. 🩲",
        correct: true,
        explanation:
          "TRUE! Tell a British person you 'love their pants' and brace yourself. Trousers = trousers. Pants = underwear. This has caused international incidents.",
      },
      {
        type: 'mcq',
        text: 'Guy Fawkes Night (November 5th) celebrates what? 🎆',
        options: [
          'Guy Fawkes successfully blowing up Parliament',
          'Guy Fawkes FAILING to blow up Parliament',
          'The invention of fireworks in England',
          'A very specific Guy named Fawkes winning a baking competition',
        ],
        correct: 1,
        explanation:
          "The British celebrate a GUY WHO FAILED. Every year. With fireworks. It's basically: 'Remember that time someone tried to blow us up and didn't? PARTY!'",
      },
      {
        type: 'mcq',
        text: 'Why do Americans put ice in absolutely everything? 🧊',
        options: [
          'Scientific research shows 47 ice cubes improves flavor',
          'Cultural preference + historically cheap access to ice post-industrial revolution',
          'To confuse European tourists',
          'They lost a bet with Canada',
        ],
        correct: 1,
        explanation:
          "Ice was a luxury in the 1800s, then the US industrialized ice production and it became cheap. Old habits die hard. Europeans remain baffled.",
      },
      {
        type: 'mcq',
        text: "In the United States, what is the standard tip for good service in a restaurant? 💸",
        options: ["5%", "10%", "18-20%", "A firm handshake"],
        correct: 2,
        explanation: "US tipping culture is intense. 18-20% is standard. If you don't tip, the server might actually follow you to the parking lot to ask what went wrong.",
      },
      {
        type: 'tf',
        text: "TRUE or FALSE: In Australia, a 'thong' is a type of footwear (flip-flops). 🩴",
        correct: true,
        explanation: "TRUE! Australians call flip-flops 'thongs'. Mentioning your 'new thongs' at a family dinner in Sydney is perfectly normal. In New York, maybe not.",
      },
      {
        type: 'mcq',
        text: "What is 'The Tube' in London? 🚇",
        options: ["A very long sandwich", "The Underground subway system", "A famous skyscraper", "A type of rain cloud"],
        correct: 1,
        explanation: "The Underground is the oldest subway in the world. 'Mind the gap' is the official city motto (unofficially).",
      },
      {
        type: 'mcq',
        text: "In Canada, what do people call a one-dollar coin? 💵",
        options: ["A buck", "A loonie", "A toonie", "A polar bear"],
        correct: 1,
        explanation: "It has a picture of a loon (a bird) on it. The two-dollar coin is called a 'toonie'. Canadians are adorable.",
      },
      {
        type: 'tf',
        text: "In the United States, 'biscuits' are usually served with gravy, not tea. 🥓",
        correct: true,
        explanation: "American biscuits are savory bread things. British biscuits are cookies. Order 'biscuits and gravy' in London and prepare for confusion.",
      },
      {
        type: 'mcq',
        text: "What do British people call a 'cookie' (the American way)? 🍪",
        options: ["A biscuit", "A scone", "A crumpet", "A sugary-disc"],
        correct: 0,
        explanation: "Unless it has chocolate chips, then it's a 'cookie'. Otherwise, it's a biscuit. It's a very serious distinction.",
      },
      {
        type: 'mcq',
        text: "In Ireland, what does 'What's the craic?' mean? 🇮🇪",
        options: ["Where is the crack?", "What's happening? / How are you?", "Illegal substances", "The weather is bad"],
        correct: 1,
        explanation: "'Craic' means fun or news. If someone asks, 'What's the craic?', they just want to know if anything interesting is happening.",
      },
    ],
  },
  {
    id: 'facts',
    title: 'Language Chaos 🤯',
    subtitle: "English is a mess. Here's proof.",
    icon: '💥',
    color: '#be123c',
    accent: '#f43f5e',
    badgeId: 'linguist',
    minLevel: 3,
    questions: [
      {
        type: 'mcq',
        text: "The words 'flammable' and 'inflammable' mean... 🔥",
        options: [
          "Opposite things — 'in' means 'not'",
          "EXACTLY THE SAME THING. Both mean 'can catch fire'.",
          "'Inflammable' means it's on fire already",
          'One is British, one is American',
        ],
        correct: 1,
        explanation:
          "BOTH mean 'easily catches fire'. The 'in-' in inflammable comes from Latin 'in-flammare' (to set alight), NOT the English prefix 'not'.",
      },
      {
        type: 'tf',
        text: 'TRUE or FALSE: English has borrowed words from over 350 languages. 🌐',
        correct: true,
        explanation:
          'TRUE! English is basically a magpie. Shampoo (Hindi), ketchup (Malay), sofa (Arabic). A true global linguistic kleptomaniac.',
      },
      {
        type: 'mcq',
        text: "Why is the letter K silent in words like 'knife', 'knight', 'know'? 🗡️",
        options: [
          "It's decorative. Letters need jobs too.",
          'It used to be pronounced — English just stopped saying it in the 1400s',
          "It's a conspiracy by knife manufacturers",
          'Those letters come silent-mode pre-installed from the factory',
        ],
        correct: 1,
        explanation:
          "Old English DID pronounce the K. 'Knife' was literally 'k-nife'. Then speakers got lazy around the 1400s and dropped it. The K stayed in spelling to haunt future learners.",
      },
      {
        type: 'mcq',
        text: 'The word "quiz" was supposedly invented when a Dublin theater owner bet he could... 📝',
        options: [
          'Write a 4-letter nonsense word that the whole city would know in 24 hours',
          'Create the hardest pub game ever',
          'Confuse the British Royal Family',
          'Make money from educational television',
        ],
        correct: 0,
        explanation:
          'Legend says Richard Daly (1791) bet he could invent a new word overnight. He had "quiz" chalked all over Dublin by morning. Legend or not, great story.',
      },
      {
        type: 'tf',
        text: 'TRUE or FALSE: "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo" is a grammatically correct sentence. 🦬',
        correct: true,
        explanation:
          'TRUE. "Buffalo" is a city, an animal, AND a verb (to bully). It means: Bison from Buffalo that are bullied by other Buffalo bison also bully other Buffalo bison. English is fine.',
      },
      {
        type: 'mcq',
        text: 'What word has the most definitions in the Oxford English Dictionary? 📖',
        options: ['Run', 'Set', 'Go', 'Put'],
        correct: 1,
        explanation:
          "'Set' has 430+ definitions in the OED. No other word has given dictionary editors more existential dread.",
      },
      {
        type: 'mcq',
        text: "The phrase 'rule of thumb' most likely comes from... 👍",
        options: [
          'Ancient brewing — using a thumb to test liquid temperature',
          'A law about stick sizes (this is a myth but a very popular one)',
          'Tailoring — thumbs as rough measurement tools for centuries',
          'All of these are theories and nobody actually knows',
        ],
        correct: 3,
        explanation:
          "The origin is genuinely debated! Brewing, tailoring, carpentry — all plausible. The 'wife-beating law' theory is a popular myth with no historical basis. The truth: nobody knows.",
      },
      {
        type: 'mcq',
        text: "What is a 'portmanteau'? 💼",
        options: ["A type of French wine", "A word blending two others (like 'brunch')", "A suitcase for letters", "A grammatical mistake"],
        correct: 1,
        explanation: "Smoke + Fog = Smog. Breakfast + Lunch = Brunch. English loves smashing words together to save time.",
      },
      {
        type: 'tf',
        text: "TRUE or FALSE: Shakespeare is credited with inventing over 1,700 words. ✍️",
        correct: true,
        explanation: "Shakespeare basically made up words like 'eyeball', 'manager', 'swagger', and 'lonely'. If he couldn't find a word, he just invented one. The ultimate life hack.",
      },
      {
        type: 'mcq',
        text: "What does 'ghost word' mean in linguistics? 👻",
        options: ["A word used only in horror", "A word that entered the dictionary due to an error", "A word with no vowels", "A word that no longer exists"],
        correct: 1,
        explanation: "A 'ghost word' is a mistake that gets printed. 'Dord' was in the dictionary for years until they realized it was a misprint of 'density'. Oops.",
      },
      {
        type: 'mcq',
        text: "What is a 'pangram'? 🔠",
        options: ["A telegram", "A sentence using every letter of the alphabet", "A pancake", "A word with no vowels"],
        correct: 1,
        explanation: "'The quick brown fox jumps over the lazy dog' is the most famous one. Compulsive typists love them.",
      },
      {
        type: 'tf',
        text: "The dot above the letter 'i' or 'j' has a name. It's called a 'tittle'. 📍",
        correct: true,
        explanation: "Yes, it's a tittle. 'Jotted down every iota and tittle' is a real (biblical) expression. Now you're a trivia champion.",
      },
      {
        type: 'mcq',
        text: "Longest word typable using ONLY the top row of a QWERTY keyboard? ⌨️",
        options: ["Power", "Typewriter", "Pretty", "Territory"],
        correct: 1,
        explanation: "T-Y-P-E-W-R-I-T-E-R. All on the top row. It was probably a marketing trick by the typewriter sales reps.",
      },
      {
        type: 'mcq',
        text: "The word 'mortgage' literally translates from Old French as... 🏠",
        options: ["Home loan", "Death pledge", "Money grab", "Life debt"],
        correct: 1,
        explanation: "'Mort' (death) + 'gage' (pledge). Because you pay until you die or the debt is 'dead'. Very uplifting history.",
      },
    ],
  },
  {
    id: 'comprehension',
    title: 'Read the Room 📖',
    subtitle: 'Read a chaotic text. Try to understand it. Good luck.',
    icon: '📚',
    color: '#059669',
    accent: '#34d399',
    badgeId: 'bookworm',
    minLevel: 4,
    questions: [
      {
        type: 'comprehension',
        passage: `OPEN LETTER TO WHOEVER INVENTED ENGLISH SPELLING

Dear Responsible Party,

I am writing to you — from the past, presumably, since you are dead — to formally register my COMPLAINT regarding the state of English orthography.

Consider the following: 'though', 'through', 'tough', 'cough', 'bough', and 'hiccough' all end in '-ough'. They are pronounced: 'tho', 'throo', 'tuff', 'coff', 'bow', and 'hiccup'. This is NOT a spelling system. This is a prank.

Furthermore, I have discovered that 'colonel' is pronounced 'kernel'. When I confronted a native speaker about this, they shrugged and said 'yeah, English is weird.' THAT IS NOT AN EXPLANATION.

I demand a refund of the years I have spent learning this language.

Yours furiously,
A Second Language Learner`,
        subQuestions: [
          {
            q: 'What is the main complaint in the letter?',
            options: [
              'English grammar is too complicated',
              'English spelling does not match pronunciation consistently',
              'Native speakers are rude',
              "The letter writer doesn't know what 'orthography' means",
            ],
            correct: 1,
          },
          {
            q: "The word 'orthography' most likely means:",
            options: [
              'The study of insects',
              'The system of correct spelling in a language',
              'A fancy word for grammar',
              'A condition caused by too much studying',
            ],
            correct: 1,
          },
          {
            q: 'What is the tone of the letter?',
            options: [
              'Academic and formal',
              'Sad and depressed',
              'Humorous and exaggerated frustration',
              'Genuinely angry with no comedic intent',
            ],
            correct: 2,
          },
        ],
      },
      {
        type: 'comprehension',
        passage: `FIELD NOTES: OBSERVING THE BRITISH IN THEIR NATURAL HABITAT
(An Anthropological Study)

Day 1: It is raining. My host family says it is 'not too bad, actually.' It is very bad.

Day 3: I have learned that 'That's quite good' means 'mediocre', and 'Not bad at all' means 'excellent.' I am recalibrating my entire understanding of language.

Day 5: Someone said my presentation was 'very brave.' I have been informed this means it was terrible. I feel betrayed.

Day 7: A colleague told me to 'pop round for a chat sometime.' I popped round the next day. They seemed surprised. Apparently 'sometime' means 'never, but in a friendly way.'

Day 12: I have begun to understand. English politeness is encryption. Each pleasant phrase contains a hidden, darker meaning. I am learning to decode it.

Day 15: Someone told me I was 'quite a character.' I'm still not sure if this was an insult.`,
        subQuestions: [
          {
            q: "According to the notes, 'That's quite good' actually means:",
            options: ['Excellent', 'Mediocre', 'Terrible', 'Brave'],
            correct: 1,
          },
          {
            q: "Why was the writer surprised when visiting their colleague's home?",
            options: [
              "They didn't know the address",
              "The colleague said 'pop round sometime' but didn't actually expect them to come",
              'It was raining',
              'The colleague had moved without telling anyone',
            ],
            correct: 1,
          },
          {
            q: "Which phrase best summarizes the writer's conclusion on Day 12?",
            options: [
              'British people are unfriendly',
              'Rain is a problem in Britain',
              'British politeness is a coded language that hides real meanings',
              'The writer is giving up and going home',
            ],
            correct: 2,
          },
        ],
      },
      {
        type: 'comprehension',
        passage: `THE ART OF THE BRITISH APOLOGY
        
If a British person bumps into a stationary object (like a pole), they will often say 'Sorry' to the pole. 

If you step on a British person's foot, THEY will say 'Sorry' to YOU for having their foot in your way. 

An 'I'm sorry, but...' usually means 'I am about to destroy your entire argument with polite aggression.' Mastering the 'Sorry' is the first step to becoming British.`,
        subQuestions: [
          {
            q: "According to the text, what might a British person do if they hit a pole?",
            options: ["Kick it", "Say 'Sorry' to it", "Ignore it", "Call the council"],
            correct: 1
          },
          {
            q: "What does 'I'm sorry, but...' typically signal in conversation?",
            options: ["Genuinely feeling bad", "A polite warning of upcoming disagreement", "They forgot what they were saying", "They are ordering a tea"],
            correct: 1
          }
        ]
      },
      {
        type: 'comprehension',
        passage: `THE GREAT EMPIRE OF AMERICAN FAST FOOD

In the land of the free, a 'Small' drink is often the size of a European family sedan. A 'Medium' could hydrate a small desert for a week. 

Fast food is not just food; it's an experience, a lifestyle, and occasionally a heart condition. If you order a salad, they will often ask if you want fried chicken strips and two pounds of ranch dressing on top. This is the American Way.`,
        subQuestions: [
          {
            q: "What is ironic about ordering a salad in this text?",
            options: ["It costs more", "It comes covered in fried chicken and heavy dressing", "It's served in a cup", "They don't have any"],
            correct: 1
          },
          {
            q: "What is implied about American drink sizes?",
            options: ["They are too small", "They are incredibly large", "They are very expensive", "They come from Europe"],
            correct: 1
          }
        ]
      },
      {
        type: 'comprehension',
        passage: `ENGLISH WEATHER: A FIVE-MINUTE CYCLE

In England, the weather is not a state; it is an event that happens repeatedly very quickly. You can experience a crisp autumn morning at 9 AM, a tropical thunderstorm at 10 AM, a light snowfall at 11 AM, and a scorching heatwave by noon. 

British people carry umbrellas not as a choice, but as a mandatory biological appendage. To leave home without one is to tempt the gods of irony.`,
        subQuestions: [
          {
            q: "Main characteristic of English weather here?",
            options: ["Always sunny", "Constantly and rapidly changing", "Very cold", "Extremely predictable"],
            correct: 1
          },
          {
            q: "How are umbrellas described?",
            options: ["Useless", "A mandatory part of the body (biological appendage)", "Fashion items", "A choice"],
            correct: 1
          }
        ]
      }
    ],
  },
];

export const BADGES = [
  { id: 'first_blood', name: 'First Answer', icon: '🎯', desc: 'Answered your first question' },
  { id: 'grammar_ace', name: 'Grammar Cop', icon: '🚔', desc: 'Completed Tense Crimes' },
  { id: 'culture_vulture', name: 'Culture Vulture', icon: '🦅', desc: 'Completed Culture Shock' },
  { id: 'linguist', name: 'Chaos Linguist', icon: '🔬', desc: 'Completed Language Chaos' },
  { id: 'bookworm', name: 'Bookworm (Barely)', icon: '🪱', desc: 'Completed Read the Room' },
  { id: 'streak_5', name: 'On Fire', icon: '🔥', desc: '5 correct answers in a row' },
  { id: 'level_5', name: 'Not a Beginner', icon: '🌟', desc: 'Reached Level 5' },
  { id: 'perfectionist', name: 'Perfectionist', icon: '💎', desc: 'Completed a module with 100% accuracy' },
];

export const ROAST_MESSAGES = [
  'WRONG. But honestly, a bold choice. 😬🤡',
  'Incorrect! The correct answer is judging you right now. 👀👺',
  "Nope! Your grammar teacher is crying somewhere. 😭🥀",
  'WRONG. The grammar police have been notified. 🚔🚨',
  "Not quite. But hey, you're learning by failure! 💀📉",
  'Incorrect! A moment of silence for that answer. 🪦🔇',
  'That answer needed more... preparation. 😅🧘',
  'Wrong! But the confidence? *chef\'s kiss*. 😤🤌',
  'Oh sweetie. No. 😶🙈',
  'INCORRECT. Your ancestors are disappointed. 👻📉',
];

export const PRAISE_MESSAGES = [
  "CORRECT! You're basically fluent now. 🎉🧠",
  'YES! The grammar gods smile upon you. ✨🤴',
  'Absolutely right! Take a victory lap. 🏃🌈',
  "Correct! You've been chosen. 🌟🧞",
  'NAILED IT! Your English teacher would weep with joy. 😭✨💖',
  'RIGHT! You are dangerously intelligent. 💡🔥',
  'CORRECT! Other learners are jealous. 😌💎',
  'Yes! You understand English better than some native speakers. 🎖️🗽',
  'CORRECT! Adding XP and your dignity is intact. 💪🦁',
  'Right answer! A small win, but yours to keep. 🥇🎈',
];

export const XP_PER_CORRECT = 10;
export const XP_PER_LEVEL = 100;
