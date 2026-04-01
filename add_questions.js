import Database from 'better-sqlite3';
const db = new Database('english_oops.db');

const newQuestions = [

  // ==================== GRAMMAR (25 new) ====================

  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Collective Confusion: 'The team ___ decided to quit.' 🏆",
    options: ['has', 'have', 'Both are acceptable', 'Neither works'],
    correct: 2,
    explanation: "In American English 'has' wins. In British English 'have' is fine. Both are correct — they just can't agree about agreement."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Dangling Modifier Disaster: 'Walking home, the rain started.' What's wrong? ☔",
    options: ['Nothing, it is fine', 'The rain cannot walk', 'Missing a comma', 'Wrong tense'],
    correct: 1,
    explanation: "Classic dangling modifier! The sentence implies the rain was walking home. You were walking — say so. 'Walking home, I got rained on.'"
  },
  {
    module_id: 'grammar',
    type: 'tf',
    text: "TRUE OR FALSE: 'Less' is correct for countable nouns (e.g. 'less apples'). 🍎",
    correct: 1, // False
    explanation: "False! Use 'fewer' for things you can count. 'Fewer apples', 'less juice'. The supermarket express lane sign has been wrong for decades."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Lie vs Lay: 'I need to ___ down for a nap.' 😴",
    options: ['lay', 'lie', 'lain', 'laid'],
    correct: 1,
    explanation: "'Lie' = to recline (no object). 'Lay' = to place something down (needs an object). 'I lie down. I lay the book down.' Even native speakers get this wrong constantly."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Affect vs Effect: 'The weather ___ his mood significantly.' 🌧️",
    options: ['effects', 'affects', 'effect', 'affect'],
    correct: 1,
    explanation: "'Affect' is usually the VERB. 'Effect' is usually the NOUN. The weather *affects* his mood. The effect on his mood is gloomy. Memorize this. Save friendships."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Third Conditional: 'If she ___ harder, she would have passed.' 📚",
    options: ['studied', 'had studied', 'would study', 'studies'],
    correct: 1,
    explanation: "Third conditional = past regrets. 'If + past perfect, would have + past participle.' She didn't study. We know. The tense rubs it in."
  },
  {
    module_id: 'grammar',
    type: 'tf',
    text: "TRUE OR FALSE: 'I am used to wake up early' is correct English. ⏰",
    correct: 1, // False
    explanation: "'Be used to' must be followed by a gerund (-ing). 'I am used to waking up early.' 'Used to + infinitive' is for past habits only: 'I used to wake up late.'"
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Question Tag: 'You haven't seen my keys, ___?' 🔑",
    options: ['haven\'t you', 'have you', 'did you', 'don\'t you'],
    correct: 1,
    explanation: "Positive statement → negative tag. Negative statement → positive tag. 'You haven't seen them, have you?' Negative sentence, positive tag. Got it? Have you?"
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Make or Do? 'She ___ a huge mistake at work.' 🤦",
    options: ['did', 'made', 'Both work', 'Neither'],
    correct: 1,
    explanation: "'Make a mistake' is fixed. You also make a cake, make friends, make progress. You 'do' homework, do exercise, do damage. English collocations: learn them or chaos."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Relative Clause: 'The man ___ called you is outside.' 👤",
    options: ['which', 'whom', 'who', 'whose'],
    correct: 2,
    explanation: "'Who' for people. 'Which' for things. 'Whose' for possession. 'The man who called' — not 'which called'. He's a person, not a lamp."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "So or Such? 'It was ___ a boring lecture that half the class fell asleep.' 😪",
    options: ['so', 'such', 'very', 'too'],
    correct: 1,
    explanation: "'Such + a/an + adjective + noun'. 'So + adjective' (without the noun). 'Such a boring lecture' — the noun 'lecture' is there, so use 'such'."
  },
  {
    module_id: 'grammar',
    type: 'tf',
    text: "TRUE OR FALSE: Double negatives are always incorrect in Standard English. ❌",
    correct: 0, // True
    explanation: "True — in Standard English, two negatives make a positive. 'I don't know nothing' means 'I know something.' Many dialects use them anyway, and those dialects are also valid."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Present Perfect vs Past Simple: '___ to New York twice.' 🗽",
    options: ['I went', 'I have been', 'I was going', 'I had gone'],
    correct: 1,
    explanation: "Life experience up to now → present perfect. 'I have been to New York twice.' If you said a specific time ('in 2019'), switch to past simple: 'I went in 2019.'"
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Causative Have: 'I ___ my hair cut yesterday.' ✂️",
    options: ['got', 'had', 'Both are correct', 'made'],
    correct: 2,
    explanation: "'Have + object + past participle' AND 'Get + object + past participle' both work for causatives. You paid someone else to do it. Equally valid, equally lazy (in the best way)."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Wish + Would: 'I wish my neighbor ___ stop playing drums at midnight.' 🥁",
    options: ['will', 'would', 'could', 'should'],
    correct: 1,
    explanation: "'Wish + would' expresses annoyance about someone's behavior. 'I wish he would stop.' Polite way of saying you've considered moving countries."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Modal Madness: 'You ___ see a doctor — that cough sounds terrible.' 🩺",
    options: ['must', 'should', 'Both work but with different strength', 'can'],
    correct: 2,
    explanation: "'Must' = strong obligation or strong advice. 'Should' = recommendation. 'You must see a doctor' is urgent. 'You should' is polite suggestion. Both fine, different pressure levels."
  },
  {
    module_id: 'grammar',
    type: 'tf',
    text: "TRUE OR FALSE: 'Since' is used with a point in time and 'for' with a duration. ⏳",
    correct: 0, // True
    explanation: "Correct! 'I've been waiting since 3pm' (point in time). 'I've been waiting for two hours' (duration). Mix these up and native speakers will quietly judge you."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Inversion Alert: '___ had I left the house when it started raining.' ☁️",
    options: ['Hardly', 'No sooner', 'Scarcely', 'All of the above'],
    correct: 3,
    explanation: "All three trigger inversion in formal English! 'Hardly had I left...' / 'No sooner had I left...' / 'Scarcely had I left...' Fancy, dramatic, and grammatically correct."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Despite or Although? '___ being tired, she finished the marathon.' 🏃",
    options: ['Although', 'Despite', 'Even though', 'But'],
    correct: 1,
    explanation: "'Despite/In spite of' + noun/gerund. 'Although/Even though' + clause (subject + verb). 'Despite BEING tired' (gerund). 'Although she WAS tired' (clause)."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Linking Verb Check: 'This soup ___ delicious.' 🍜",
    options: ['smells', 'is smelling', 'has smelled', 'was smelling'],
    correct: 0,
    explanation: "'Smell', 'taste', 'look', 'feel' are linking verbs when describing a state. No continuous form. 'It smells delicious' — not 'is smelling'. The soup is not actively performing a smell."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Comparatives: 'This is ___ the hardest exam I've ever taken.' 😰",
    options: ['by far', 'much more', 'far more', 'way'],
    correct: 0,
    explanation: "'By far + superlative' is the correct intensifier. 'By far the hardest.' 'Much' and 'far' work with comparatives ('much harder'), not superlatives."
  },
  {
    module_id: 'grammar',
    type: 'tf',
    text: "TRUE OR FALSE: 'The data is clear' is always grammatically wrong. 📊",
    correct: 1, // False
    explanation: "False! 'Data' is technically the plural of 'datum', so purists say 'the data ARE'. But in modern everyday English, 'data is' is widely accepted. Language evolves. Deal with it."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Mixed Conditional: 'If I ___ a doctor, I wouldn't be so worried now.' 🏥",
    options: ['am', 'were', 'was', 'would be'],
    correct: 1,
    explanation: "Mixed conditional: past condition → present result (or vice versa). 'If I were a doctor' (I'm not — hypothetical present). '...I wouldn't be worried now.' Sadly, you're not."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "As Soon As: 'Call me as soon as you ___.' 📞",
    options: ['will arrive', 'arrive', 'are arriving', 'would arrive'],
    correct: 1,
    explanation: "Time clauses (as soon as, when, after, before) use present simple for future meaning. NOT 'will arrive'. 'Call me as soon as you arrive.' This trips up almost everyone."
  },
  {
    module_id: 'grammar',
    type: 'mcq',
    text: "Possessive with Names: Which is correct? 'James ___ bike was stolen.' 🚲",
    options: ["James' bike", "James's bike", "Both are acceptable", "James bike"],
    correct: 2,
    explanation: "Both 'James' bike' and 'James's bike' are accepted. Style guides disagree. AP Stylebook says James', Chicago Manual says James's. Pick one and commit."
  },

  // ==================== CIVILIZATION (23 new) ====================

  {
    module_id: 'civilization',
    type: 'mcq',
    text: "British Slang 101: What does 'gutted' mean in the UK? 💔",
    options: ['Very full after eating', 'Extremely disappointed', 'Very tired', 'Slightly confused'],
    correct: 1,
    explanation: "'I'm absolutely gutted!' = devastated, deeply disappointed. As in: 'The football team lost in the finals. Gutted.' A versatile word for British misery."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "Rhyming Slang: In Cockney, 'dog and bone' means what? 📱",
    options: ['Home', 'Phone', 'Alone', 'Groan'],
    correct: 1,
    explanation: "Cockney rhyming slang replaces a word with a rhyming phrase. 'Dog and bone' = phone. 'I'm on the dog' = I'm on the phone. Londoners made language a puzzle on purpose."
  },
  {
    module_id: 'civilization',
    type: 'tf',
    text: "British Vocabulary 🇬🇧: Is the word 'fortnight' commonly used in British English to mean two weeks?",
    correct: 0, // True
    explanation: "True! 'Fortnight' comes from 'fourteen nights'. Americans don't really use it, but it's completely normal in British, Australian, and NZ English. Fortnightly meetings, anyone?"
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "Australian Slang: What does 'arvo' mean in Australian English? ☀️",
    options: ['Morning', 'Afternoon', 'Evening', 'Weekend'],
    correct: 1,
    explanation: "Australians shorten everything. 'Arvo' = afternoon. 'Servo' = service station. 'Brekky' = breakfast. 'Avo' = avocado (nothing to do with arvo). Don't mix them up."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "American English: What do Americans call the 'boot' of a car? 🚗",
    options: ['Hood', 'Trunk', 'Back', 'Storage'],
    correct: 1,
    explanation: "British: boot (trunk), bonnet (hood). American: trunk (boot), hood (bonnet). Same cars, completely different vocabulary. Road trip confusion guaranteed."
  },
  {
    module_id: 'civilization',
    type: 'tf',
    text: "Pub Culture 🍻: In the UK, is it customary to buy a round of drinks for your entire group?",
    correct: 0, // True
    explanation: "Absolutely. 'Getting your round in' is a social contract. Refusing to buy a round when it's your turn is considered deeply rude. The pub is where British social law is enforced."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "Idiom Origin: 'Bob's your uncle' is a British expression meaning... 🎩",
    options: ['You have a rich relative', 'And there you have it / it\'s that simple', 'You\'re lucky', 'Something unexpected happened'],
    correct: 1,
    explanation: "Said after explaining something: 'Add the ingredients, stir, and Bob's your uncle!' Possibly from PM Robert (Bob) Cecil nepotistically appointing his nephew to cabinet in 1887."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "Vocabulary Gap: What do the British call an 'elevator'? 🏢",
    options: ['Escalator', 'Lift', 'Rise', 'Stairwell'],
    correct: 1,
    explanation: "British: lift. American: elevator. Also: British 'flat' = American 'apartment'. 'Nappy' = 'diaper'. 'Queue' = 'line'. Same language, different words. Endless fun."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "Idiom Detective: 'Under the weather' means... 🌡️",
    options: ['Outdoors in bad conditions', 'Feeling slightly ill', 'Very depressed', 'Being pessimistic'],
    correct: 1,
    explanation: "Feeling slightly sick or unwell. Possibly from sailors who went below deck when ill — literally under the weather deck. Etymology that actually makes sense for once."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "Spelling Divide: Americans write 'color' and 'honor'. How do the British spell them? 🖊️",
    options: ['Colour, Honour', 'Colour, Honor', 'Color, Honour', 'Same as Americans'],
    correct: 0,
    explanation: "British English keeps the 'u': colour, honour, favour, neighbour. Noah Webster simplified American spellings in the early 1800s. He had opinions. Strong ones."
  },
  {
    module_id: 'civilization',
    type: 'tf',
    text: "Scottish Culture 🏴󠁧󠁢󠁳󠁣󠁴󠁿: Is haggis the national dish of Scotland?",
    correct: 0, // True
    explanation: "True! Haggis is sheep's offal mixed with oatmeal, onions, and spices, cooked in a sheep's stomach. Burns Night (Jan 25th) is dedicated to eating it. Robert Burns wrote a poem TO it."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "Irish Slang: What does 'grand' mean in Irish English? 🇮🇪",
    options: ['Magnificent', 'Fine/okay', 'Terrible', 'Very large'],
    correct: 1,
    explanation: "'Grand' in Ireland means fine, okay, not bad. 'How are you?' 'Ah, grand.' It's the most non-committal positive word in existence. Not grand. Just... grand."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "British Slang: 'That film was absolutely brilliant!' In the US, you'd more likely say... 🎬",
    options: ['Splendid', 'Awesome', 'Magnificent', 'Glorious'],
    correct: 1,
    explanation: "British English uses 'brilliant' very casually. Americans reach for 'awesome', 'amazing', or 'great'. British 'brilliant' ≠ genius-level; it just means good/excellent."
  },
  {
    module_id: 'civilization',
    type: 'tf',
    text: "New Zealand Culture 🥝: Is the kiwi bird the national symbol of New Zealand?",
    correct: 0, // True
    explanation: "True! The kiwi is the national bird — flightless, nocturnal, and a bit odd. New Zealanders themselves are nicknamed 'Kiwis', which they wear with pride."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "Idiom or Insult? 'He's a bit of a wet blanket.' What do you mean? 🙄",
    options: ['He is always cold', 'He dampens the mood and enthusiasm', 'He is very careful', 'He is clumsy'],
    correct: 1,
    explanation: "A wet blanket is someone who spoils fun by being unenthusiastic or pessimistic. 'Don't be a wet blanket' = stop being a buzzkill. Evocative imagery."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "Word Export: The word 'pyjamas' came into English from which language? 🛏️",
    options: ['French', 'Hindi/Urdu', 'Arabic', 'Persian'],
    correct: 1,
    explanation: "From Hindi/Urdu 'pāyjāma' (leg garment). English borrowed heavily from Hindi during the colonial period: jungle, shampoo, bungalow, loot, thug. The language is a magpie."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "Cultural Gesture: Giving a thumbs up in the US means 'good'. In which country can it be an offensive gesture? 👍",
    options: ['Germany', 'Australia', 'Iran', 'Japan'],
    correct: 2,
    explanation: "In Iran (and some other Middle Eastern countries), a thumbs up can be an obscene gesture. Body language is NOT universal. Research before you hitchhike."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "The Word 'Bloody': What part of speech is it in 'That's bloody brilliant!'? 🇬🇧",
    options: ['Adjective', 'Adverb', 'Interjection', 'Verb'],
    correct: 1,
    explanation: "Here 'bloody' is an adverb modifying the adjective 'brilliant'. It's a British intensifier — mild profanity, high usage. Like 'damn' in American English, but more charming."
  },
  {
    module_id: 'civilization',
    type: 'tf',
    text: "American Culture 🇺🇸: Is Black Friday the day after Thanksgiving in the US?",
    correct: 0, // True
    explanation: "True! The Friday after Thanksgiving is the unofficial start of Christmas shopping season. It's called 'Black Friday' because stores historically went from 'in the red' to 'in the black' (profit)."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "Idiom Unpacked: 'To spill the beans' means... 🫘",
    options: ['To make a mess', 'To reveal a secret accidentally', 'To get angry', 'To be generous'],
    correct: 1,
    explanation: "To accidentally reveal secret information. Possibly from ancient Greece where votes were cast with beans in jars — knocking one over revealed the result. Leaking info since 500 BC."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "South African English: What does 'braai' refer to? 🔥",
    options: ['A traditional dance', 'A barbecue', 'A type of beer', 'A greeting'],
    correct: 1,
    explanation: "A 'braai' is a South African barbecue — more than a cooking method, it's a social institution. National Braai Day exists. It's serious. Don't bring a gas grill."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "English Pub Etiquette: How do you typically get served at a traditional British pub? 🍺",
    options: ['Flag down a waiter', 'Press a service button', 'Queue at the bar and wait to be noticed', 'Make a reservation in advance'],
    correct: 2,
    explanation: "At the bar, in order of arrival, without shouting or waving money. The bartender will work through customers mentally. Patience is required. Cutting the invisible queue is a sin."
  },
  {
    module_id: 'civilization',
    type: 'mcq',
    text: "Americanism Alert: An American says 'I'll table this discussion.' What do they mean? 📋",
    options: ['They want to discuss it now', 'They want to postpone it', 'The table will be involved', 'They\'re refusing to discuss it'],
    correct: 1,
    explanation: "In American English, 'to table' means to postpone. In British English, it means the OPPOSITE — to bring something forward for immediate discussion. Same phrase. Opposite meanings. Classic."
  },

  // ==================== FACTS (22 new) ====================

  {
    module_id: 'facts',
    type: 'mcq',
    text: "Longest Word: What is the longest word in a major English dictionary? 🔬",
    options: [
      'Antidisestablishmentarianism',
      'Floccinaucinihilipilification',
      'Pneumonoultramicroscopicsilicovolcanoconiosis',
      'Supercalifragilisticexpialidocious'
    ],
    correct: 2,
    explanation: "45 letters. A lung disease caused by inhaling fine silica dust. Try saying it five times fast. Actually, try saying it once. 'Supercalifragilistic' is made up, so it doesn't count."
  },
  {
    module_id: 'facts',
    type: 'tf',
    text: "Word History: The word 'girl' originally meant a young person of ANY gender. 👦👧",
    correct: 0, // True
    explanation: "True! In Middle English, 'girl' (or 'gerle') meant a child or young person regardless of sex. 'Knave girl' meant boy; 'gay girl' meant young woman. Language: always surprising."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "OK Origins: Where did the word 'OK' most likely come from? ✅",
    options: [
      'From the Choctaw word "okeh"',
      'From a 19th-century joke abbreviating "oll korrect" (all correct)',
      'From President Martin Van Buren\'s nickname "Old Kinderhook"',
      'Historians debate between options 1, 2, and 3'
    ],
    correct: 3,
    explanation: "All three theories exist! The most documented origin is the 1839 Boston newspaper joke abbreviation 'OK' for 'oll korrect'. Van Buren's 'OK' club amplified it. The most debated two letters in history."
  },
  {
    module_id: 'facts',
    type: 'tf',
    text: "Word Evolution: The word 'awful' originally meant something inspiring awe — in a GOOD way. 😇",
    correct: 0, // True
    explanation: "True! 'Awful' once meant 'inspiring awe' (positive). Over centuries it flipped to mean terrible. 'Awesome' kept the positive meaning. 'Awful' got all the negativity. Life is unfair even for words."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "Etymology: 'Goodbye' is a contraction of which original phrase? 👋",
    options: ['Go with beauty', 'God be with you', 'Good be your way', 'Go, be well'],
    correct: 1,
    explanation: "'Goodbye' = 'God be with ye' — compressed over centuries. Similarly, 'farewell' = 'fare well'. English says emotional things by accident while thinking it's just saying bye."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "Contronyms: What is a word that is its own antonym called? 🔄",
    options: ['Palindrome', 'Homophone', 'Contronym (or auto-antonym)', 'Oxymoron'],
    correct: 2,
    explanation: "'Cleave' means to split AND to cling together. 'Sanction' means to permit AND to penalize. 'Dust' means to remove dust AND to apply dust. These contronyms are here to confuse you forever."
  },
  {
    module_id: 'facts',
    type: 'tf',
    text: "Language Stats: English is the official language of more countries than any other language. 🌍",
    correct: 0, // True
    explanation: "True! English has official status in about 67 countries plus 27 non-sovereign entities. Partly by design, mostly by colonial legacy. It spread far, for better or worse."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "Word Origins: The word 'disaster' literally translates as... ⭐",
    options: ['Bad luck', 'Bad star', 'Evil omen', 'Great fall'],
    correct: 1,
    explanation: "From Italian 'disastro': 'dis' (bad) + 'astro' (star). Ancient people blamed catastrophes on unfavorable star alignments. 'It was written in the stars' — specifically, bad ones."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "Pirate Accent: The classic 'pirate accent' (arrr, matey!) is based on the accent of which English region? 🏴‍☠️",
    options: ['Cornwall', 'Yorkshire', 'West Country (Bristol/Somerset)', 'East London'],
    correct: 2,
    explanation: "Actor Robert Newton, born in the West Country, popularized the accent in the 1950 film Treasure Island. His exaggerated West Country drawl became 'pirate'. One man changed how we hear pirates."
  },
  {
    module_id: 'facts',
    type: 'tf',
    text: "Word Myth: The word 'assassin' derives from the Arabic word for 'hashish users'. 🗡️",
    correct: 0, // True
    explanation: "True! From Arabic 'ḥashīshiyyīn' — allegedly because the Hashshashin sect (medieval Middle Eastern assassins) used hashish. Modern historians debate this, but the etymology stuck."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "Neologism: A 'portmanteau word' combines two words. Which of these is a portmanteau? 🧳",
    options: ['Telephone', 'Brunch', 'Alphabet', 'Synonym'],
    correct: 1,
    explanation: "'Brunch' = breakfast + lunch. Other portmanteaus: smog (smoke+fog), blog (web+log), motel (motor+hotel), Brexit (Britain+exit). Lazy word-making. Efficient results."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "Silent Letters: Why is the 'k' silent in 'knight', 'knife', and 'know'? 🗡️",
    options: ['It was always silent', 'The k was once pronounced but English simplified it over centuries', 'French influence removed the sound', 'It was a printer\'s error that stuck'],
    correct: 1,
    explanation: "In Old and Middle English, the 'k' WAS pronounced ('k-nife', 'k-night'). Over time, English dropped it from speech but kept it in spelling. The word knows what it used to be."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "Word Count: Approximately how many words does the English language have? 📖",
    options: ['Around 100,000', 'Around 250,000', 'Over 500,000', 'Around 1 million'],
    correct: 2,
    explanation: "Most estimates put it at 500,000–1,000,000 depending on what counts as a 'word'. The average educated native speaker actively uses about 20,000–35,000. The rest are just showing off."
  },
  {
    module_id: 'facts',
    type: 'tf',
    text: "Etymology: The word 'silly' once meant 'blessed' or 'happy' in Old English. 😇",
    correct: 0, // True
    explanation: "True! Old English 'sælig' meant blessed/happy. Over centuries it drifted: happy → innocent → naive → foolish. Language is just slow-motion insult evolution."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "The @ Symbol: What is the official name of the '@' sign? 📧",
    options: ['Ampersat', 'At sign', 'Commercial at', 'All of these are used'],
    correct: 3,
    explanation: "It's called the 'at sign', 'commercial at', 'ampersat', and many other names internationally. In German it's 'Klammeraffe' (spider monkey). Different countries gave it wildly different names."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "Etymology: The word 'hazard' came into English from Arabic 'az-zahr', meaning... 🎲",
    options: ['Danger', 'Dice', 'Fate', 'Wind'],
    correct: 1,
    explanation: "'Az-zahr' means dice — gambling was seen as inherently risky. Through Spanish and French, 'hazard' entered English meaning risk or danger. Gambling is literally in the etymology of danger."
  },
  {
    module_id: 'facts',
    type: 'tf',
    text: "Record Breaker: The word 'I' is the most commonly used word in the English language. 👤",
    correct: 1, // False
    explanation: "False! 'The' is the most common word. 'I' ranks much lower. The top 5 are typically: the, be, to, of, and. We're less self-centered than we thought. Marginally."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "Berserk Origins: The word 'berserk' comes from Norse mythology. What were 'berserkers'? ⚔️",
    options: ['Cowardly soldiers', 'Frenzied Norse warriors who fought in a trance-like rage', 'Court jesters', 'Wise elders'],
    correct: 1,
    explanation: "Norse berserkers were warriors said to fight in an uncontrollable rage, wearing bear skins ('ber' = bear). They gave English both the word 'berserk' and the concept of going absolutely feral."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "Word Mystery: What is a 'ghost word'? 👻",
    options: [
      'A word with no known origin',
      'A word created by a printing error that entered the dictionary',
      'A word that has completely disappeared from use',
      'A word that means something after someone dies'
    ],
    correct: 1,
    explanation: "'Dord' appeared in the 1934 Merriam-Webster dictionary — it was a printing error for 'D or d' (abbreviation for density). It lived in the dictionary for 5 years. Ghost words: real words that shouldn't exist."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "Etymology: 'Mortgage' comes from Old French and literally means... 🏠",
    options: ['Monthly payment', 'Death pledge', 'Land contract', 'Binding promise'],
    correct: 1,
    explanation: "'Mort' (death) + 'gage' (pledge). It's literally a 'death pledge' — either you pay it off (the pledge dies) or you die still paying. Old French lawyers were not optimists."
  },
  {
    module_id: 'facts',
    type: 'tf',
    text: "Language Fact: The word 'naughty' once meant 'having nothing' or 'being poor' in Middle English. 🪙",
    correct: 0, // True
    explanation: "True! From 'naught' (nothing). A 'naughty' person had naught — nothing, worthless. It shifted from 'poor' → 'morally worthless' → 'mischievous'. Words climb down in meaning over time."
  },
  {
    module_id: 'facts',
    type: 'mcq',
    text: "Clue Origins: The word 'clue' originally meant a ball of... 🧶",
    options: ['String/thread', 'Wool/yarn', 'Cotton', 'Both string and wool — it meant a ball of thread'],
    correct: 3,
    explanation: "From Greek myth: Ariadne gave Theseus a ball of thread ('clew') to navigate the labyrinth. 'Clew' = ball of yarn. Finding the thread = finding the answer. 'I haven't got a clue' = lost in the maze."
  },

  // ==================== COMPREHENSION (9 new) ====================

  {
    module_id: 'comprehension',
    type: 'comprehension',
    passage: "The memo from HR arrived at 9am on a Monday. 'Effective immediately,' it read, 'all employees are encouraged to bring their authentic selves to work.' By 9:45, Derek had arrived wearing a Viking helmet and refused to answer to anything other than 'Bjorn the Unconquered'. HR issued a follow-up memo by noon clarifying that 'authentic self' had a dress code.",
    sub_questions: JSON.stringify([
      {
        text: "What did the original HR memo encourage?",
        options: ["Better punctuality", "Bringing authentic selves to work", "A new dress code", "Team-building activities"],
        correct: 1
      },
      {
        text: "What did Derek do in response to the memo?",
        options: ["Ignored it completely", "Wore a Viking helmet and renamed himself", "Complained to HR", "Organized a meeting"],
        correct: 1
      },
      {
        text: "What was the tone of the follow-up memo?",
        options: ["Apologetic", "Restrictive — it added a dress code caveat", "Encouraging", "Celebratory"],
        correct: 1
      }
    ])
  },
  {
    module_id: 'comprehension',
    type: 'comprehension',
    passage: "The naturalist's field notes, dated September 3rd, read as follows: 'Observed subject again at 06:14. Creature follows the same route daily — northeast along the fence, pause at the oak, three circles, sit. Duration: eleven minutes. Weather has no apparent effect. Have concluded it is not searching for food. Am beginning to suspect it is simply enjoying the morning. Will continue observation.' The subject of the notes was a golden retriever named Biscuit.",
    sub_questions: JSON.stringify([
      {
        text: "What time did the naturalist observe the subject?",
        options: ["06:00", "06:14", "09:03", "The notes don't say"],
        correct: 1
      },
      {
        text: "What did the naturalist conclude the creature was doing?",
        options: ["Hunting for food", "Patrolling territory", "Simply enjoying the morning", "Exercising"],
        correct: 2
      },
      {
        text: "What was the unexpected reveal at the end?",
        options: ["It was a wild animal", "It was a cat", "It was a dog named Biscuit", "It was the naturalist's own pet"],
        correct: 2
      }
    ])
  },
  {
    module_id: 'comprehension',
    type: 'comprehension',
    passage: "The one-star review began: 'Arrived at 7pm. The waiter was polite. The food was perfectly cooked. The ambience was lovely. The wine was exceptional.' It then continued: 'However, I noticed that the salt shaker was placed slightly to the left of where I personally feel salt shakers belong. I cannot in good conscience award more than one star.' The restaurant responded: 'We have moved the salt shaker. We hope you will return.'",
    sub_questions: JSON.stringify([
      {
        text: "Why did the reviewer give a one-star rating?",
        options: [
          "The food was cold",
          "The service was rude",
          "The salt shaker was in the wrong position",
          "The wine was bad"
        ],
        correct: 2
      },
      {
        text: "How did the restaurant respond?",
        options: [
          "They disputed the review",
          "They ignored it",
          "They moved the salt shaker and invited the reviewer back",
          "They called the reviewer directly"
        ],
        correct: 2
      },
      {
        text: "What is the overall tone of the passage?",
        options: ["Tragic", "Informative", "Comedic / satirical", "Dramatic"],
        correct: 2
      }
    ])
  },
  {
    module_id: 'comprehension',
    type: 'comprehension',
    passage: "The scientist recorded her final entry: 'Day 47. The sourdough starter has survived. Despite the power outage, the renovation, and what I can only describe as the Great Forgotten Fridge Incident of Day 23, Gerald persists. I have named him Gerald. I was not going to name him. That was three weeks ago. Gerald is family now. Experiment conclusion: unclear. Gerald's conclusion: thriving.'",
    sub_questions: JSON.stringify([
      {
        text: "What is Gerald?",
        options: ["A lab rat", "A sourdough starter", "A plant specimen", "A fellow scientist"],
        correct: 1
      },
      {
        text: "What event happened on Day 23?",
        options: ["The power outage", "The renovation", "The Great Forgotten Fridge Incident", "Gerald was named"],
        correct: 2
      },
      {
        text: "How did the scientist's attitude toward Gerald change over the 47 days?",
        options: [
          "She became more scientific and detached",
          "She started professionally but grew emotionally attached",
          "She was always sentimental about it",
          "She tried to get rid of Gerald"
        ],
        correct: 1
      }
    ])
  },
  {
    module_id: 'comprehension',
    type: 'comprehension',
    passage: "The job interview was going well until the candidate said, 'My biggest weakness? I'm a perfectionist.' The interviewer wrote something down. The candidate added, 'I also sometimes work too hard.' The interviewer wrote something else down. 'And I care too much about my colleagues.' The interviewer capped her pen, looked up, and said: 'Could you tell me about an actual weakness?' There was a very long pause.",
    sub_questions: JSON.stringify([
      {
        text: "What was the candidate's strategy at the start?",
        options: [
          "Being honest about real flaws",
          "Giving fake weaknesses that sound like strengths",
          "Refusing to answer",
          "Changing the subject"
        ],
        correct: 1
      },
      {
        text: "How did the interviewer respond?",
        options: [
          "She was impressed",
          "She asked the candidate to leave",
          "She asked for a genuine weakness",
          "She gave the candidate the job"
        ],
        correct: 2
      },
      {
        text: "What does the 'very long pause' at the end suggest?",
        options: [
          "The candidate had many real weaknesses to choose from",
          "The candidate was caught off guard and had no genuine answer ready",
          "The interviewer fell asleep",
          "The candidate was thinking of another fake weakness"
        ],
        correct: 1
      }
    ])
  },
  {
    module_id: 'comprehension',
    type: 'comprehension',
    passage: "The travel diary entry read: 'Arrived in London. It is raining. Asked a local how often it rains. He said, \"Not that often, actually.\" It continued raining for six days. On day seven, the sun appeared briefly at 11:43am. A crowd gathered. Someone started clapping. The sun left after four minutes. Everyone dispersed without comment, as though nothing had happened. I think I understand the British now.'",
    sub_questions: JSON.stringify([
      {
        text: "What did the local say about the rain?",
        options: [
          "It rains constantly",
          "It doesn't rain that often",
          "It only rains in autumn",
          "They didn't comment on the rain"
        ],
        correct: 1
      },
      {
        text: "How long did the sun appear on day seven?",
        options: ["An hour", "All morning", "About four minutes", "The diary doesn't say exactly"],
        correct: 2
      },
      {
        text: "What did the writer conclude from the experience?",
        options: [
          "London weather is unpredictable",
          "British people hate rain",
          "They gained insight into British cultural stoicism and relationship with weather",
          "They decided to move to London"
        ],
        correct: 2
      }
    ])
  },
  {
    module_id: 'comprehension',
    type: 'comprehension',
    passage: "The notice pinned to the staff room fridge read: 'Someone has been eating lunches that do not belong to them. This has been happening since Tuesday. If you are the person responsible, please know: the lasagne on Thursday was mine. I made it on Sunday. I labelled it. It had my name on it twice. I am not angry. I am just deeply, profoundly disappointed. — Margaret.' Below it, in different handwriting: 'It was incredible. — Anonymous.'",
    sub_questions: JSON.stringify([
      {
        text: "What problem is Margaret's note addressing?",
        options: [
          "A broken fridge",
          "Someone taking her labelled food",
          "An unlabelled lunch dispute",
          "Staff room cleanliness"
        ],
        correct: 1
      },
      {
        text: "How did Margaret describe her emotional state?",
        options: [
          "Furious",
          "Confused",
          "Deeply disappointed, not angry",
          "Amused"
        ],
        correct: 2
      },
      {
        text: "What is ironic about the anonymous reply?",
        options: [
          "They apologized but did it again",
          "They complimented the stolen food without remorse",
          "They claimed they didn't take it",
          "They offered to replace the lasagne"
        ],
        correct: 1
      }
    ])
  },
  {
    module_id: 'comprehension',
    type: 'comprehension',
    passage: "The instruction manual for the device began: 'Step 1: Plug in the device. Step 2: Turn it on. Step 3: If it does not turn on, consult Step 1.' Most users never needed Step 3. A surprising number, however, required Step 4, which read: 'If the device still does not work after completing Steps 1–3, please confirm that the wall socket itself is functioning. We have included this step based on feedback.'",
    sub_questions: JSON.stringify([
      {
        text: "What does Step 3 tell the user to do?",
        options: [
          "Contact customer support",
          "Consult Step 1 (check it's plugged in)",
          "Press the reset button",
          "Read the warranty"
        ],
        correct: 1
      },
      {
        text: "Why was Step 4 added to the manual?",
        options: [
          "Legal requirements",
          "Because engineers thought it was funny",
          "Based on user feedback — people had tried plugged-in but non-functioning sockets",
          "It was in the original design"
        ],
        correct: 2
      },
      {
        text: "What does the passage humorously imply about users?",
        options: [
          "They are very technically skilled",
          "They often skip instruction manuals",
          "A notable number failed to check basic things like whether the socket worked",
          "They prefer video tutorials"
        ],
        correct: 2
      }
    ])
  },
  {
    module_id: 'comprehension',
    type: 'comprehension',
    passage: "In 1987, a small radio station in Ohio received a single letter of complaint. It read: 'Dear Station, I enjoy your music very much. However, I feel that you play \"Don't Stop Believin'\" by Journey too frequently. Specifically, you play it every day at 2pm. It has been eleven months. I now associate it with my lunch break, my digestion, and a vague sense of existential uncertainty. Please consider alternatives. Regards, Howard.' The station responded by making it their official 2pm song. They still play it.",
    sub_questions: JSON.stringify([
      {
        text: "What was Howard's complaint?",
        options: [
          "The song quality was poor",
          "The station played one song too frequently at the same time every day",
          "The DJs talked too much",
          "The signal was weak"
        ],
        correct: 1
      },
      {
        text: "What effect had the repetition had on Howard?",
        options: [
          "He had memorized every lyric",
          "He had grown to love the song",
          "He associated it with his lunch, digestion, and existential uncertainty",
          "He started liking Journey's other songs"
        ],
        correct: 2
      },
      {
        text: "How did the radio station respond to the complaint?",
        options: [
          "They removed the song from rotation",
          "They apologized and changed the time",
          "They made it their official 2pm song and kept playing it",
          "They contacted Journey directly"
        ],
        correct: 2
      }
    ])
  }

];

const insert = db.prepare(`
  INSERT INTO questions (module_id, type, text, options, correct, explanation, passage, sub_questions)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

db.transaction(() => {
  for (const q of newQuestions) {
    insert.run(
      q.module_id,
      q.type,
      q.text || null,
      q.options ? JSON.stringify(q.options) : null,
      q.correct !== undefined ? q.correct : null,
      q.explanation || null,
      q.passage || null,
      q.sub_questions || null
    );
  }
})();

console.log(`Added ${newQuestions.length} spicy new questions! 🌶️📚`);
db.close();
